const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

/* SIGNUP */

app.post("/signup", (req, res) => {

    const { name, email, password } = req.body;

    const sql =
        "INSERT INTO Users(name,email,password) VALUES(?,?,?)";

    db.query(sql, [name, email, password], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            success: true,
            message: "User Registered"
        });
    });
});

/* LOGIN */

app.post("/login", (req, res) => {

    const { email, password } = req.body;

    const sql =
        "SELECT * FROM Users WHERE email=? AND password=?";

    db.query(sql, [email, password], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.length > 0) {

            res.json({
                success: true,
                user: result[0]
            });

        } else {

            res.json({
                success: false,
                message: "Invalid Login"
            });
        }
    });
});

/* BOOKING */

app.post("/booking", (req, res) => {

    const { user_id, property_id } = req.body;

    const sql =
        `INSERT INTO Booking
        (user_id,property_id,booking_date)
        VALUES(?,?,CURDATE())`;

    db.query(sql, [user_id, property_id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            success: true,
            message: "Booking Successful"
        });
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});