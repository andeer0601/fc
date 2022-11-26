const app = require("./app/app");
const PORT =  3000;

require("./config/database");
require("dotenv").config();

app.listen(PORT, console.log(`Server started on port ${PORT}`));