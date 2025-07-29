const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  createTodo, updateTodo, deleteTodo, markAsRead, getTodos
} = require('../controllers/todoController');

router.use(auth);
router.get('/', getTodos);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);
router.patch('/:id/read', markAsRead);

module.exports = router;
