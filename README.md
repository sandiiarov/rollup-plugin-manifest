# rollup-plugin-manifest

Rollup plugin to generate a JSON manifest mapping input filename and chunk filenames to hashed output filename.

Example manifest:

```json
{
  "main": "main.56770a64be1a113250.js",
  "1": "1.07d2bf0d12da4889.js"
}
```

## Usage

```js
import manifest from "./rollup-plugin-manifest";

export default {
  input: "src/index.js",
  plugins: [manifest()]
};
```

## TODO

- publish package
- write tests
