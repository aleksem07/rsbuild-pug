import { defineConfig } from '@rsbuild/core';

export default defineConfig({
  html: {
    title: 'title',
    meta: {
      description: 'description',
    },
    favicon: './src/favicon.ico',
    template: './src/index.html',
  },
});
