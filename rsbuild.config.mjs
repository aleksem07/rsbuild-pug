import { defineConfig } from '@rsbuild/core';
import { pluginPug } from '@rsbuild/plugin-pug';

export default defineConfig({
  html: {
    title: 'title',
    meta: {
      description: 'description',
    },
    favicon: './src/favicon.ico',
    template: './src/index.pug',
    templateParameters: {
      titleProject: "titleProject!"
    }
  },
  plugins: [pluginPug({
    pugOptions: {
      basedir: './src/pug',
    }
  })],
});
