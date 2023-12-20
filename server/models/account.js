// Account represents a user's bank account that has been linked via Plaid.

const Joi = require('joi');
const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
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
  }
});

const Account = mongoose.model('Account', accountSchema);

const validateAccount = account => {
  const schema = Joi.object({
    name: Joi.string().required(),
    access_token: Joi.string().required(),
    item_id: Joi.string().required()
  });

  return schema.validate(account);
};

exports.Account = Account;
exports.validate = validateAccount;
