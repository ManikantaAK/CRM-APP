// // backend/models/Class.js
// const mongoose = require('mongoose');

// const classSchema = new mongoose.Schema({
//   className: { type: String, required: true },
//   year: { type: String, required: true },
//   teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
//   studentFees: { type: Number, required: true }
// });

// const Class = mongoose.model('Class', classSchema); // Ensure model is created

// module.exports = Class; // Correct export

const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    className: { type: String, required: true },
    year: { type: String, required: true },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true }, // Ensure this is ObjectId
    studentFees: { type: Number, required: true }
});

module.exports = mongoose.model('Class', classSchema);

