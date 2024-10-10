const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const classRoutes = require('./routes/classRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const studentRoutes = require('./routes/studentRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
// Routes
app.use('/api/classes', classRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/students', studentRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
