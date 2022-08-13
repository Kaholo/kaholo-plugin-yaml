const fs = require("fs");

async function parse(action) {
  const { filePath } = action.params;

  const doc = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return doc;
}

module.exports = {
  parse,
};
