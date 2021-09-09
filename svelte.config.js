const sveltePreprocess = require("svelte-preprocess");
const postcss = require("./postcss.config");

const createPreprocessors = ({ sourceMap }) => [
  sveltePreprocess({
    defaults: {
      script: "typescript",
      style: "postcss",
    },
    sourceMap,
    postcss,
    preserve: ["ld+json"],
  }),
];

module.exports = {
  createPreprocessors,
  // Options for `svelte-check` and the VS Code extension
  preprocess: createPreprocessors({ sourceMap: true }),
};
