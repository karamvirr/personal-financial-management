const Joi = require('joi');
const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
  account_id: {
    type: String,
    required: true
  },
  balances: {
    available: {
      type: Number,
      required: true
    },
    current: {
      type: Number,
      required: true
    },
    iso_currency_code: {
      type: String,
      required: true
    },
    limit: {
      type: Number,
      required: false
    },
    unofficial_currency_code: {
      type: String,
      required: false
    }
  },
  mask: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  official_name: {
    type: String,
    required: true
  },
  subtype: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});

const Account = mongoose.model('Account', accountSchema);

const validateAccount = account => {
  const schema = Joi.object({
    account_id: Joi.string().required(),
    balances: Joi.object({
      available: Joi.number().required(),
      current: Joi.number().required(),
      iso_currency_code: Joi.string().required(),
      limit: Joi.number().optional(),
      unofficial_currency_code: Joi.string().optional()
    }),
    mask: Joi.string().required(),
    name: Joi.string().required(),
    official_name: Joi.string().required(),
    subtype: Joi.string().required(),
    type: Joi.string().required()
  });
  return schema.validate(account);
};

exports.Account = Account;
exports.validate = validateAccount;
