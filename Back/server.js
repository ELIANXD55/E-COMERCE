const { app } = require("./app");
const { conect } = require("./databases/database");
const dotenv = require("dotenv");

dotenv.config({ path: `${__dirname}/.env` });

conect();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
