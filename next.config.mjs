import { createMDX } from 'fumadocs-mdx/next';
import { remarkDocGen, remarkInstall } from 'fumadocs-docgen';
const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: [ "static.wixstatic.com" ],
  }
};

export default withMDX(config);
