const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  contact: { type: String, required: true },
  feesPaid: { type: Boolean, default: false },
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' }
});


module.exports = mongoose.model('Student', studentSchema);
