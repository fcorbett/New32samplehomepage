<?php

/**
 * Copy this file to config.php on the DreamHost server and fill in real values.
 * config.php is gitignored — never commit secrets.
 *
 * FROM must be the agency Google Workspace address that completed the OAuth flow.
 * TO is the new32 office inbox that should receive form submissions.
 */

return [
    // Agency Workspace address authorized via OAuth (also used as SMTP From)
    'FROM' => 'you@your-agency.com',
    'FROM_NAME' => 'New32 Website',

    // Where submissions are delivered
    'TO' => 'office@new32dental.com',

    // Google Cloud OAuth client (Desktop app type recommended)
    'GMAIL_CLIENT_ID' => 'xxxxxxxx.apps.googleusercontent.com',
    'GMAIL_CLIENT_SECRET' => 'xxxxxxxx',
    'GMAIL_REFRESH_TOKEN' => 'xxxxxxxx',

    // Optional: comma-separated Allowed Origins for CORS (leave empty to omit CORS headers)
    // Example: 'https://new32dental.com,https://www.new32dental.com'
    'ALLOWED_ORIGINS' => '',

    // Rate limit: max submissions per IP per window
    'RATE_LIMIT_MAX' => 5,
    'RATE_LIMIT_WINDOW_SECONDS' => 3600,
];
