/**
 * Seed script for bitcoin.rocks forms backend
 * 
 * Seeds the database with:
 * - All 9 form definitions (matching current getform.io endpoints)
 * - Initial admin user from environment variables
 * 
 * Safe to run multiple times — uses INSERT OR IGNORE for forms,
 * and only creates admin user if no users exist.
 * 
 * Usage: node seed.js
 * Or automatically called on first server start.
 */

const db = require('./database');
const bcrypt = require('bcrypt');

const SITE_URL = process.env.SITE_URL || 'https://bitcoin.rocks';

// All 9 active form definitions
const forms = [
  {
    slug: 'stickers-text-usa',
    name: 'Stickers Text Pack — USA',
    fields: JSON.stringify(['name', 'address1', 'address2', 'city', 'state', 'zip']),
    success_redirect: `${SITE_URL}/sticker-success`
  },
  {
    slug: 'stickers-text-canada',
    name: 'Stickers Text Pack — Canada',
    fields: JSON.stringify(['name', 'address1', 'address2', 'city', 'province', 'postal']),
    success_redirect: `${SITE_URL}/sticker-success`
  },
  {
    slug: 'stickers-signs-usa',
    name: 'Stickers Signs Pack — USA',
    fields: JSON.stringify(['name', 'address1', 'address2', 'city', 'state', 'zip']),
    success_redirect: `${SITE_URL}/sticker-success`
  },
  {
    slug: 'stickers-signs-canada',
    name: 'Stickers Signs Pack — Canada',
    fields: JSON.stringify(['name', 'address1', 'address2', 'city', 'province', 'postal']),
    success_redirect: `${SITE_URL}/sticker-success`
  },
  {
    slug: 'sticker-language-request',
    name: 'Sticker Language Request',
    fields: JSON.stringify(['language', 'stickers', 'email']),
    success_redirect: `${SITE_URL}/sticker-language-success`
  },
  {
    slug: 'business-stickers-usa',
    name: 'Business Stickers — USA',
    fields: JSON.stringify(['name', 'address1', 'address2', 'city', 'state', 'zip']),
    success_redirect: `${SITE_URL}/business/sticker-success`
  },
  {
    slug: 'business-stickers-canada',
    name: 'Business Stickers — Canada',
    fields: JSON.stringify(['name', 'address1', 'address2', 'city', 'province', 'postal']),
    success_redirect: `${SITE_URL}/business/sticker-success`
  },
  {
    slug: 'business-sticker-language-request',
    name: 'Business Sticker Language Request',
    fields: JSON.stringify(['language', 'translation1', 'translation2']),
    success_redirect: `${SITE_URL}/business/sticker-language-success`
  },
  {
    slug: 'business-maps',
    name: 'Business Maps Listing',
    fields: JSON.stringify(['name', 'address1', 'address2', 'address3', 'category', 'wallet', 'website', 'phone', 'hours', 'notes']),
    success_redirect: `${SITE_URL}/business/maps-success`
  }
];

async function seed() {
  console.log('🌱 Seeding database...\n');

  // Seed forms
  const insertForm = db.prepare(`
    INSERT OR IGNORE INTO forms (slug, name, fields, success_redirect)
    VALUES (@slug, @name, @fields, @success_redirect)
  `);

  const insertMany = db.transaction((formList) => {
    for (const form of formList) {
      const result = insertForm.run(form);
      if (result.changes > 0) {
        console.log(`  ✅ Created form: ${form.name}`);
      } else {
        console.log(`  ⏭️  Form already exists: ${form.name}`);
      }
    }
  });

  insertMany(forms);

  // Seed admin user (only if no users exist)
  const userCount = db.prepare('SELECT COUNT(*) as count FROM users').get();
  
  if (userCount.count === 0) {
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminUsername || !adminPassword) {
      console.log('\n  ⚠️  No users exist and ADMIN_USERNAME/ADMIN_PASSWORD not set.');
      console.log('     Set these environment variables and run seed again to create the admin user.');
    } else {
      const hash = await bcrypt.hash(adminPassword, 12);
      db.prepare(`
        INSERT INTO users (username, password_hash, is_admin)
        VALUES (?, ?, 1)
      `).run(adminUsername, hash);

      // Give admin access to all forms
      const allForms = db.prepare('SELECT id FROM forms').all();
      const insertAccess = db.prepare('INSERT OR IGNORE INTO user_forms (user_id, form_id) VALUES (?, ?)');
      const adminUser = db.prepare('SELECT id FROM users WHERE username = ?').get(adminUsername);
      
      for (const form of allForms) {
        insertAccess.run(adminUser.id, form.id);
      }

      console.log(`\n  ✅ Created admin user: ${adminUsername} (with access to all forms)`);
    }
  } else {
    console.log(`\n  ⏭️  Users already exist (${userCount.count} users). Skipping admin creation.`);
  }

  console.log('\n🌱 Seed complete!\n');
}

seed().catch(err => {
  console.error('Seed failed:', err);
  process.exit(1);
});
