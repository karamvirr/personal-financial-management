// Link represents a user's financial account that has been linked via Plaid.

const Joi = require('joi');
const mongoose = require('mongoose');

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
