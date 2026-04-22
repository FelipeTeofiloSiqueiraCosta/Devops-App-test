import "dotenv/config"
import z from "zod";

const envSchema = z.object({
    PORT: z.coerce.number().min(1000),
})
// Validate `process.env` against our schema
// and return the result
const env = envSchema.parse(process.env)

export  {env as typedEnv}