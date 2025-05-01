import 'dotenv';
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  out: './server/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: `${process.env.DATABASE_URL}`
  },
  verbose: true,
  strict: true
});
