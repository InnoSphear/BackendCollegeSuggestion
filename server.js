import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './Config/db.js';
import collegeRoutes from './routes/collegeRoutes.js'; 
dotenv.config();

const app = express();

// Middlewares
app.use(cors()); 
app.use(express.json());

// Routes
app.use('/api/colleges', collegeRoutes); 

// Port and DB Connection
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDb();
  console.log(`✅ Server is running on port ${PORT}`);
});
