import cors from "cors";
import express from "express";
import corsOption from "./config/corsOption.js";
import { env } from "./config/env.js";

// Initialize Express application
const app = express();

// Define server port
const port = env.PORT;

// Middlewares
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cors(corsOption));

// Start the server
app.listen(port, () => {
	console.log(`🚀 Server running on http://localhost:${port}`);
});
