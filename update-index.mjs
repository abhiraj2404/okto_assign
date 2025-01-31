import algosearch from 'algoliasearch';
import { sync } from 'fumadocs-core/search/algolia';
import * as fs from 'node:fs';

const content = fs.readFileSync('.next/server/app/static.json.body');

/** @type {import('fumadocs-core/search/algolia').DocumentRecord[]} **/
const indexes = JSON.parse(content.toString());

const client = algosearch('41DM5WWKWL', 'eb5297c4b1d627aecf02253c56972e2e');

sync(client, {
    documents: indexes, // search indexes, can be provided by your content source too
});