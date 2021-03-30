const router = require("express").Router();

router.get("/", (req, res) => { // done for you
    return res.json({"message": "all good"})
  });

  module.exports = router;