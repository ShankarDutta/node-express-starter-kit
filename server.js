import cors from "cors";
import { setServers } from "dns/promises";
import express from "express";
import corsOption from "./config/corsOption.js";
import connectDb from "./config/db.js";
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

const startServer = async () => {
	try {
		if (env.NODE_ENV !== "production") {
			await setServers(["1.1.1.1", "8.8.8.8"]);
		}

		await connectDb();

		app.listen(port, () =>
			console.log(`Your server running on http://localhost:${port}`),
		);
	} catch (err) {
		console.error("Failed to start server:", err);
		process.exit(1);
	}
};

startServer();
