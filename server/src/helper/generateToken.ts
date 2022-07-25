import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

function generateToken(data: { username: string }) {
  return jwt.sign(data, process.env.SECRET_TOKEN as string, {
    expiresIn: "30s",
  });
}

export default generateToken;
