import fs from "fs";
import path from "path";

export default () => {
  let files = {};

  return {
    name: "manifest",
    onwrite(bundle, { fileName }) {
      const name = fileName.replace(/(?=\.).*/, "");

      files = { ...files, [name]: fileName };

      fs.writeFileSync(
        path.resolve(__dirname, bundle.dir, "manifest.json"),
        JSON.stringify(files),
        "utf8"
      );
    }
  };
};
