const express = require("express");
//Server
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`Server is running on PORT ${PORT}`));