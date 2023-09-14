import { defineConfig } from 'astro/config';
import { exampleRemarkPlugin } from './example-remark-plugin.mjs';
import mdx from '@astrojs/mdx'

export default defineConfig({
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [exampleRemarkPlugin]
  },
});
