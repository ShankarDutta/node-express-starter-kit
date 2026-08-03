import express from "express";

// Initialize Express application
const app = express();

// Define server port
const port = 4000;

// Start the server
app.listen(port, () => {
	console.log(`🚀 Server running on http://localhost:${port}`);
});
