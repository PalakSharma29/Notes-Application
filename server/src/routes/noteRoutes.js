const express = require('express');

const router = express.Router();
const controller = require("../controllers/noteController");
const { verifyToken } = require('../middleware/authMiddleware');

router.post('/', verifyToken, controller.createNote);
router.get('/', verifyToken, controller.getNotes);
router.get('/:id', verifyToken, controller.getNoteById);
router.put('/:id', verifyToken, controller.updateNote);
router.delete('/:id', verifyToken, controller.deleteNote);

module.exports = router;