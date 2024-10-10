const express = require('express');
const { getAllStudents, createStudent } = require('../controllers/studentController');
const router = express.Router();

router.get('/', getAllStudents);
router.post('/', createStudent);

module.exports = router;
