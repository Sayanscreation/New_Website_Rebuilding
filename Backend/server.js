const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "BengalEngineers"
});

// Check database connection
db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL database.");
    }
});

// Root route to check if server is running
app.get("/", (req, res) => {
    res.send("Backend server is running...");
});

// API to fetch service details based on name
app.get('/api/service/:name', (req, res) => {
    const serviceName = req.params.name;
    const sql = 'SELECT * FROM services WHERE name = ?';

    db.query(sql, [serviceName], (err, result) => {
        if (err) {
            console.error("Error fetching service:", err);
            res.status(500).json({ error: "Database error" });
        } else {
            if (result.length > 0) {
                res.json(result[0]); // Return the first matching service
            } else {
                res.status(404).json({ error: "Service not found" });
            }
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
