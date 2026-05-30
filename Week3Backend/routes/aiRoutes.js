const express = require("express");

const router = express.Router();

router.post("/suggest", (req, res) => {

  const { text } = req.body;

  let suggestion = "";

  if (text.toLowerCase().includes("study")) {

    suggestion = "Study for 2 hours";

  }

  else if (text.toLowerCase().includes("gym")) {

    suggestion = "Workout for 1 hour";

  }

  else if (text.toLowerCase().includes("project")) {

    suggestion = "Complete project module";

  }

  else {

    suggestion = "No suggestion available";

  }

  res.json({
    suggestion,
  });

});

module.exports = router;