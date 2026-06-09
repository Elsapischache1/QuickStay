const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { user_id, property_id } = req.body;

  db.query(
    "INSERT INTO Booking(user_id, property_id) VALUES(?,?)",
    [user_id, property_id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Booking Successful" });
    }
  );
});

module.exports = router;