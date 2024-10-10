const Student = require('../models/Student');

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().populate('class');
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students' });
  }
};

exports.createStudent = async (req, res) => {
  console.log(req.body); // Log incoming data
  const { name, gender, dateOfBirth, contact, feesPaid, class: classId } = req.body;
  try {
    const newStudent = new Student({ name, gender, dateOfBirth, contact, feesPaid, class: classId });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).json({ message: 'Error creating student' });
  }
};


