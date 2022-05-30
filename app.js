const yaml = require("js-yaml");
const fs = require("fs");

async function parse(action) {
  const { filePath } = action.params;

  const doc = yaml.load(fs.readFileSync(filePath, "utf8"));

  return doc;
}

module.exports = {
  parse,
};
