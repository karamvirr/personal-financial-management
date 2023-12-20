const express = require('express');
const router = express.Router();

const { Account, validate } = require('../models/account');

// @route   GET /accounts
// @desc    Get all accounts
// @access  Public
router.get('/', (req, res) => {
  Account.find().then(data => {
    res.send(data);
  });
});

// @route   POST /accounts
// @desc    Create an account
// @access  Public
router.post('/', (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(422).json({ error: error.details[0].message });
  }
  const { name, access_token, item_id } = req.body;

  let account = new Account({
    name: name,
    access_token: access_token,
    item_id: item_id
  });

  account
    .save()
    .then(record => {
      res.send({
        id: record._id,
        message: 'Account successfully created!'
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
