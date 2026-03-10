const express = require('express');
const session = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);
const helmet = require('helmet');
const bcrypt = require('bcrypt');
const path = require('path');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;
const SITE_URL = process.env.SITE_URL || 'https://bitcoin.rocks';
const SESSION_SECRET = process.env.SESSION_SECRET || 'change-me-in-production-' + Math.random().toString(36);
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY || '';

// ============================================================
// MIDDLEWARE
// ============================================================

// Security headers
app.use(helmet({
  contentSecurityPolicy: false // We serve simple HTML, no need for strict CSP
}));

// Trust Railway's proxy for correct IP detection
app.set('trust proxy', 1);

// Parse form data
app.use(express.urlencoded({ extended: true, limit: '1mb' }));
app.use(express.json({ limit: '1mb' }));

// Sessions
const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'data', 'forms.db');
app.use(session({
  store: new SQLiteStore({
    db: 'sessions.db',
    dir: path.dirname(DB_PATH)
  }),
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    sameSite: 'lax'
  }
}));

// Static files for admin panel
app.use('/admin/static', express.static(path.join(__dirname, 'public')));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Make session user available to all views
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

// ============================================================
// AUTO-SEED ON FIRST RUN
// ============================================================

(async function autoSeed() {
  const formCount = db.prepare('SELECT COUNT(*) as count FROM forms').get();
  if (formCount.count === 0) {
    console.log('No forms found — running seed...');
    require('./seed');
  }
})();

// ============================================================
// HELPER FUNCTIONS
// ============================================================

function getClientIP(req) {
  return req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
}

function requireAuth(req, res, next) {
  if (!req.session.user) {
    return res.redirect('/admin/login');
  }
  next();
}

function requireAdmin(req, res, next) {
  if (!req.session.user || !req.session.user.is_admin) {
    return res.status(403).render('error', {
      title: 'Access Denied',
      message: 'You do not have permission to access this page.'
    });
  }
  next();
}

function getUserForms(userId, isAdmin) {
  if (isAdmin) {
    return db.prepare('SELECT * FROM forms ORDER BY name').all();
  }
  return db.prepare(`
    SELECT f.* FROM forms f
    INNER JOIN user_forms uf ON f.id = uf.form_id
    WHERE uf.user_id = ?
    ORDER BY f.name
  `).all(userId);
}

function userHasFormAccess(userId, isAdmin, formId) {
  if (isAdmin) return true;
  const access = db.prepare(
    'SELECT 1 FROM user_forms WHERE user_id = ? AND form_id = ?'
  ).get(userId, formId);
  return !!access;
}

function getFormRegion(slug) {
  if (slug.includes('usa')) return 'usa';
  if (slug.includes('canada')) return 'canada';
  return null;
}

function userCanBlacklist(userId) {
  const user = db.prepare('SELECT is_admin, can_blacklist FROM users WHERE id = ?').get(userId);
  if (!user) return false;
  return !!user.is_admin || !!user.can_blacklist;
}

function escapeCSV(value) {
  if (value === null || value === undefined) return '';
  const str = String(value);
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

// Normalize an address by stripping common variations spammers use
function normalizeAddress(address) {
  return address
    .toLowerCase()
    // Normalize street type suffixes to their abbreviations
    .replace(/\b(street)\b/gi, 'st')
    .replace(/\b(avenue)\b/gi, 'ave')
    .replace(/\b(boulevard)\b/gi, 'blvd')
    .replace(/\b(drive)\b/gi, 'dr')
    .replace(/\b(place)\b/gi, 'pl')
    .replace(/\b(court)\b/gi, 'ct')
    .replace(/\b(lane)\b/gi, 'ln')
    .replace(/\b(road)\b/gi, 'rd')
    .replace(/\b(circle)\b/gi, 'cir')
    .replace(/\b(terrace)\b/gi, 'ter')
    .replace(/\b(highway)\b/gi, 'hwy')
    .replace(/\b(parkway)\b/gi, 'pkwy')
    .replace(/\b(way)\b/gi, 'wy')
    .replace(/\b(trail)\b/gi, 'trl')
    .replace(/\b(square)\b/gi, 'sq')
    .replace(/\b(crossing)\b/gi, 'xing')
    // Remove common unit/apartment keywords (leading \b ensures word start,
    // no trailing \b so "Apt123" matches even without space before number)
    .replace(/\b(apt|apartment|suite|ste|unit|room|rm|floor|fl|bldg|building|dept|department|no|number|lot|po box|p\.?o\.?\s*box)\.?\s*/gi, '')
    // Remove # symbol (often used for unit numbers)
    .replace(/#/g, '')
    // Remove ALL non-alphanumeric characters (spaces, punctuation, hyphens, dots)
    .replace(/[^a-z0-9]/g, '');
}

// Levenshtein distance between two strings
function levenshteinDistance(a, b) {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = [];

  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b[i - 1] === a[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

// Verify Cloudflare Turnstile CAPTCHA token
async function verifyTurnstile(token, ip) {
  if (!TURNSTILE_SECRET_KEY) {
    console.warn('TURNSTILE_SECRET_KEY not set — skipping CAPTCHA verification');
    return true;
  }
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: ip
      })
    });
    const data = await response.json();
    return data.success === true;
  } catch (err) {
    console.error('Turnstile verification error:', err);
    return false;
  }
}

// Check if two addresses are similar enough to be considered duplicates
function isSimilarAddress(newAddr, existingAddr, threshold = 0.85) {
  const normNew = normalizeAddress(newAddr);
  const normExisting = normalizeAddress(existingAddr);

  // Exact match after normalization
  if (normNew === normExisting) return true;

  // Skip similarity check if either normalized address is very short
  if (normNew.length < 5 || normExisting.length < 5) return false;

  // Levenshtein similarity check
  const maxLen = Math.max(normNew.length, normExisting.length);
  const distance = levenshteinDistance(normNew, normExisting);
  const similarity = 1 - (distance / maxLen);

  return similarity >= threshold;
}

// ============================================================
// FORM SUBMISSION ENDPOINT
// ============================================================

app.post('/submit/:slug', async (req, res) => {
  try {
    const { slug } = req.params;

    // Find form
    const form = db.prepare('SELECT * FROM forms WHERE slug = ?').get(slug);
    if (!form) {
      return res.status(404).render('error', {
        title: 'Form Not Found',
        message: 'The form you submitted to does not exist.'
      });
    }

    // Honeypot check — reject if _gotcha is filled
    if (req.body._gotcha && req.body._gotcha.trim() !== '') {
      // Silently redirect as if successful (don't tip off bots)
      return res.redirect(form.success_redirect);
    }

    // Cloudflare Turnstile CAPTCHA verification
    const turnstileToken = req.body['cf-turnstile-response'] || '';
    const clientIP = getClientIP(req);
    const captchaValid = await verifyTurnstile(turnstileToken, clientIP);
    if (!captchaValid) {
      return res.status(403).render('error', {
        title: 'CAPTCHA Failed',
        message: 'Please complete the CAPTCHA challenge and try again.'
      });
    }

    // Extract only defined fields (strip unknown fields)
    const allowedFields = JSON.parse(form.fields);
    const submissionData = {};
    for (const field of allowedFields) {
      submissionData[field] = req.body[field] || '';
    }

    // Blacklist check: silently reject blacklisted addresses (spammer thinks it worked)
    const submittedAddress = (submissionData.address1 || '').trim();
    if (submittedAddress !== '') {
      const region = getFormRegion(slug);
      if (region) {
        const normalizedSubmitted = normalizeAddress(submittedAddress);
        const blacklisted = db.prepare(`
          SELECT id, address_normalized FROM blacklisted_addresses WHERE region = ?
        `).all(region);

        const blacklistMatch = blacklisted.find(entry => {
          if (normalizedSubmitted === entry.address_normalized) return true;
          // Also check fuzzy similarity
          if (normalizedSubmitted.length >= 5 && entry.address_normalized.length >= 5) {
            const maxLen = Math.max(normalizedSubmitted.length, entry.address_normalized.length);
            const distance = levenshteinDistance(normalizedSubmitted, entry.address_normalized);
            const similarity = 1 - (distance / maxLen);
            return similarity >= 0.85;
          }
          return false;
        });

        if (blacklistMatch) {
          // Increment blocked counter
          db.prepare('UPDATE blacklisted_addresses SET blocked_count = blocked_count + 1 WHERE id = ?')
            .run(blacklistMatch.id);
          // Silently redirect — spammer thinks submission succeeded
          return res.redirect(form.success_redirect);
        }
      }
    }

    // Fuzzy duplicate address check (for forms with an address1 field)
    // Catches spammers who vary addresses slightly (e.g. "Apt" vs "#", inserted spaces)
    if (submittedAddress !== '') {
      const existingSubmissions = db.prepare(`
        SELECT json_extract(data, '$.address1') as address1
        FROM submissions
        WHERE form_id = ?
      `).all(form.id);

      const isDuplicate = existingSubmissions.some(row => {
        const existingAddr = (row.address1 || '').trim();
        if (existingAddr === '') return false;
        return isSimilarAddress(submittedAddress, existingAddr);
      });

      if (isDuplicate) {
        return res.status(409).render('error', {
          title: 'Address Already Submitted',
          message: "Your address is already in the next batch. You'll receive your stickers in the next few weeks."
        });
      }
    }

    // Rate limiting: 1 submission per form per IP per 7 days
    const recentSubmission = db.prepare(`
      SELECT id FROM submissions
      WHERE form_id = ? AND ip_address = ?
      AND submitted_at > datetime('now', '-7 days')
    `).get(form.id, clientIP);

    if (recentSubmission) {
      return res.status(429).render('error', {
        title: 'Already Submitted',
        message: 'You have already submitted this form in the last 7 days. Please try again later.'
      });
    }

    // Store submission
    db.prepare(`
      INSERT INTO submissions (form_id, data, ip_address)
      VALUES (?, ?, ?)
    `).run(form.id, JSON.stringify(submissionData), clientIP);

    // Increment all-time submission counter and update last submission timestamp
    db.prepare(`
      UPDATE forms
      SET total_submissions = total_submissions + 1,
          last_submission_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).run(form.id);

    // Redirect to success page
    res.redirect(form.success_redirect);

  } catch (err) {
    console.error('Submission error:', err);
    res.status(500).render('error', {
      title: 'Error',
      message: 'Something went wrong. Please try again.'
    });
  }
});

// ============================================================
// ADMIN: LOGIN
// ============================================================

app.get('/admin/login', (req, res) => {
  if (req.session.user) {
    return res.redirect('/admin');
  }
  res.render('login', { error: null });
});

app.post('/admin/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
    if (!user) {
      return res.render('login', { error: 'Invalid username or password.' });
    }

    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) {
      return res.render('login', { error: 'Invalid username or password.' });
    }

    req.session.user = {
      id: user.id,
      username: user.username,
      is_admin: !!user.is_admin
    };

    res.redirect('/admin');

  } catch (err) {
    console.error('Login error:', err);
    res.render('login', { error: 'Something went wrong. Please try again.' });
  }
});

app.get('/admin/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/admin/login');
  });
});

// ============================================================
// ADMIN: DASHBOARD
// ============================================================

app.get('/admin', requireAuth, (req, res) => {
  const forms = getUserForms(req.session.user.id, req.session.user.is_admin);

  // Get submission counts and latest submission date for each form
  const formsWithStats = forms.map(form => {
    const stats = db.prepare(`
      SELECT
        COUNT(*) as count,
        MAX(submitted_at) as latest
      FROM submissions
      WHERE form_id = ?
    `).get(form.id);

    return {
      ...form,
      submission_count: stats.count,
      latest_submission: stats.latest
    };
  });

  res.render('dashboard', { forms: formsWithStats });
});

// ============================================================
// ADMIN: VIEW FORM SUBMISSIONS
// ============================================================

app.get('/admin/forms/:slug', requireAuth, (req, res) => {
  const form = db.prepare('SELECT * FROM forms WHERE slug = ?').get(req.params.slug);
  if (!form) {
    return res.status(404).render('error', {
      title: 'Form Not Found',
      message: 'This form does not exist.'
    });
  }

  if (!userHasFormAccess(req.session.user.id, req.session.user.is_admin, form.id)) {
    return res.status(403).render('error', {
      title: 'Access Denied',
      message: 'You do not have access to this form.'
    });
  }

  const submissions = db.prepare(`
    SELECT * FROM submissions
    WHERE form_id = ?
    ORDER BY submitted_at DESC
  `).all(form.id);

  const fields = JSON.parse(form.fields);
  const parsedSubmissions = submissions.map(s => ({
    id: s.id,
    data: JSON.parse(s.data),
    submitted_at: s.submitted_at
  }));

  // Blacklist data for this form's region
  const region = getFormRegion(form.slug);
  const canBlacklist = userCanBlacklist(req.session.user.id);
  let blacklistedAddresses = [];
  if (region) {
    blacklistedAddresses = db.prepare(`
      SELECT ba.*, u.username as created_by_username
      FROM blacklisted_addresses ba
      LEFT JOIN users u ON ba.created_by = u.id
      WHERE ba.region = ?
      ORDER BY ba.created_at DESC
    `).all(region);
  }

  res.render('form-detail', {
    form,
    fields,
    submissions: parsedSubmissions,
    region,
    canBlacklist,
    blacklistedAddresses
  });
});

// ============================================================
// ADMIN: CSV EXPORT
// ============================================================

app.get('/admin/forms/:slug/csv', requireAuth, (req, res) => {
  const form = db.prepare('SELECT * FROM forms WHERE slug = ?').get(req.params.slug);
  if (!form) return res.status(404).send('Form not found');

  if (!userHasFormAccess(req.session.user.id, req.session.user.is_admin, form.id)) {
    return res.status(403).send('Access denied');
  }

  const submissions = db.prepare(`
    SELECT * FROM submissions
    WHERE form_id = ?
    ORDER BY submitted_at DESC
  `).all(form.id);

  const fields = JSON.parse(form.fields);

  // Build CSV
  const headerRow = [...fields, 'submitted_at'].map(escapeCSV).join(',');
  const dataRows = submissions.map(s => {
    const data = JSON.parse(s.data);
    const values = fields.map(f => escapeCSV(data[f] || ''));
    values.push(escapeCSV(s.submitted_at));
    return values.join(',');
  });

  const csv = [headerRow, ...dataRows].join('\r\n');
  const filename = `${form.slug}-${new Date().toISOString().split('T')[0]}.csv`;

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
  res.send(csv);
});

// ============================================================
// ADMIN: DELETE SUBMISSIONS
// ============================================================

app.post('/admin/forms/:slug/delete', requireAuth, (req, res) => {
  const form = db.prepare('SELECT * FROM forms WHERE slug = ?').get(req.params.slug);
  if (!form) return res.status(404).send('Form not found');

  if (!userHasFormAccess(req.session.user.id, req.session.user.is_admin, form.id)) {
    return res.status(403).send('Access denied');
  }

  const ids = req.body.ids;
  if (!ids) return res.redirect(`/admin/forms/${form.slug}`);

  // ids can be a single string or array
  const idArray = Array.isArray(ids) ? ids : [ids];
  const placeholders = idArray.map(() => '?').join(',');

  db.prepare(`
    DELETE FROM submissions
    WHERE id IN (${placeholders}) AND form_id = ?
  `).run(...idArray.map(Number), form.id);

  res.redirect(`/admin/forms/${form.slug}`);
});

app.post('/admin/forms/:slug/delete-all', requireAuth, (req, res) => {
  const form = db.prepare('SELECT * FROM forms WHERE slug = ?').get(req.params.slug);
  if (!form) return res.status(404).send('Form not found');

  if (!userHasFormAccess(req.session.user.id, req.session.user.is_admin, form.id)) {
    return res.status(403).send('Access denied');
  }

  db.prepare('DELETE FROM submissions WHERE form_id = ?').run(form.id);

  res.redirect(`/admin/forms/${form.slug}`);
});

// ============================================================
// ADMIN: BLACKLIST MANAGEMENT
// ============================================================

// Blacklist address(es) from selected submissions
app.post('/admin/forms/:slug/blacklist', requireAuth, (req, res) => {
  const form = db.prepare('SELECT * FROM forms WHERE slug = ?').get(req.params.slug);
  if (!form) return res.status(404).send('Form not found');

  if (!userHasFormAccess(req.session.user.id, req.session.user.is_admin, form.id)) {
    return res.status(403).send('Access denied');
  }

  if (!userCanBlacklist(req.session.user.id)) {
    return res.status(403).send('You do not have blacklist permission');
  }

  const region = getFormRegion(form.slug);
  if (!region) return res.redirect(`/admin/forms/${form.slug}`);

  const ids = req.body.ids;
  if (!ids) return res.redirect(`/admin/forms/${form.slug}`);

  const idArray = Array.isArray(ids) ? ids : [ids];
  const placeholders = idArray.map(() => '?').join(',');

  // Get address1 from selected submissions
  const submissions = db.prepare(`
    SELECT data FROM submissions
    WHERE id IN (${placeholders}) AND form_id = ?
  `).all(...idArray.map(Number), form.id);

  const insertBlacklist = db.prepare(`
    INSERT INTO blacklisted_addresses (region, address_original, address_normalized, created_by)
    VALUES (?, ?, ?, ?)
  `);

  let added = 0;
  for (const sub of submissions) {
    const data = JSON.parse(sub.data);
    const address = (data.address1 || '').trim();
    if (address === '') continue;

    const normalized = normalizeAddress(address);

    // Check if already blacklisted (exact normalized match)
    const existing = db.prepare(
      'SELECT id FROM blacklisted_addresses WHERE region = ? AND address_normalized = ?'
    ).get(region, normalized);

    if (!existing) {
      insertBlacklist.run(region, address, normalized, req.session.user.id);
      added++;
    }
  }

  res.redirect(`/admin/forms/${form.slug}`);
});

// Manually add address to blacklist
app.post('/admin/forms/:slug/blacklist/add', requireAuth, (req, res) => {
  const form = db.prepare('SELECT * FROM forms WHERE slug = ?').get(req.params.slug);
  if (!form) return res.status(404).send('Form not found');

  if (!userHasFormAccess(req.session.user.id, req.session.user.is_admin, form.id)) {
    return res.status(403).send('Access denied');
  }

  if (!userCanBlacklist(req.session.user.id)) {
    return res.status(403).send('You do not have blacklist permission');
  }

  const region = getFormRegion(form.slug);
  if (!region) return res.redirect(`/admin/forms/${form.slug}`);

  const address = (req.body.address || '').trim();
  if (address === '') return res.redirect(`/admin/forms/${form.slug}`);

  const normalized = normalizeAddress(address);

  // Check if already blacklisted
  const existing = db.prepare(
    'SELECT id FROM blacklisted_addresses WHERE region = ? AND address_normalized = ?'
  ).get(region, normalized);

  if (!existing) {
    db.prepare(`
      INSERT INTO blacklisted_addresses (region, address_original, address_normalized, created_by)
      VALUES (?, ?, ?, ?)
    `).run(region, address, normalized, req.session.user.id);
  }

  res.redirect(`/admin/forms/${form.slug}`);
});

// Remove address from blacklist
app.post('/admin/forms/:slug/blacklist/:id/remove', requireAuth, (req, res) => {
  const form = db.prepare('SELECT * FROM forms WHERE slug = ?').get(req.params.slug);
  if (!form) return res.status(404).send('Form not found');

  if (!userHasFormAccess(req.session.user.id, req.session.user.is_admin, form.id)) {
    return res.status(403).send('Access denied');
  }

  if (!userCanBlacklist(req.session.user.id)) {
    return res.status(403).send('You do not have blacklist permission');
  }

  const blacklistId = Number(req.params.id);
  const region = getFormRegion(form.slug);

  // Only delete if it belongs to this region (safety check)
  db.prepare('DELETE FROM blacklisted_addresses WHERE id = ? AND region = ?')
    .run(blacklistId, region);

  res.redirect(`/admin/forms/${form.slug}`);
});

// ============================================================
// ADMIN: USER MANAGEMENT (admin only)
// ============================================================

app.get('/admin/users', requireAuth, requireAdmin, (req, res) => {
  const users = db.prepare('SELECT id, username, is_admin, can_blacklist, created_at FROM users ORDER BY username').all();
  const allForms = db.prepare('SELECT * FROM forms ORDER BY name').all();

  // Get form access for each user
  const usersWithAccess = users.map(user => {
    const accessRows = db.prepare('SELECT form_id FROM user_forms WHERE user_id = ?').all(user.id);
    return {
      ...user,
      form_ids: accessRows.map(r => r.form_id)
    };
  });

  res.render('users', { users: usersWithAccess, forms: allForms });
});

app.post('/admin/users/create', requireAuth, requireAdmin, async (req, res) => {
  try {
    const { username, password, is_admin, can_blacklist } = req.body;
    const formIds = req.body.form_ids || [];

    if (!username || !password) {
      return res.redirect('/admin/users?error=Username and password are required');
    }

    // Check if username already exists
    const existing = db.prepare('SELECT id FROM users WHERE username = ?').get(username);
    if (existing) {
      return res.redirect('/admin/users?error=Username already exists');
    }

    const hash = await bcrypt.hash(password, 12);
    const result = db.prepare(`
      INSERT INTO users (username, password_hash, is_admin, can_blacklist)
      VALUES (?, ?, ?, ?)
    `).run(username, hash, is_admin ? 1 : 0, can_blacklist ? 1 : 0);

    // Assign form access
    const insertAccess = db.prepare('INSERT INTO user_forms (user_id, form_id) VALUES (?, ?)');
    const formIdArray = Array.isArray(formIds) ? formIds : [formIds];
    for (const formId of formIdArray) {
      if (formId) insertAccess.run(result.lastInsertRowid, Number(formId));
    }

    res.redirect('/admin/users');

  } catch (err) {
    console.error('Create user error:', err);
    res.redirect('/admin/users?error=Failed to create user');
  }
});

app.post('/admin/users/:id/update', requireAuth, requireAdmin, async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const { username, password, is_admin, can_blacklist } = req.body;
    const formIds = req.body.form_ids || [];

    if (!username) {
      return res.redirect('/admin/users?error=Username is required');
    }

    // Update user info
    if (password && password.trim() !== '') {
      const hash = await bcrypt.hash(password, 12);
      db.prepare('UPDATE users SET username = ?, password_hash = ?, is_admin = ?, can_blacklist = ? WHERE id = ?')
        .run(username, hash, is_admin ? 1 : 0, can_blacklist ? 1 : 0, userId);
    } else {
      db.prepare('UPDATE users SET username = ?, is_admin = ?, can_blacklist = ? WHERE id = ?')
        .run(username, is_admin ? 1 : 0, can_blacklist ? 1 : 0, userId);
    }

    // Update form access
    db.prepare('DELETE FROM user_forms WHERE user_id = ?').run(userId);
    const insertAccess = db.prepare('INSERT INTO user_forms (user_id, form_id) VALUES (?, ?)');
    const formIdArray = Array.isArray(formIds) ? formIds : [formIds];
    for (const formId of formIdArray) {
      if (formId) insertAccess.run(userId, Number(formId));
    }

    res.redirect('/admin/users');

  } catch (err) {
    console.error('Update user error:', err);
    res.redirect('/admin/users?error=Failed to update user');
  }
});

app.post('/admin/users/:id/delete', requireAuth, requireAdmin, (req, res) => {
  const userId = Number(req.params.id);

  // Don't allow deleting yourself
  if (userId === req.session.user.id) {
    return res.redirect('/admin/users?error=You cannot delete your own account');
  }

  db.prepare('DELETE FROM users WHERE id = ?').run(userId);

  res.redirect('/admin/users');
});

// ============================================================
// ADMIN: FORM MANAGEMENT (admin only)
// ============================================================

app.post('/admin/forms/create', requireAuth, requireAdmin, (req, res) => {
  try {
    const { slug, name, fields, success_redirect } = req.body;

    if (!slug || !name || !fields || !success_redirect) {
      return res.redirect('/admin?error=All fields are required');
    }

    // Parse fields (comma-separated input)
    const fieldArray = fields.split(',').map(f => f.trim()).filter(f => f);

    db.prepare(`
      INSERT INTO forms (slug, name, fields, success_redirect)
      VALUES (?, ?, ?, ?)
    `).run(slug, name, JSON.stringify(fieldArray), success_redirect);

    // Give all admin users access to the new form
    const newForm = db.prepare('SELECT id FROM forms WHERE slug = ?').get(slug);
    const adminUsers = db.prepare('SELECT id FROM users WHERE is_admin = 1').all();
    const insertAccess = db.prepare('INSERT OR IGNORE INTO user_forms (user_id, form_id) VALUES (?, ?)');
    for (const admin of adminUsers) {
      insertAccess.run(admin.id, newForm.id);
    }

    res.redirect('/admin');

  } catch (err) {
    console.error('Create form error:', err);
    res.redirect('/admin?error=Failed to create form. Slug may already exist.');
  }
});

// ============================================================
// ADMIN: CHANGE OWN PASSWORD
// ============================================================

app.post('/admin/change-password', requireAuth, async (req, res) => {
  try {
    const { current_password, new_password } = req.body;

    const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.session.user.id);
    const match = await bcrypt.compare(current_password, user.password_hash);

    if (!match) {
      return res.redirect('/admin?error=Current password is incorrect');
    }

    const hash = await bcrypt.hash(new_password, 12);
    db.prepare('UPDATE users SET password_hash = ? WHERE id = ?').run(hash, user.id);

    res.redirect('/admin?success=Password updated successfully');

  } catch (err) {
    console.error('Password change error:', err);
    res.redirect('/admin?error=Failed to change password');
  }
});

// ============================================================
// HEALTH CHECK
// ============================================================

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ============================================================
// START SERVER
// ============================================================

app.listen(PORT, () => {
  console.log(`\n🚀 bitcoin.rocks forms backend running on port ${PORT}`);
  console.log(`   Admin panel: http://localhost:${PORT}/admin`);
  console.log(`   Health check: http://localhost:${PORT}/health\n`);
});
