const config = require("includes/config.js");
const sapSource = config.foundation.erp;

["vbrk", "vbrp", "prcd_elements", "tcurx"].forEach((tableName) => {
  declare({
    database: sapSource.targetProjectId,
    schema: sapSource.targetDatasetId,
    name: tableName,
  });
});
