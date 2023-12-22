const express = require('express');
const router = express.Router();

const { Link, validate } = require('../models/link');

// @route   GET /links
// @desc    Get all links, sorted by institution name
// @access  Public
router.get('/', (req, res) => {
  Link.find()
    .sort({ name: 1 })
    .then(data => {
      res.send(data);
    });
});

// @route   POST /links
// @desc    Create a new link
// @access  Public
router.post('/', (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(422).json({ error: error.details[0].message });
  }
  const { name, access_token, item_id } = req.body;

  let link = new Link({
    name: name,
    access_token: access_token,
    item_id: item_id
  });

  link
    .save()
    .then(record => {
      res.send({
        id: record._id,
        message: 'Link successfully created!'
      });
    })
    .catch(error => {
      res.send({
        error: error.name,
        message: error.message
      });
    });
});

module.exports = router;
