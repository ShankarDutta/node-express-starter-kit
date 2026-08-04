import express from "express";
import { env } from "./config/env.js";

// Initialize Express application
const app = express();

// Define server port
const port = env.PORT;

// Start the server
app.listen(port, () => {
	console.log(`🚀 Server running on http://localhost:${port}`);
});
