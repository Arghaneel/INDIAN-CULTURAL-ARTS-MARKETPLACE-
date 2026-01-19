const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(__dirname)); // serve frontend files

// ROUTE: Home
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// ROUTE: Categories API
app.get("/api/categories", (req, res) => {
  const data = fs.readFileSync("./data/categories.json", "utf-8");
  res.json(JSON.parse(data));
});

// ROUTE: Products API
app.get("/api/products", (req, res) => {
  const data = fs.readFileSync("./data/products.json", "utf-8");
  res.json(JSON.parse(data));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
