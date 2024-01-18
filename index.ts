// index.ts
import express from 'express';
import database from './config/database';
import imageRoutes from './routes/image';

const app = express();
const port = 8000;

// Connect to MongoDB
database();

// Middleware
app.use(express.json());

// Routes
app.use(imageRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:8000`);
});
