const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all user's contacts
// @access  Private
router.get('/', (req, res) => {
    res.send('Get all contacts');
});


// @route   POST api/contacts
// @desc    Add new Contact
// @access  Private
router.post('/', (req, res) => {
    res.send('Add contact');
});



// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Update contact');
});



// @route   DELETE api/contacts/:id
// @desc    Register a user
// @access  Public
router.delete('/:id', (req, res) => {
    res.send('Deletes a contact');
});

module.exports = router;
