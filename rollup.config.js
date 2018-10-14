export default {
  input: "src/index.js",
  external: ["fs", "path"],
  output: [
    { file: "dist/rollup-plugin-manifest.js", format: "cjs" },
    { file: "dist/rollup-plugin-manifest.es.js", format: "es" }
  ]
};
