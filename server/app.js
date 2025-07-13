import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.js';
import chatRoute from './routes/chat.js'; // 👈 New GPT route
import { connectDB } from './config/db.js';

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoute); // 👈 GPT chat route

// Default route
app.get('/', (req, res) => {
  res.send('🚀 NeoShop API running...');
});

export default app;
