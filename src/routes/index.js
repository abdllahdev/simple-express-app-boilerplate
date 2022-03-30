const express = require("express");
const exampleRoutes = require("./example.routes");

const router = express.Router();

router.use("/example", exampleRoutes);

module.exports = router;
