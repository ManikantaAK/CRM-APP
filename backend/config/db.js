const mongoose = require('mongoose');
const dotenv = require('dotenv');

const uri ="mongodb+srv://Data:1234@products.ry40d.mongodb.net/?retryWrites=true&w=majority&appName=Products"

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
        dbName:"SMA",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

