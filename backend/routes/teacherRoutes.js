const express = require('express');
const { getAllTeachers, createTeacher, updateTeacher, deleteTeacher } = require('../controllers/teacherController');
const router = express.Router();

router.get('/', getAllTeachers);                // Get all teachers
router.post('/', createTeacher);                 // Create a new teacher
router.put('/:id', updateTeacher);               // Update a teacher by ID
router.delete('/:id', deleteTeacher);            // Delete a teacher by ID

module.exports = router;
