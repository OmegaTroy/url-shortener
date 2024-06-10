import { env } from 'process'
import {z} from 'zod'

const envVars = z.object({
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
  NEXTAUTH_SECRET: z.string(),
  NEXTAUTH_URL: z.string(),
})

envVars.parse(env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVars> {}
  }
}