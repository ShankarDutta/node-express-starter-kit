import dotenv from "dotenv";
import { z } from "zod";

// Load environment variables
dotenv.config();

const envSchema = z.object({
	PORT: z.coerce.number().int().min(1000).max(65535),
});

const envVars = {
	PORT: process.env.PORT,
};

export const env = envSchema.parse(envVars);
