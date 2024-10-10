const Teacher = require('../models/Teacher');

// Create a new teacher
const createTeacher = async (req, res) => {
    try {
        const newTeacher = new Teacher({
            name: req.body.name,
            gender: req.body.gender,
            dateOfBirth: req.body.dob,
            contact: req.body.contact,
            salary: Number(req.body.salary),
            assignedClass: req.body.assignedClass
        });
        await newTeacher.save();
        res.status(201).json(newTeacher);
    } catch (error) {
        console.error('Error saving teacher:', error);
        res.status(500).json({ message: error.message });
    }
};

// Get all teachers
const getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find().populate('assignedClass');
        res.json(teachers);
    } catch (error) {
        console.error('Error fetching teachers:', error);
        res.status(500).json({ message: 'Error fetching teachers.' });
    }
};

// Update a teacher
const updateTeacher = async (req, res) => {
    const { id } = req.params; // Get ID from URL
    try {
        const updatedTeacher = await Teacher.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!updatedTeacher) {
            return res.status(404).json({ message: 'Teacher not found.' });
        }
        res.json(updatedTeacher);
    } catch (error) {
        console.error('Error updating teacher:', error);
        res.status(500).json({ message: error.message });
    }
};

// Delete a teacher
const deleteTeacher = async (req, res) => {
    const { id } = req.params; // Get ID from URL
    try {
        const deletedTeacher = await Teacher.findByIdAndDelete(id);
        if (!deletedTeacher) {
            return res.status(404).json({ message: 'Teacher not found.' });
        }
        res.status(204).send(); // No content to send back
    } catch (error) {
        console.error('Error deleting teacher:', error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllTeachers, createTeacher, updateTeacher, deleteTeacher };
