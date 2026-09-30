const express = require("express");
const router = express.Router();

// Starter route.
// The task CRUD API is intentionally incomplete.
// Inspect the project and implement the required endpoints.

router.get("/", (req, res) => {
  res.json([]);
});

module.exports = router;
