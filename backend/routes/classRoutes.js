// backend/routes/classRoutes.js
const express = require('express');
const router = express.Router();
const {
    getAllClasses,
    createClass,
    updateClass,
    deleteClass,
} = require('../controllers/classController');

router.get('/', getAllClasses); // GET all classes
router.post('/', createClass); // POST create new class
router.put('/:id', updateClass); // PUT update class
router.delete('/:id', deleteClass); // DELETE class

module.exports = router;
