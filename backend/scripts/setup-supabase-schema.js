const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const { Client } = require('pg');

dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

function getConnectionString() {
  return (
    process.env.SUPABASE_CONNECTION_STRING ||
    process.env.connection_string ||
    process.env.DATABASE_URL ||
    null
  );
}

async function main() {
  const connectionString = getConnectionString();

  if (!connectionString) {
    throw new Error('Missing SUPABASE_CONNECTION_STRING (or connection_string / DATABASE_URL) in env.');
  }

  if (connectionString.includes('[YOUR-PASSWORD]')) {
    throw new Error('Connection string still contains [YOUR-PASSWORD]. Replace it with the real database password from Supabase.');
  }

  const schemaPath = path.resolve(__dirname, '../supabase/schema.sql');
  const schemaSql = fs.readFileSync(schemaPath, 'utf-8');

  const client = new Client({ connectionString, ssl: { rejectUnauthorized: false } });
  await client.connect();

  try {
    await client.query(schemaSql);
    console.log('Supabase schema applied successfully.');
  } finally {
    await client.end();
  }
}

main().catch((error) => {
  console.error('Failed to apply Supabase schema:', error.message);
  process.exitCode = 1;
});
