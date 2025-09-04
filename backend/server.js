const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
dotenv.config();
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');

const app = express();

connectDB();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

// routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});