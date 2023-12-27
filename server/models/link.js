// Link represents a user's financial account that has been linked via Plaid.

const Joi = require('joi');
const mongoose = require('mongoose');
const { Account } = require('./account');
const { Transaction } = require('./transaction');

const linkSchema = mongoose.Schema({
  // institution name
  name: {
    type: String,
    required: true
  },
  access_token: {
    type: String,
    required: true
  },
  item_id: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    required: true,
    default: new Date()
  },
  balance: {
    accounts: {
      type: [Account.schema],
      default: [],
      required: false
    },
    updated_at: {
      type: Date,
      required: false
    }
  },
  transactions: {
    data: [Transaction.schema],
    updated_at: {
      type: Date,
      required: false
    },
    // used for fetching any future updates after the
    // latest update provided in this response
    cursor: {
      type: String,
      required: false
    }
  }
});

const Link = mongoose.model('Link', linkSchema);

const validateLink = link => {
  const schema = Joi.object({
    name: Joi.string().required(),
    access_token: Joi.string().required(),
    item_id: Joi.string().required()
  });

  return schema.validate(link);
};

exports.Link = Link;
exports.validate = validateLink;
