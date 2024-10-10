// backend/controllers/classController.js
const Class = require('../models/Class');

// Get all classes
const getAllClasses = async (req, res) => {
    try {
        const classes = await Class.find(); // Fetch all classes from the database
        res.json(classes);
    } catch (error) {
        console.error('Error fetching classes:', error);
        res.status(500).json({ message: 'Error fetching classes.' });
    }
};

// Create a new class
const createClass = async (req, res) => {
    try {
        const newClass = new Class({
            className: req.body.className,
            year: req.body.year,
            teacher: req.body.teacher,
            studentFees: Number(req.body.studentFees) // Ensure this is a number
        });
        await newClass.save();
        res.status(201).json(newClass);
    } catch (error) {
        console.error('Error saving class:', error.message);
        res.status(500).json({ message: 'Error saving class.' });
    }
};

// Update an existing class
const updateClass = async (req, res) => {
    try {
        const updatedClass = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedClass) {
            return res.status(404).json({ message: 'Class not found.' });
        }
        res.json(updatedClass);
    } catch (error) {
        console.error('Error updating class:', error);
        res.status(500).json({ message: 'Error updating class.' });
    }
};

// Delete a class
const deleteClass = async (req, res) => {
    try {
        const deletedClass = await Class.findByIdAndDelete(req.params.id);
        if (!deletedClass) {
            return res.status(404).json({ message: 'Class not found.' });
        }
        res.json({ message: 'Class deleted successfully.' });
    } catch (error) {
        console.error('Error deleting class:', error);
        res.status(500).json({ message: 'Error deleting class.' });
    }
};

module.exports = { getAllClasses, createClass, updateClass, deleteClass };
