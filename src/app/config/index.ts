import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });
export default {
  database_uri: process.env.DATABASE_URI,
  port: process.env.PORT,
  salt_rounds: process.env.SALT_ROUNDS,
  jwt_secret: process.env.JWT_ACCESS_SECRET,
};
