const Joi = require('joi');
const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
  account_id: {
    type: String,
    required: true
  },
  account_owner: {
    type: String,
    required: false
  },
  amount: {
    type: Number,
    required: true
  },
  authorized_date: {
    type: String,
    required: false
  },
  authorized_datetime: {
    type: String,
    required: false
  },
  category: {
    type: [String],
    required: false
  },
  category_id: {
    type: String,
    required: false
  },
  check_number: {
    type: String,
    required: false
  },
  counterparties: {
    type: [Object],
    required: true
  },
  date: {
    type: String,
    required: true
  },
  datetime: {
    type: String,
    required: false
  },
  iso_currency_code: {
    type: String,
    required: true
  },
  location: {
    address: {
      type: String,
      required: false
    },
    city: {
      type: String,
      required: false
    },
    country: {
      type: String,
      required: false
    },
    lat: {
      type: Number,
      required: false
    },
    lon: {
      type: Number,
      required: false
    },
    postal_code: {
      type: String,
      required: false
    },
    region: {
      type: String,
      required: false
    },
    store_number: {
      type: String,
      required: false
    }
  },
  logo_url: {
    type: String,
    required: false
  },
  merchant_entity_id: {
    type: String,
    required: false
  },
  merchant_name: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  payment_channel: {
    type: String,
    required: false
  },
  payment_meta: {
    by_order_of: {
      type: String,
      required: false
    },
    payee: {
      type: String,
      required: false
    },
    payer: {
      type: String,
      required: false
    },
    payment_method: {
      type: String,
      required: false
    },
    payment_processor: {
      type: String,
      required: false
    },
    ppd_id: {
      type: String,
      required: false
    },
    reason: {
      type: String,
      required: false
    },
    reference_number: {
      type: String,
      required: false
    }
  },
  pending: {
    type: Boolean,
    required: false
  },
  pending_transaction_id: {
    type: String,
    required: false
  },
  personal_finance_category: {
    confidence_level: {
      type: String,
      required: false
    },
    detailed: {
      type: String,
      required: false
    },
    primary: {
      type: String,
      required: false
    }
  },
  personal_finance_category_icon_url: {
    type: String,
    required: false
  },
  transaction_code: {
    type: String,
    required: false
  },
  transaction_id: {
    type: String,
    required: true
  },
  transaction_type: {
    type: String,
    required: false
  },
  unofficial_currency_code: {
    type: String,
    required: false
  },
  website: {
    type: String,
    required: false
  },
  note: {
    type: String,
    required: false
  }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

const validateTransaction = transaction => {
  const schema = Joi.object({
    account_id: Joi.string().required(),
    account_owner: Joi.string().optional(),
    amount: Joi.number().required(),
    authorized_date: Joi.string().optional(),
    authorized_datetime: Joi.string().optional(),
    category: Joi.array().optional(),
    category_id: Joi.string().optional(),
    check_number: Joi.string().optional(),
    counterparties: Joi.array().required(),
    date: Joi.string().required(),
    datetime: Joi.string().optional(),
    iso_currency_code: Joi.string().required(),
    location: Joi.object({
      address: Joi.string().optional(),
      city: Joi.string().optional(),
      country: Joi.string().optional(),
      lat: Joi.number().optional(),
      lon: Joi.number().optional(),
      postal_code: Joi.string().optional(),
      region: Joi.string().optional(),
      store_number: Joi.string().optional()
    }),
    logo_url: Joi.string().optional(),
    merchant_entity_id: Joi.string().optional(),
    merchant_name: Joi.string().optional(),
    name: Joi.string().required(),
    payment_channel: Joi.string().optional(),
    payment_meta: Joi.object({
      by_order_of: Joi.string().optional(),
      payee: Joi.string().optional(),
      payer: Joi.string().optional(),
      payment_method: Joi.string().optional(),
      payment_processor: Joi.string().optional(),
      ppd_id: Joi.string().optional(),
      reason: Joi.string().optional(),
      reference_number: Joi.string().optional()
    }),
    pending: Joi.boolean().optional(),
    pending_transaction_id: Joi.string().optional(),
    personal_finance_category: Joi.object({
      confidence_level: Joi.string().optional(),
      detailed: Joi.string().optional(),
      primary: Joi.string().optional()
    }),
    personal_finance_category_icon_url: Joi.string().optional(),
    transaction_code: Joi.string().optional(),
    transaction_id: Joi.string().required(),
    transaction_type: Joi.string().optional(),
    unofficial_currency_code: Joi.string().optional(),
    website: Joi.string().optional(),
    note: Joi.string().optional()
  });

  return schema.validate(transaction);
};

exports.Transaction = Transaction;
exports.validate = validateTransaction;
