const express = require("express");
const docsRoute = require("./docs.route");
const moviesRoute = require("./movies.route");

const router = express.Router();

router.use("/docs", docsRoute);
router.use("/movies", moviesRoute);

module.exports = router;
