// backend/models/Teacher.js
const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  contact: { type: String, required: true },
  salary: { type: Number, required: true },
  assignedClass: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' } // Reference to Class
});

module.exports = mongoose.model('Teacher', teacherSchema);
