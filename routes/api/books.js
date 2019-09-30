const express = require('express');
const router = express.Router();

//load Book model
const Book = require('../../models/Book');

//@route GET api/books/test
//@desc tests books route
//@access public
router.get('/test', (req, res) => {
    res.send('book route testing');
});

//@route GET api/books
//@desc get all books
//@access public
router.get('/', (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({nobooksfound: 'No Books found'}));
});

//@route GET api/books/:id
//@desc get single book by id
//@access public
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({nobookfound: 'No Book found'}));
});

//@route POST api/books
//@desc add/save book
//@access public
router.post('/', (req, res) => {
    Book.create(req.body)
        .then(book => res.json({msg: 'Book added successfully'}))
        .catch(err => res.status(404).json({error: 'Unable to add this book'}));
});

//@route PUT api/books/:id
//@desc update book
//@access public
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({msg: 'Updated successfully'}))
        .catch(err => res.status(400).json({error: 'Unable to update the Database'}));
});

//@route DELETE api/books/:id
//@desc delete book by id
//@access public
router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id)
        .then(book => res.json({msg: 'Book entry deleted successfully'}))
        .catch(err => res.status(404).json({error: 'No such a book'}));
});

module.exports = router;