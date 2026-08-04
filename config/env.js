import dotenv from "dotenv";
import { z } from "zod";

// Load environment variables
dotenv.config();

const clientUrlSchema =
	process.env.NODE_ENV === "production" ?
		z.url({ protocol: /^https$/ }) // HTTPS only
	:	z.url({ protocol: /^https?$/ }); // HTTP or HTTPS

const envSchema = z.object({
	PORT: z.coerce.number().int().min(1000).max(65535),
	CLIENT_URL: clientUrlSchema,
});

const envVars = {
	PORT: process.env.PORT,
	CLIENT_URL: process.env.CLIENT_URL,
};

export const env = envSchema.parse(envVars);
