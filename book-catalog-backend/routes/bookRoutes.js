const express = require('express');
const router = express.Router();
const {
  createBook, getBooks, getBookById, updateBook, deleteBook
} = require('../controllers/bookController');

router.get('/', getBooks);
router.post('/', createBook);
router.get('/:id', getBookById);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;
