// Load environment variables from .env file
require("dotenv").config();

// Import necessary modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Create an instance of Express
const app = express();

// Middleware for JSON parsing and CORS
app.use(express.json());
app.use(cors());

// Connect to MongoDB using the connection string from the environment variables
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Define a simple route to test the API
app.get("/", (req, res) => {
    res.send("Vianz Backend Running");
});

// Start the server on port 5000 or the port defined in environment variables
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));