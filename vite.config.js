import vituum from "vituum";
import pug from "@vituum/vite-plugin-pug";

export default {
  publicDir: "public",
  root: "./",
  build: {
    outDir: "dist",
    cssCodeSplit: false,
  },
  plugins: [
    vituum(),
    pug({
      root: "./src",
    }),
  ],
};
