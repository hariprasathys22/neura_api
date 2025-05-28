import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateToken = (userId: string): string => {
  const jwtSecret = process.env.JWT_SECRET || "your_jwt_secret";

  return jwt.sign({ userId }, jwtSecret, {
    expiresIn: "30d"
  });
};

export default generateToken; 