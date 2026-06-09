const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query("SELECT * FROM Property", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

router.post("/", (req, res) => {
  const { title, location, price } = req.body;

  db.query(
    "INSERT INTO Property(title, location, price) VALUES(?,?,?)",
    [title, location, price],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Property Added" });
    }
  );
});

module.exports = router;