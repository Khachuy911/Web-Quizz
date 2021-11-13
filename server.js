const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3000;

const connect = require("./Config/database");
connect();

app.listen(PORT, console.log(`Server is running with port ${PORT}`));
