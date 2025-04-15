const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize SQLite Database
const db = new sqlite3.Database("./contact.db", (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to SQLite database.");
    db.run(
      `CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT NOT NULL,
       lastName TEXT NOT NULL,
    jobTitle TEXT NOT NULL,
    company TEXT NOT NULL,
    mobileNumber TEXT NOT NULL,
    email TEXT NOT NULL,
    websiteURL TEXT
      )`
    );
  }
});

// API Endpoint to Save Form Data
app.post("/api/contact", (req, res) => {
  const {
    firstName,
    lastName,
    jobTitle,
    company,
    mobileNumber,
    email,
    websiteURL,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !jobTitle ||
    !company ||
    !mobileNumber ||
    !email
  ) {
    return res
      .status(400)
      .json({ error: "All required fields must be filled." });
  }

  const query = `INSERT INTO contacts (firstName, lastName, jobTitle, company, mobileNumber, email, websiteURL) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  db.run(
    query,
    [firstName, lastName, jobTitle, company, mobileNumber, email, websiteURL],
    function (err) {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Failed to save data." });
      }
      res.status(200).json({ message: "Data saved successfully!" });
    }
  );
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
