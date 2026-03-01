const Database = require('better-sqlite3');
const path = require('path');

// Use persistent volume path if available (Railway), otherwise local
const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'data', 'forms.db');

// Ensure data directory exists
const fs = require('fs');
const dbDir = path.dirname(DB_PATH);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const db = new Database(DB_PATH);

// Enable WAL mode for better concurrent read performance
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS forms (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    fields TEXT NOT NULL,
    success_redirect TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    form_id INTEGER NOT NULL,
    data TEXT NOT NULL,
    ip_address TEXT,
    submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (form_id) REFERENCES forms(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    is_admin INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS user_forms (
    user_id INTEGER NOT NULL,
    form_id INTEGER NOT NULL,
    PRIMARY KEY (user_id, form_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (form_id) REFERENCES forms(id) ON DELETE CASCADE
  );

  CREATE INDEX IF NOT EXISTS idx_submissions_form_id ON submissions(form_id);
  CREATE INDEX IF NOT EXISTS idx_submissions_ip_form ON submissions(ip_address, form_id, submitted_at);
  CREATE INDEX IF NOT EXISTS idx_user_forms_user ON user_forms(user_id);
`);

// Migration: Add total_submissions and last_submission_at to forms table
// Safe to run multiple times — ALTER TABLE throws if column already exists
try {
  db.exec(`ALTER TABLE forms ADD COLUMN total_submissions INTEGER DEFAULT 0`);
  console.log('Migration: Added total_submissions column to forms table');
} catch (e) {
  // Column already exists, ignore
}

try {
  db.exec(`ALTER TABLE forms ADD COLUMN last_submission_at DATETIME`);
  console.log('Migration: Added last_submission_at column to forms table');
} catch (e) {
  // Column already exists, ignore
}

module.exports = db;
