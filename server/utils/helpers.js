// Generates a random alphanumeric string of the given length.
// If no length is provided, the default length is 8.
//
// @param length: length of the random string
// @return string in random format
const getRandomId = (length = 8) => {
  return Math.random()
    .toString(36)
    .slice(2, length + 2);
};

// @param number:  min - Minimum number
// @param number: max - Maximum number
// @return number: random number between min (inclusive) and max (exclusive)
const getRandomNumber = (min, max) => {
  if (min > max) {
    throw new Error('min must be less than or equal to max');
  }
  return Math.random() * (max - min) + min;
};

// For simplicity, this will simply return a random number between 1 and 28.
// The result is left padded with a 0 if it is less than 10.
//
// @return string: random day of the month
const getRandomDayOfMonth = () => {
  const day = Math.floor(getRandomNumber(1, 29));
  return day < 10 ? `0${day}` : day.toString();
};

// @return array: array of strings representing the current month and the
//         previous thirteen months in YYYY-MM format
const getLastFourteenMonths = () => {
  const months = [];
  for (let i = 0; i < 14; i++) {
    // Start from 0 to include the current month
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    months.push(date.toISOString().slice(0, 7));
  }
  return months;
};

// @param list: list of elements
// @param num: number of random elements to choose
// @return array: array of three random elements from the list
//         if the list has less than three elements, return the list
const getRandomElements = (list, num) => {
  if (!list || list.length < num) {
    return list;
  }

  const result = [];
  while (result.length < num) {
    const randomIndex = Math.floor(Math.random() * list.length);
    if (!result.includes(list[randomIndex])) {
      result.push(list[randomIndex]);
    }
  }
  return result;
};

// @param name: name of the account link
// @return object: account link object with empty balance and transaction data
const mockAccountLink = name => {
  return {
    _id: getRandomId(),
    name: name,
    access_token: `access-demo-${getRandomId()}`,
    item_id: getRandomId(),
    created_at: new Date(),
    balance: {
      accounts: [],
      updated_at: null
    },
    transactions: {
      data: [],
      updated_at: null,
      cursor: null
    }
  };
};

// @param balance: object containing balance data
// @return object: account balance object with random account ID and mask
const mockAccountBalance = balance => {
  return {
    ...balance,
    account_id: getRandomId(),
    balances: {
      iso_currency_code: 'USD',
      ...balance.balances
    },
    mask: parseInt(getRandomNumber(1000, 9999))
  };
};

// @param transaction: object containing transaction data
// @return object: transaction object with random IDs
const mockTransaction = transaction => {
  return {
    _id: getRandomId(),
    account_owner: null,
    amount: null,
    authorized_date: null,
    authorized_datetime: null,
    category: null,
    category_id: null,
    check_number: null,
    counterparties: [],
    date: null,
    datetime: null,
    iso_currency_code: 'USD',
    location: {
      address: null,
      city: null,
      country: null,
      lat: null,
      lon: null,
      postal_code: null,
      region: null,
      store_number: getRandomNumber(1000, 9999)
    },
    logo_url: null,
    merchant_entity_id: getRandomId(),
    merchant_name: null,
    name: null,
    payment_channel: null,
    payment_meta: {
      by_order_of: null,
      payee: null,
      payer: null,
      payment_method: null,
      payment_processor: null,
      ppd_id: null,
      reason: null,
      reference_number: null
    },
    pending: false,
    pending_transaction_id: getRandomId(),
    personal_finance_category: {
      confidence_level: null,
      detailed: null,
      primary: null
    },
    personal_finance_category_icon_url: null,
    transaction_code: null,
    transaction_id: getRandomId(),
    transaction_type: null,
    unofficial_currency_code: null,
    website: 'https://github.com/karamvirr',
    note: null,
    ...transaction
  };
};

module.exports = {
  getRandomId,
  getRandomNumber,
  getRandomDayOfMonth,
  getLastFourteenMonths,
  getRandomElements,
  mockAccountLink,
  mockAccountBalance,
  mockTransaction
};
