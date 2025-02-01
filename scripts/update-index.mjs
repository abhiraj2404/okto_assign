import algosearch from 'algoliasearch';
import { sync } from 'fumadocs-core/search/algolia';
import * as fs from 'node:fs';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

// Check if environment variables exist
const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const ALGOLIA_ADMIN_KEY = process.env.ALGOLIA_ADMIN_KEY;

if (!ALGOLIA_APP_ID || !ALGOLIA_ADMIN_KEY) {
  throw new Error(
    'Missing Algolia environment variables. Please check your .env.local file.'
  );
}

const content = fs.readFileSync('.next/server/app/static.json.body');

/** @type {import('fumadocs-core/search/algolia').DocumentRecord[]} */
const indexes = JSON.parse(content.toString());

// Now TypeScript knows these values are definitely strings
const client = algosearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY);

sync(client, {
  documents: indexes,
});