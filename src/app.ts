import express from 'express';
import connectDB from './config/db';
import authRoutes from './routes/authRoutes'
import cors from 'cors';
const app = express();
const port = process.env.PORT ?? 5000;

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Middleware for CORS
app.use(cors())
// Routes
app.use('/api/auth', authRoutes);

connectDB();
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});