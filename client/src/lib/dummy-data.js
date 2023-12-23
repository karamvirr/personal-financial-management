const BALANCES = [
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    balances: {
      available: 100,
      current: 110,
      iso_currency_code: 'USD',
      limit: null,
      unofficial_currency_code: null
    },
    mask: '0000',
    name: 'Plaid Checking',
    official_name: 'Plaid Gold Standard 0% Interest Checking',
    subtype: 'checking',
    type: 'depository',
    _id: {
      $oid: '65862959e1d041709de8bbbd'
    }
  },
  {
    account_id: 'gqX6n4pndZt1rPKoBGlpfl5xRg3emeFL54Dq9',
    balances: {
      available: 200,
      current: 210,
      iso_currency_code: 'USD',
      limit: null,
      unofficial_currency_code: null
    },
    mask: '1111',
    name: 'Plaid Saving',
    official_name: 'Plaid Silver Standard 0.1% Interest Saving',
    subtype: 'savings',
    type: 'depository',
    _id: {
      $oid: '65862959e1d041709de8bbbe'
    }
  }
];

const TRANSACTIONS_SYNC_EMPTY = {
  added: [],
  has_more: false,
  modified: [],
  next_cursor:
    'CAESJUEzWnk2UmdQYXJIZHZqTjlaVjVFaW41RW5xOERkckZCSlpWcXcaCwjdhJisBhCI9rFWIgsI3YSYrAYQiPaxVioLCN2EmKwGEIj2sVY=',
  removed: [],
  request_id: 'rZh3objQrmykhEf'
};

const BALANCES_INVALID = {
  display_message: null,
  documentation_url: 'https://plaid.com/docs/?ref=error#invalid-input-errors',
  error_code: 'INVALID_ACCESS_TOKEN',
  error_message: 'could not find matching access token',
  error_type: 'INVALID_INPUT',
  request_id: 'gF29PI9r2PD9ik8',
  suggested_action: null
};

const SAVINGS = [
  {
    account_id: '3grkopaRyeTxzQkeRgDGc1qpdXyvJRfmEReXw',
    balances: {
      available: 100,
      current: 110,
      iso_currency_code: 'USD',
      limit: null,
      unofficial_currency_code: null
    },
    mask: '0000',
    name: 'Plaid Checking',
    official_name: 'Plaid Gold Standard 0% Interest Checking',
    subtype: 'checking',
    type: 'depository'
  },
  {
    account_id: 'xVGky7ojA3fenE4RPrGxS4NoQ9pRnvuyeBRgn',
    balances: {
      available: 200,
      current: 210,
      iso_currency_code: 'USD',
      limit: null,
      unofficial_currency_code: null
    },
    mask: '1111',
    name: 'Plaid Saving',
    official_name: 'Plaid Silver Standard 0.1% Interest Saving',
    subtype: 'savings',
    type: 'depository'
  }
];

const TRANSACTIONS_SAMPLE = [
  {
    account_id: '3grkopaRyeTxzQkeRgDGc1qpdXyvJRfmEReXw',
    account_owner: null,
    amount: 89.4,
    authorized_date: '2023-12-21',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants'],
    category_id: '13005000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'LOW',
        entity_id: null,
        logo_url: null,
        name: 'FUN',
        phone_number: null,
        type: 'merchant',
        website: null
      }
    ],
    date: '2023-12-22',
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
      store_number: null
    },
    logo_url: null,
    merchant_entity_id: null,
    merchant_name: 'FUN',
    name: 'SparkFun',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'LOW',
      detailed: 'GENERAL_MERCHANDISE_OTHER_GENERAL_MERCHANDISE',
      primary: 'GENERAL_MERCHANDISE'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_GENERAL_MERCHANDISE.png',
    transaction_code: null,
    transaction_id: 'PpxN654l8MFg17DG54peHk7w8J6vnefXWNpk4',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: null
  },
  {
    account_id: '3grkopaRyeTxzQkeRgDGc1qpdXyvJRfmEReXw',
    account_owner: null,
    amount: 6.33,
    authorized_date: '2023-12-08',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2023-12-09',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 072515 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'jV9rNldWjMfqrX48AE1dTrQb7XaGLpFvLGrMX',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: '3grkopaRyeTxzQkeRgDGc1qpdXyvJRfmEReXw',
    account_owner: null,
    amount: 5.4,
    authorized_date: '2023-11-25',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2023-11-26',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 063015 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: '7AxymEjK61UqzrkwE3o5TljpnNqaLDC8n17lW',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: '3grkopaRyeTxzQkeRgDGc1qpdXyvJRfmEReXw',
    account_owner: null,
    amount: -500,
    authorized_date: '2023-11-24',
    authorized_datetime: null,
    category: ['Travel', 'Airlines and Aviation Services'],
    category_id: '22001000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
        logo_url:
          'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
        name: 'United Airlines',
        phone_number: null,
        type: 'merchant',
        website: 'united.com'
      }
    ],
    date: '2023-11-24',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
    merchant_entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
    merchant_name: 'United Airlines',
    name: 'United Airlines',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRAVEL_FLIGHTS',
      primary: 'TRAVEL'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRAVEL.png',
    transaction_code: null,
    transaction_id: 'eVGe35rpdjfW6mB4jelnUgzapAJr8Bha5Vodg',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'united.com'
  },
  {
    account_id: '3grkopaRyeTxzQkeRgDGc1qpdXyvJRfmEReXw',
    account_owner: null,
    amount: 12,
    authorized_date: '2023-11-23',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Fast Food'],
    category_id: '13005032',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
        logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
        name: "McDonald's",
        phone_number: null,
        type: 'merchant',
        website: 'mcdonalds.com'
      }
    ],
    date: '2023-11-23',
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
      store_number: '3322'
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
    merchant_entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
    merchant_name: "McDonald's",
    name: "McDonald's",
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_FAST_FOOD',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'QodP65NqE1TWbpL35KrgUMZn8wg3WGTG7aqMg',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'mcdonalds.com'
  }
];

const TRANSACTIONS_FULL = [
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 12,
    authorized_date: '2023-12-23',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Fast Food'],
    category_id: '13005032',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
        logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
        name: "McDonald's",
        phone_number: null,
        type: 'merchant',
        website: 'mcdonalds.com'
      }
    ],
    date: '2023-12-23',
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
      store_number: '3322'
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
    merchant_entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
    merchant_name: "McDonald's",
    name: "McDonald's",
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_FAST_FOOD',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'BXZWG4wGAdhQJxBgWAkltKdD6aoLlqizjrl4w',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'mcdonalds.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 4.33,
    authorized_date: '2023-12-23',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Coffee Shop'],
    category_id: '13005043',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
        logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
        name: 'Starbucks',
        phone_number: null,
        type: 'merchant',
        website: 'starbucks.com'
      }
    ],
    date: '2023-12-23',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
    merchant_entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
    merchant_name: 'Starbucks',
    name: 'Starbucks',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_COFFEE',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: '35bxjyPjowFZPJBVwGlyTMjzGnDQg7smRzxZZ',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'starbucks.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 89.4,
    authorized_date: '2023-12-21',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants'],
    category_id: '13005000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'LOW',
        entity_id: null,
        logo_url: null,
        name: 'FUN',
        phone_number: null,
        type: 'merchant',
        website: null
      }
    ],
    date: '2023-12-22',
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
      store_number: null
    },
    logo_url: null,
    merchant_entity_id: null,
    merchant_name: 'FUN',
    name: 'SparkFun',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'LOW',
      detailed: 'GENERAL_MERCHANDISE_OTHER_GENERAL_MERCHANDISE',
      primary: 'GENERAL_MERCHANDISE'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_GENERAL_MERCHANDISE.png',
    transaction_code: null,
    transaction_id: 'xMqm4Ax4ywTQlpwDox93tVdJkXGWqAFyB8b6y',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: null
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 6.33,
    authorized_date: '2023-12-08',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2023-12-09',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 072515 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'dbX9WxgWBaTpdajBGEmDFnRD4gzw1XiBa7pJD',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 5.4,
    authorized_date: '2023-11-25',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2023-11-26',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 063015 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'aDXGgzkgKyhaZ3mGQlByFnq1xNRJmVik3rMZe',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: -500,
    authorized_date: '2023-11-24',
    authorized_datetime: null,
    category: ['Travel', 'Airlines and Aviation Services'],
    category_id: '22001000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
        logo_url:
          'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
        name: 'United Airlines',
        phone_number: null,
        type: 'merchant',
        website: 'united.com'
      }
    ],
    date: '2023-11-24',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
    merchant_entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
    merchant_name: 'United Airlines',
    name: 'United Airlines',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRAVEL_FLIGHTS',
      primary: 'TRAVEL'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRAVEL.png',
    transaction_code: null,
    transaction_id: '4mbd7967DjsJknjvrGBMf1lB9MVWGqTlMBPJk',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'united.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 12,
    authorized_date: '2023-11-23',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Fast Food'],
    category_id: '13005032',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
        logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
        name: "McDonald's",
        phone_number: null,
        type: 'merchant',
        website: 'mcdonalds.com'
      }
    ],
    date: '2023-11-23',
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
      store_number: '3322'
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
    merchant_entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
    merchant_name: "McDonald's",
    name: "McDonald's",
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_FAST_FOOD',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'NXNyzoqz6bhgMlZdenvNcKJEmyV5waiXK9wyo',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'mcdonalds.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 4.33,
    authorized_date: '2023-11-23',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Coffee Shop'],
    category_id: '13005043',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
        logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
        name: 'Starbucks',
        phone_number: null,
        type: 'merchant',
        website: 'starbucks.com'
      }
    ],
    date: '2023-11-23',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
    merchant_entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
    merchant_name: 'Starbucks',
    name: 'Starbucks',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_COFFEE',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'PVWA38r36XsrZ9vRoeBNHqDRGNL5gafXvgRoK',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'starbucks.com'
  },
  {
    account_id: 'gqX6n4pndZt1rPKoBGlpfl5xRg3emeFL54Dq9',
    account_owner: null,
    amount: -4.22,
    authorized_date: '2023-12-21',
    authorized_datetime: null,
    category: ['Transfer', 'Payroll'],
    category_id: '21009000',
    check_number: null,
    counterparties: [],
    date: '2023-12-21',
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
      store_number: null
    },
    logo_url: null,
    merchant_entity_id: null,
    merchant_name: null,
    name: 'INTRST PYMNT',
    payment_channel: 'other',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'LOW',
      detailed: 'INCOME_WAGES',
      primary: 'INCOME'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_INCOME.png',
    transaction_code: null,
    transaction_id: 'jz56yjpyNXH3kpBWGdjVuB4ZqwJmDefvADe69',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: null
  },
  {
    account_id: 'gqX6n4pndZt1rPKoBGlpfl5xRg3emeFL54Dq9',
    account_owner: null,
    amount: 25,
    authorized_date: '2023-11-25',
    authorized_datetime: null,
    category: ['Payment', 'Credit Card'],
    category_id: '16001000',
    check_number: null,
    counterparties: [],
    date: '2023-11-26',
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
      store_number: null
    },
    logo_url: null,
    merchant_entity_id: null,
    merchant_name: null,
    name: 'CREDIT CARD 3333 PAYMENT *//',
    payment_channel: 'other',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'LOW',
      detailed: 'LOAN_PAYMENTS_CREDIT_CARD_PAYMENT',
      primary: 'LOAN_PAYMENTS'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_LOAN_PAYMENTS.png',
    transaction_code: null,
    transaction_id: '7kbNZ6PZm3uNb9mJl5aGCoZm5738yAC8peqdr',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: null
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 89.4,
    authorized_date: '2023-11-21',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants'],
    category_id: '13005000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'LOW',
        entity_id: null,
        logo_url: null,
        name: 'FUN',
        phone_number: null,
        type: 'merchant',
        website: null
      }
    ],
    date: '2023-11-22',
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
      store_number: null
    },
    logo_url: null,
    merchant_entity_id: null,
    merchant_name: 'FUN',
    name: 'SparkFun',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'LOW',
      detailed: 'ENTERTAINMENT_SPORTING_EVENTS_AMUSEMENT_PARKS_AND_MUSEUMS',
      primary: 'ENTERTAINMENT'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png',
    transaction_code: null,
    transaction_id: 'aDXGgzkgKyhaZ3mGQlByFnq1z8QVEEFZprXlD',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: null
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 6.33,
    authorized_date: '2023-11-08',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2023-11-09',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 072515 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: '4mbd7967DjsJknjvrGBMf1lBe76q33HJ8BmNR',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 5.4,
    authorized_date: '2023-10-26',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2023-10-27',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 063015 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'NXNyzoqz6bhgMlZdenvNcKJE3DbaxxTyL9VB8',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: -500,
    authorized_date: '2023-10-25',
    authorized_datetime: null,
    category: ['Travel', 'Airlines and Aviation Services'],
    category_id: '22001000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
        logo_url:
          'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
        name: 'United Airlines',
        phone_number: null,
        type: 'merchant',
        website: 'united.com'
      }
    ],
    date: '2023-10-25',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
    merchant_entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
    merchant_name: 'United Airlines',
    name: 'United Airlines',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRAVEL_FLIGHTS',
      primary: 'TRAVEL'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRAVEL.png',
    transaction_code: null,
    transaction_id: 'PVWA38r36XsrZ9vRoeBNHqDRZj4awwuoEgKB5',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'united.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 12,
    authorized_date: '2023-10-24',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Fast Food'],
    category_id: '13005032',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
        logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
        name: "McDonald's",
        phone_number: null,
        type: 'merchant',
        website: 'mcdonalds.com'
      }
    ],
    date: '2023-10-24',
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
      store_number: '3322'
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
    merchant_entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
    merchant_name: "McDonald's",
    name: "McDonald's",
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_FAST_FOOD',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'jz56yjpyNXH3kpBWGdjVuB4Z9PvebbC6oDQzW',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'mcdonalds.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 4.33,
    authorized_date: '2023-10-24',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Coffee Shop'],
    category_id: '13005043',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
        logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
        name: 'Starbucks',
        phone_number: null,
        type: 'merchant',
        website: 'starbucks.com'
      }
    ],
    date: '2023-10-24',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
    merchant_entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
    merchant_name: 'Starbucks',
    name: 'Starbucks',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_COFFEE',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: '7kbNZ6PZm3uNb9mJl5aGCoZmWRdAppid4ewAk',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'starbucks.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 89.4,
    authorized_date: '2023-10-22',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants'],
    category_id: '13005000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'LOW',
        entity_id: null,
        logo_url: null,
        name: 'FUN',
        phone_number: null,
        type: 'merchant',
        website: null
      }
    ],
    date: '2023-10-23',
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
      store_number: null
    },
    logo_url: null,
    merchant_entity_id: null,
    merchant_name: 'FUN',
    name: 'SparkFun',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'LOW',
      detailed: 'GENERAL_MERCHANDISE_OTHER_GENERAL_MERCHANDISE',
      primary: 'GENERAL_MERCHANDISE'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_GENERAL_MERCHANDISE.png',
    transaction_code: null,
    transaction_id: 'enXDAd6A3QIbQvkErnx1FER7mDxbaaCrypxR4',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: null
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 6.33,
    authorized_date: '2023-10-09',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2023-10-10',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 072515 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'QyMAxEzx6gtGZ98V7g1NfKpvVdXlnnTwrvj4d',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 5.4,
    authorized_date: '2023-09-26',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2023-09-27',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 063015 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'ZRMAQvbQ6DsJW9wBzE53fNerabm5AAfen4xAK',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: -500,
    authorized_date: '2023-09-25',
    authorized_datetime: null,
    category: ['Travel', 'Airlines and Aviation Services'],
    category_id: '22001000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
        logo_url:
          'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
        name: 'United Airlines',
        phone_number: null,
        type: 'merchant',
        website: 'united.com'
      }
    ],
    date: '2023-09-25',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
    merchant_entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
    merchant_name: 'United Airlines',
    name: 'United Airlines',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRAVEL_FLIGHTS',
      primary: 'TRAVEL'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRAVEL.png',
    transaction_code: null,
    transaction_id: 'MX4Vrplr6GhjoMn87kyPH6XKzNMARRFLbqmwB',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'united.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 12,
    authorized_date: '2023-09-24',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Fast Food'],
    category_id: '13005032',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
        logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
        name: "McDonald's",
        phone_number: null,
        type: 'merchant',
        website: 'mcdonalds.com'
      }
    ],
    date: '2023-09-24',
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
      store_number: '3322'
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
    merchant_entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
    merchant_name: "McDonald's",
    name: "McDonald's",
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_FAST_FOOD',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: '18VBNbJN53TPmJwxrlKBcDVdxBz3GGFpbBDLz',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'mcdonalds.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 4.33,
    authorized_date: '2023-09-24',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Coffee Shop'],
    category_id: '13005043',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
        logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
        name: 'Starbucks',
        phone_number: null,
        type: 'merchant',
        website: 'starbucks.com'
      }
    ],
    date: '2023-09-24',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
    merchant_entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
    merchant_name: 'Starbucks',
    name: 'Starbucks',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_COFFEE',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'LXawKLMK6yhR4mE7yZ3PHD6y1PqrMMFkgw3vx',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'starbucks.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 89.4,
    authorized_date: '2023-09-22',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants'],
    category_id: '13005000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'LOW',
        entity_id: null,
        logo_url: null,
        name: 'FUN',
        phone_number: null,
        type: 'merchant',
        website: null
      }
    ],
    date: '2023-09-23',
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
      store_number: null
    },
    logo_url: null,
    merchant_entity_id: null,
    merchant_name: 'FUN',
    name: 'SparkFun',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'LOW',
      detailed: 'ENTERTAINMENT_SPORTING_EVENTS_AMUSEMENT_PARKS_AND_MUSEUMS',
      primary: 'ENTERTAINMENT'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png',
    transaction_code: null,
    transaction_id: 'p4DmK1gKZpH96Wr5GbnQcQJE6mDpzzSp9aXyr',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: null
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 6.33,
    authorized_date: '2023-09-09',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2023-09-10',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 072515 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'oaDoqMbqQNsJD6KNjLdVf4zk51wXrrto4Evx9',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 5.4,
    authorized_date: '2023-08-27',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2023-08-28',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 063015 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'gqX6n4pndZt1rPKoBGlpfl54P6gAbbuEjWyaB',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: -500,
    authorized_date: '2023-08-26',
    authorized_datetime: null,
    category: ['Travel', 'Airlines and Aviation Services'],
    category_id: '22001000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
        logo_url:
          'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
        name: 'United Airlines',
        phone_number: null,
        type: 'merchant',
        website: 'united.com'
      }
    ],
    date: '2023-08-26',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
    merchant_entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
    merchant_name: 'United Airlines',
    name: 'United Airlines',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRAVEL_FLIGHTS',
      primary: 'TRAVEL'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRAVEL.png',
    transaction_code: null,
    transaction_id: '8XmPMl6MAVhQo8ADvZjmtRzqAW4reeFWvqN4B',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'united.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 12,
    authorized_date: '2023-08-25',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Fast Food'],
    category_id: '13005032',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
        logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
        name: "McDonald's",
        phone_number: null,
        type: 'merchant',
        website: 'mcdonalds.com'
      }
    ],
    date: '2023-08-25',
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
      store_number: '3322'
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
    merchant_entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
    merchant_name: "McDonald's",
    name: "McDonald's",
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_FAST_FOOD',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'EXKWmj7mbEhZQm86bJdzTKoxre8JwwT4Zb6vM',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'mcdonalds.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 4.33,
    authorized_date: '2023-08-25',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Coffee Shop'],
    category_id: '13005043',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
        logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
        name: 'Starbucks',
        phone_number: null,
        type: 'merchant',
        website: 'starbucks.com'
      }
    ],
    date: '2023-08-25',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
    merchant_entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
    merchant_name: 'Starbucks',
    name: 'Starbucks',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_COFFEE',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'WnMAjmJjVgIeqaWpBJlrup8M35kEddt6ogBAN',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'starbucks.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 89.4,
    authorized_date: '2023-08-23',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants'],
    category_id: '13005000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'LOW',
        entity_id: null,
        logo_url: null,
        name: 'FUN',
        phone_number: null,
        type: 'merchant',
        website: null
      }
    ],
    date: '2023-08-24',
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
      store_number: null
    },
    logo_url: null,
    merchant_entity_id: null,
    merchant_name: 'FUN',
    name: 'SparkFun',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'LOW',
      detailed: 'GENERAL_MERCHANDISE_OTHER_GENERAL_MERCHANDISE',
      primary: 'GENERAL_MERCHANDISE'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_GENERAL_MERCHANDISE.png',
    transaction_code: null,
    transaction_id: 'AXVWAa1A6bhgX3eByELqc1DN76vBEEH9RzBKR',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: null
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 6.33,
    authorized_date: '2023-08-10',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2023-08-11',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 072515 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'GXz69ew9ABhkbPEAXayotN45Pmbgqqf6JkZrW',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 5.4,
    authorized_date: '2023-07-28',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2023-07-29',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 063015 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'ndD9lZ4le1IBRDqpPWN3Ta1KEyxmDDhAPvJp6',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: -500,
    authorized_date: '2023-07-27',
    authorized_datetime: null,
    category: ['Travel', 'Airlines and Aviation Services'],
    category_id: '22001000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
        logo_url:
          'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
        name: 'United Airlines',
        phone_number: null,
        type: 'merchant',
        website: 'united.com'
      }
    ],
    date: '2023-07-27',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
    merchant_entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
    merchant_name: 'United Airlines',
    name: 'United Airlines',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRAVEL_FLIGHTS',
      primary: 'TRAVEL'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRAVEL.png',
    transaction_code: null,
    transaction_id: 'bnXokBpkrQIMjegqlWmxiqRNK8rnVVumg8Bym',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'united.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 12,
    authorized_date: '2023-07-26',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Fast Food'],
    category_id: '13005032',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
        logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
        name: "McDonald's",
        phone_number: null,
        type: 'merchant',
        website: 'mcdonalds.com'
      }
    ],
    date: '2023-07-26',
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
      store_number: '3322'
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
    merchant_entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
    merchant_name: "McDonald's",
    name: "McDonald's",
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_FAST_FOOD',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'mxDwRQJR7ZS5AMlWNVmQcdLMNbv9VVtgR6rw4',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'mcdonalds.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 4.33,
    authorized_date: '2023-07-26',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Coffee Shop'],
    category_id: '13005043',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
        logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
        name: 'Starbucks',
        phone_number: null,
        type: 'merchant',
        website: 'starbucks.com'
      }
    ],
    date: '2023-07-26',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
    merchant_entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
    merchant_name: 'Starbucks',
    name: 'Starbucks',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_COFFEE',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'y1KRNGdNyzFZ1ymKGWVxTyMbdEDlWWC4kxgLW',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'starbucks.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 89.4,
    authorized_date: '2023-07-24',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants'],
    category_id: '13005000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'LOW',
        entity_id: null,
        logo_url: null,
        name: 'FUN',
        phone_number: null,
        type: 'merchant',
        website: null
      }
    ],
    date: '2023-07-25',
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
      store_number: null
    },
    logo_url: null,
    merchant_entity_id: null,
    merchant_name: 'FUN',
    name: 'SparkFun',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'LOW',
      detailed: 'ENTERTAINMENT_SPORTING_EVENTS_AMUSEMENT_PARKS_AND_MUSEUMS',
      primary: 'ENTERTAINMENT'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png',
    transaction_code: null,
    transaction_id: '9X7j1qk1DNhE9yJKkR6jFWZ5LbElddC4zjKbE',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: null
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 6.33,
    authorized_date: '2023-07-11',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2023-07-12',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 072515 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'vQDJdEBdy9FDnpbWmAazF6onx1ZaeeFqarw4l',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 5.4,
    authorized_date: '2023-06-28',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2023-06-29',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 063015 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'RnMAdWBd6XIGwzqXB8WbfXwnNyoJggta78Zrw',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: -500,
    authorized_date: '2023-06-27',
    authorized_datetime: null,
    category: ['Travel', 'Airlines and Aviation Services'],
    category_id: '22001000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
        logo_url:
          'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
        name: 'United Airlines',
        phone_number: null,
        type: 'merchant',
        website: 'united.com'
      }
    ],
    date: '2023-06-27',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
    merchant_entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
    merchant_name: 'United Airlines',
    name: 'United Airlines',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRAVEL_FLIGHTS',
      primary: 'TRAVEL'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRAVEL.png',
    transaction_code: null,
    transaction_id: '6D64QRXQ5NhynkDgeXVjupyvWad8ZZt8j4zMz',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'united.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 12,
    authorized_date: '2023-06-26',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Fast Food'],
    category_id: '13005032',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
        logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
        name: "McDonald's",
        phone_number: null,
        type: 'merchant',
        website: 'mcdonalds.com'
      }
    ],
    date: '2023-06-26',
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
      store_number: '3322'
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
    merchant_entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
    merchant_name: "McDonald's",
    name: "McDonald's",
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_FAST_FOOD',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'XJGR7yo76EIKR4xojVeXfnqk8mEBppFbpGDzJ',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'mcdonalds.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 4.33,
    authorized_date: '2023-06-26',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Coffee Shop'],
    category_id: '13005043',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
        logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
        name: 'Starbucks',
        phone_number: null,
        type: 'merchant',
        website: 'starbucks.com'
      }
    ],
    date: '2023-06-26',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
    merchant_entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
    merchant_name: 'Starbucks',
    name: 'Starbucks',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_COFFEE',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'DXqGbPob6jha3mJGDXk8FnjQgmRNKKF3mbZ9G',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'starbucks.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 89.4,
    authorized_date: '2023-06-24',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants'],
    category_id: '13005000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'LOW',
        entity_id: null,
        logo_url: null,
        name: 'FUN',
        phone_number: null,
        type: 'merchant',
        website: null
      }
    ],
    date: '2023-06-25',
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
      store_number: null
    },
    logo_url: null,
    merchant_entity_id: null,
    merchant_name: 'FUN',
    name: 'SparkFun',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'LOW',
      detailed: 'GENERAL_MERCHANDISE_OTHER_GENERAL_MERCHANDISE',
      primary: 'GENERAL_MERCHANDISE'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_GENERAL_MERCHANDISE.png',
    transaction_code: null,
    transaction_id: 'VJLmPbpP6GIN7d8rLwJKCxJjQ6vB77t9bzDLA',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: null
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 6.33,
    authorized_date: '2023-06-11',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2023-06-12',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 072515 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'wZl1aW3aw9T6wEAqpxPWCePq41AjXXTPAJQDD',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 5.4,
    authorized_date: '2023-05-29',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2023-05-30',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 063015 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: '58baev7eRGT15bpGwJoafLZNoa4Rxxt5z96ea',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: -500,
    authorized_date: '2023-05-28',
    authorized_datetime: null,
    category: ['Travel', 'Airlines and Aviation Services'],
    category_id: '22001000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
        logo_url:
          'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
        name: 'United Airlines',
        phone_number: null,
        type: 'merchant',
        website: 'united.com'
      }
    ],
    date: '2023-05-28',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
    merchant_entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
    merchant_name: 'United Airlines',
    name: 'United Airlines',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRAVEL_FLIGHTS',
      primary: 'TRAVEL'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRAVEL.png',
    transaction_code: null,
    transaction_id: 'JXxWlMkl6RhREeqJd8vVHWXMDVEdxxCBpmnWV',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'united.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 12,
    authorized_date: '2023-05-27',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Fast Food'],
    category_id: '13005032',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
        logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
        name: "McDonald's",
        phone_number: null,
        type: 'merchant',
        website: 'mcdonalds.com'
      }
    ],
    date: '2023-05-27',
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
      store_number: '3322'
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
    merchant_entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
    merchant_name: "McDonald's",
    name: "McDonald's",
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_FAST_FOOD',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'kBDo97w9PjhbwQga9G5rF8myeJvBxxuLrkmgM',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'mcdonalds.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 4.33,
    authorized_date: '2023-05-27',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Coffee Shop'],
    category_id: '13005043',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
        logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
        name: 'Starbucks',
        phone_number: null,
        type: 'merchant',
        website: 'starbucks.com'
      }
    ],
    date: '2023-05-27',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
    merchant_entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
    merchant_name: 'Starbucks',
    name: 'Starbucks',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_COFFEE',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'l3Dove7vj5u5QAB14xLzcbqEvxyXppfp1lMG9',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'starbucks.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 89.4,
    authorized_date: '2023-05-25',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants'],
    category_id: '13005000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'LOW',
        entity_id: null,
        logo_url: null,
        name: 'FUN',
        phone_number: null,
        type: 'merchant',
        website: null
      }
    ],
    date: '2023-05-26',
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
      store_number: null
    },
    logo_url: null,
    merchant_entity_id: null,
    merchant_name: 'FUN',
    name: 'SparkFun',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'LOW',
      detailed: 'GENERAL_MERCHANDISE_OTHER_GENERAL_MERCHANDISE',
      primary: 'GENERAL_MERCHANDISE'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_GENERAL_MERCHANDISE.png',
    transaction_code: null,
    transaction_id: 'qkDorLlrMpuq8aZmeXLQCAbNmJg4yyhg8nQew',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: null
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 6.33,
    authorized_date: '2023-05-12',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2023-05-13',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 072515 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'KXdWq1Rq69hneQEKav8PtmoM1PVKvvSRgM5le',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 5.4,
    authorized_date: '2023-04-29',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2023-04-30',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 063015 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'rPDozpqz1yUq4NegQyplC6xaj73mLLF7LEGrE',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: -500,
    authorized_date: '2023-04-28',
    authorized_datetime: null,
    category: ['Travel', 'Airlines and Aviation Services'],
    category_id: '22001000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
        logo_url:
          'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
        name: 'United Airlines',
        phone_number: null,
        type: 'merchant',
        website: 'united.com'
      }
    ],
    date: '2023-04-28',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
    merchant_entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
    merchant_name: 'United Airlines',
    name: 'United Airlines',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRAVEL_FLIGHTS',
      primary: 'TRAVEL'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRAVEL.png',
    transaction_code: null,
    transaction_id: 'zLr1PkJPVxsovpq68z1RFkqaJgRBNNIlDpeAz',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'united.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 12,
    authorized_date: '2023-04-27',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Fast Food'],
    category_id: '13005032',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
        logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
        name: "McDonald's",
        phone_number: null,
        type: 'merchant',
        website: 'mcdonalds.com'
      }
    ],
    date: '2023-04-27',
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
      store_number: '3322'
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
    merchant_entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
    merchant_name: "McDonald's",
    name: "McDonald's",
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_FAST_FOOD',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'BXZWG4wGAdhQJxBgWAkltKdDPGkqrrT4qrk9N',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'mcdonalds.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 4.33,
    authorized_date: '2023-04-27',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Coffee Shop'],
    category_id: '13005043',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
        logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
        name: 'Starbucks',
        phone_number: null,
        type: 'merchant',
        website: 'starbucks.com'
      }
    ],
    date: '2023-04-27',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
    merchant_entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
    merchant_name: 'Starbucks',
    name: 'Starbucks',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_COFFEE',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: '35bxjyPjowFZPJBVwGlyTMjz5P97KKCZGzW73',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'starbucks.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 89.4,
    authorized_date: '2023-04-25',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants'],
    category_id: '13005000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'LOW',
        entity_id: null,
        logo_url: null,
        name: 'FUN',
        phone_number: null,
        type: 'merchant',
        website: null
      }
    ],
    date: '2023-04-26',
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
      store_number: null
    },
    logo_url: null,
    merchant_entity_id: null,
    merchant_name: 'FUN',
    name: 'SparkFun',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'LOW',
      detailed: 'ENTERTAINMENT_SPORTING_EVENTS_AMUSEMENT_PARKS_AND_MUSEUMS',
      primary: 'ENTERTAINMENT'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png',
    transaction_code: null,
    transaction_id: 'xMqm4Ax4ywTQlpwDox93tVdJwm8Ajji6m8Q5V',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: null
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 6.33,
    authorized_date: '2023-04-12',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2023-04-13',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 072515 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'dbX9WxgWBaTpdajBGEmDFnRDLyNXeeFJo7X8a',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 5.4,
    authorized_date: '2023-03-30',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2023-03-31',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 063015 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'aDXGgzkgKyhaZ3mGQlByFnq1z8QVEEFZprXjD',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: -500,
    authorized_date: '2023-03-29',
    authorized_datetime: null,
    category: ['Travel', 'Airlines and Aviation Services'],
    category_id: '22001000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
        logo_url:
          'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
        name: 'United Airlines',
        phone_number: null,
        type: 'merchant',
        website: 'united.com'
      }
    ],
    date: '2023-03-29',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
    merchant_entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
    merchant_name: 'United Airlines',
    name: 'United Airlines',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRAVEL_FLIGHTS',
      primary: 'TRAVEL'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRAVEL.png',
    transaction_code: null,
    transaction_id: '4mbd7967DjsJknjvrGBMf1lBe76q33HJ8Bm6R',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'united.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 12,
    authorized_date: '2023-03-28',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Fast Food'],
    category_id: '13005032',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
        logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
        name: "McDonald's",
        phone_number: null,
        type: 'merchant',
        website: 'mcdonalds.com'
      }
    ],
    date: '2023-03-28',
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
      store_number: '3322'
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
    merchant_entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
    merchant_name: "McDonald's",
    name: "McDonald's",
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_FAST_FOOD',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'NXNyzoqz6bhgMlZdenvNcKJE3DbaxxTyL9Vl8',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'mcdonalds.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 4.33,
    authorized_date: '2023-03-28',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Coffee Shop'],
    category_id: '13005043',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
        logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
        name: 'Starbucks',
        phone_number: null,
        type: 'merchant',
        website: 'starbucks.com'
      }
    ],
    date: '2023-03-28',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
    merchant_entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
    merchant_name: 'Starbucks',
    name: 'Starbucks',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_COFFEE',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'PVWA38r36XsrZ9vRoeBNHqDRZj4awwuoEgKx5',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'starbucks.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 89.4,
    authorized_date: '2023-03-26',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants'],
    category_id: '13005000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'LOW',
        entity_id: null,
        logo_url: null,
        name: 'FUN',
        phone_number: null,
        type: 'merchant',
        website: null
      }
    ],
    date: '2023-03-27',
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
      store_number: null
    },
    logo_url: null,
    merchant_entity_id: null,
    merchant_name: 'FUN',
    name: 'SparkFun',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'LOW',
      detailed: 'ENTERTAINMENT_SPORTING_EVENTS_AMUSEMENT_PARKS_AND_MUSEUMS',
      primary: 'ENTERTAINMENT'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png',
    transaction_code: null,
    transaction_id: 'jz56yjpyNXH3kpBWGdjVuB4Z9PvebbC6oDQNW',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: null
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 6.33,
    authorized_date: '2023-03-13',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2023-03-14',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 072515 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: '7kbNZ6PZm3uNb9mJl5aGCoZmWRdAppid4ewEk',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 5.4,
    authorized_date: '2023-02-28',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2023-03-01',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 063015 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'enXDAd6A3QIbQvkErnx1FER7mDxbaaCrypxq4',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: -500,
    authorized_date: '2023-02-27',
    authorized_datetime: null,
    category: ['Travel', 'Airlines and Aviation Services'],
    category_id: '22001000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
        logo_url:
          'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
        name: 'United Airlines',
        phone_number: null,
        type: 'merchant',
        website: 'united.com'
      }
    ],
    date: '2023-02-27',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
    merchant_entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
    merchant_name: 'United Airlines',
    name: 'United Airlines',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRAVEL_FLIGHTS',
      primary: 'TRAVEL'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRAVEL.png',
    transaction_code: null,
    transaction_id: 'QyMAxEzx6gtGZ98V7g1NfKpvVdXlnnTwrvjNd',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'united.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 12,
    authorized_date: '2023-02-26',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Fast Food'],
    category_id: '13005032',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
        logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
        name: "McDonald's",
        phone_number: null,
        type: 'merchant',
        website: 'mcdonalds.com'
      }
    ],
    date: '2023-02-26',
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
      store_number: '3322'
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
    merchant_entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
    merchant_name: "McDonald's",
    name: "McDonald's",
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_FAST_FOOD',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'ZRMAQvbQ6DsJW9wBzE53fNerabm5AAfen4xoK',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'mcdonalds.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 4.33,
    authorized_date: '2023-02-26',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Coffee Shop'],
    category_id: '13005043',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
        logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
        name: 'Starbucks',
        phone_number: null,
        type: 'merchant',
        website: 'starbucks.com'
      }
    ],
    date: '2023-02-26',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
    merchant_entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
    merchant_name: 'Starbucks',
    name: 'Starbucks',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_COFFEE',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'MX4Vrplr6GhjoMn87kyPH6XKzNMARRFLbqmjB',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'starbucks.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 89.4,
    authorized_date: '2023-02-24',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants'],
    category_id: '13005000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'LOW',
        entity_id: null,
        logo_url: null,
        name: 'FUN',
        phone_number: null,
        type: 'merchant',
        website: null
      }
    ],
    date: '2023-02-25',
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
      store_number: null
    },
    logo_url: null,
    merchant_entity_id: null,
    merchant_name: 'FUN',
    name: 'SparkFun',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'LOW',
      detailed: 'ENTERTAINMENT_SPORTING_EVENTS_AMUSEMENT_PARKS_AND_MUSEUMS',
      primary: 'ENTERTAINMENT'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png',
    transaction_code: null,
    transaction_id: '18VBNbJN53TPmJwxrlKBcDVdxBz3GGFpbBDnz',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: null
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 6.33,
    authorized_date: '2023-02-11',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2023-02-12',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 072515 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'LXawKLMK6yhR4mE7yZ3PHD6y1PqrMMFkgw3Ax',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 5.4,
    authorized_date: '2023-01-29',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2023-01-30',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 063015 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'p4DmK1gKZpH96Wr5GbnQcQJE6mDpzzSp9aX7r',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: -500,
    authorized_date: '2023-01-28',
    authorized_datetime: null,
    category: ['Travel', 'Airlines and Aviation Services'],
    category_id: '22001000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
        logo_url:
          'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
        name: 'United Airlines',
        phone_number: null,
        type: 'merchant',
        website: 'united.com'
      }
    ],
    date: '2023-01-28',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
    merchant_entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
    merchant_name: 'United Airlines',
    name: 'United Airlines',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRAVEL_FLIGHTS',
      primary: 'TRAVEL'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRAVEL.png',
    transaction_code: null,
    transaction_id: 'oaDoqMbqQNsJD6KNjLdVf4zk51wXrrto4EvJ9',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'united.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 12,
    authorized_date: '2023-01-27',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Fast Food'],
    category_id: '13005032',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
        logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
        name: "McDonald's",
        phone_number: null,
        type: 'merchant',
        website: 'mcdonalds.com'
      }
    ],
    date: '2023-01-27',
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
      store_number: '3322'
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
    merchant_entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
    merchant_name: "McDonald's",
    name: "McDonald's",
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_FAST_FOOD',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'gqX6n4pndZt1rPKoBGlpfl54P6gAbbuEjWyeB',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'mcdonalds.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 4.33,
    authorized_date: '2023-01-27',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Coffee Shop'],
    category_id: '13005043',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
        logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
        name: 'Starbucks',
        phone_number: null,
        type: 'merchant',
        website: 'starbucks.com'
      }
    ],
    date: '2023-01-27',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
    merchant_entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
    merchant_name: 'Starbucks',
    name: 'Starbucks',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_COFFEE',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: '8XmPMl6MAVhQo8ADvZjmtRzqAW4reeFWvqNPB',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'starbucks.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 89.4,
    authorized_date: '2023-01-25',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants'],
    category_id: '13005000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'LOW',
        entity_id: null,
        logo_url: null,
        name: 'FUN',
        phone_number: null,
        type: 'merchant',
        website: null
      }
    ],
    date: '2023-01-26',
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
      store_number: null
    },
    logo_url: null,
    merchant_entity_id: null,
    merchant_name: 'FUN',
    name: 'SparkFun',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'LOW',
      detailed: 'GENERAL_MERCHANDISE_OTHER_GENERAL_MERCHANDISE',
      primary: 'GENERAL_MERCHANDISE'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_GENERAL_MERCHANDISE.png',
    transaction_code: null,
    transaction_id: 'EXKWmj7mbEhZQm86bJdzTKoxre8JwwT4Zb6aM',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: null
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 6.33,
    authorized_date: '2023-01-12',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2023-01-13',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 072515 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'WnMAjmJjVgIeqaWpBJlrup8M35kEddt6ogBdN',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 5.4,
    authorized_date: '2022-12-30',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2022-12-31',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 063015 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'AXVWAa1A6bhgX3eByELqc1DN76vBEEH9RzBbR',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: -500,
    authorized_date: '2022-12-29',
    authorized_datetime: null,
    category: ['Travel', 'Airlines and Aviation Services'],
    category_id: '22001000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
        logo_url:
          'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
        name: 'United Airlines',
        phone_number: null,
        type: 'merchant',
        website: 'united.com'
      }
    ],
    date: '2022-12-29',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
    merchant_entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
    merchant_name: 'United Airlines',
    name: 'United Airlines',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRAVEL_FLIGHTS',
      primary: 'TRAVEL'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRAVEL.png',
    transaction_code: null,
    transaction_id: 'GXz69ew9ABhkbPEAXayotN45Pmbgqqf6JkZVW',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'united.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 12,
    authorized_date: '2022-12-28',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Fast Food'],
    category_id: '13005032',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
        logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
        name: "McDonald's",
        phone_number: null,
        type: 'merchant',
        website: 'mcdonalds.com'
      }
    ],
    date: '2022-12-28',
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
      store_number: '3322'
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
    merchant_entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
    merchant_name: "McDonald's",
    name: "McDonald's",
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_FAST_FOOD',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'ndD9lZ4le1IBRDqpPWN3Ta1KEyxmDDhAPvJa6',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'mcdonalds.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 4.33,
    authorized_date: '2022-12-28',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Coffee Shop'],
    category_id: '13005043',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
        logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
        name: 'Starbucks',
        phone_number: null,
        type: 'merchant',
        website: 'starbucks.com'
      }
    ],
    date: '2022-12-28',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
    merchant_entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
    merchant_name: 'Starbucks',
    name: 'Starbucks',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_COFFEE',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'bnXokBpkrQIMjegqlWmxiqRNK8rnVVumg8BRm',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'starbucks.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 89.4,
    authorized_date: '2022-12-26',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants'],
    category_id: '13005000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'LOW',
        entity_id: null,
        logo_url: null,
        name: 'FUN',
        phone_number: null,
        type: 'merchant',
        website: null
      }
    ],
    date: '2022-12-27',
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
      store_number: null
    },
    logo_url: null,
    merchant_entity_id: null,
    merchant_name: 'FUN',
    name: 'SparkFun',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'LOW',
      detailed: 'ENTERTAINMENT_SPORTING_EVENTS_AMUSEMENT_PARKS_AND_MUSEUMS',
      primary: 'ENTERTAINMENT'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png',
    transaction_code: null,
    transaction_id: 'mxDwRQJR7ZS5AMlWNVmQcdLMNbv9VVtgR6rG4',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: null
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 6.33,
    authorized_date: '2022-12-13',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2022-12-14',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 072515 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'y1KRNGdNyzFZ1ymKGWVxTyMbdEDlWWC4kxgJW',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 5.4,
    authorized_date: '2022-11-30',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2022-12-01',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 063015 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: '9X7j1qk1DNhE9yJKkR6jFWZ5LbElddC4zjK7E',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: -500,
    authorized_date: '2022-11-29',
    authorized_datetime: null,
    category: ['Travel', 'Airlines and Aviation Services'],
    category_id: '22001000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
        logo_url:
          'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
        name: 'United Airlines',
        phone_number: null,
        type: 'merchant',
        website: 'united.com'
      }
    ],
    date: '2022-11-29',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
    merchant_entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
    merchant_name: 'United Airlines',
    name: 'United Airlines',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRAVEL_FLIGHTS',
      primary: 'TRAVEL'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRAVEL.png',
    transaction_code: null,
    transaction_id: 'vQDJdEBdy9FDnpbWmAazF6onx1ZaeeFqarwLl',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'united.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 12,
    authorized_date: '2022-11-28',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Fast Food'],
    category_id: '13005032',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
        logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
        name: "McDonald's",
        phone_number: null,
        type: 'merchant',
        website: 'mcdonalds.com'
      }
    ],
    date: '2022-11-28',
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
      store_number: '3322'
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
    merchant_entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
    merchant_name: "McDonald's",
    name: "McDonald's",
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_FAST_FOOD',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'RnMAdWBd6XIGwzqXB8WbfXwnNyoJggta78Z6w',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'mcdonalds.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 4.33,
    authorized_date: '2022-11-28',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Coffee Shop'],
    category_id: '13005043',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
        logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
        name: 'Starbucks',
        phone_number: null,
        type: 'merchant',
        website: 'starbucks.com'
      }
    ],
    date: '2022-11-28',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
    merchant_entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
    merchant_name: 'Starbucks',
    name: 'Starbucks',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_COFFEE',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: '6D64QRXQ5NhynkDgeXVjupyvWad8ZZt8j4zEz',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'starbucks.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 89.4,
    authorized_date: '2022-11-26',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants'],
    category_id: '13005000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'LOW',
        entity_id: null,
        logo_url: null,
        name: 'FUN',
        phone_number: null,
        type: 'merchant',
        website: null
      }
    ],
    date: '2022-11-27',
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
      store_number: null
    },
    logo_url: null,
    merchant_entity_id: null,
    merchant_name: 'FUN',
    name: 'SparkFun',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'LOW',
      detailed: 'ENTERTAINMENT_SPORTING_EVENTS_AMUSEMENT_PARKS_AND_MUSEUMS',
      primary: 'ENTERTAINMENT'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png',
    transaction_code: null,
    transaction_id: 'XJGR7yo76EIKR4xojVeXfnqk8mEBppFbpGD7J',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: null
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 6.33,
    authorized_date: '2022-11-13',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2022-11-14',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 072515 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'DXqGbPob6jha3mJGDXk8FnjQgmRNKKF3mbZAG',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 5.4,
    authorized_date: '2022-10-31',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2022-11-01',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 063015 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'VJLmPbpP6GIN7d8rLwJKCxJjQ6vB77t9bzDjA',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: -500,
    authorized_date: '2022-10-30',
    authorized_datetime: null,
    category: ['Travel', 'Airlines and Aviation Services'],
    category_id: '22001000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
        logo_url:
          'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
        name: 'United Airlines',
        phone_number: null,
        type: 'merchant',
        website: 'united.com'
      }
    ],
    date: '2022-10-30',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
    merchant_entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
    merchant_name: 'United Airlines',
    name: 'United Airlines',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRAVEL_FLIGHTS',
      primary: 'TRAVEL'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRAVEL.png',
    transaction_code: null,
    transaction_id: 'wZl1aW3aw9T6wEAqpxPWCePq41AjXXTPAJQ4D',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'united.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 12,
    authorized_date: '2022-10-29',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Fast Food'],
    category_id: '13005032',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
        logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
        name: "McDonald's",
        phone_number: null,
        type: 'merchant',
        website: 'mcdonalds.com'
      }
    ],
    date: '2022-10-29',
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
      store_number: '3322'
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
    merchant_entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
    merchant_name: "McDonald's",
    name: "McDonald's",
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_FAST_FOOD',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: '58baev7eRGT15bpGwJoafLZNoa4Rxxt5z96aa',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'mcdonalds.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 4.33,
    authorized_date: '2022-10-29',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Coffee Shop'],
    category_id: '13005043',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
        logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
        name: 'Starbucks',
        phone_number: null,
        type: 'merchant',
        website: 'starbucks.com'
      }
    ],
    date: '2022-10-29',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
    merchant_entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
    merchant_name: 'Starbucks',
    name: 'Starbucks',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_COFFEE',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'JXxWlMkl6RhREeqJd8vVHWXMDVEdxxCBpmnlV',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'starbucks.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 89.4,
    authorized_date: '2022-10-27',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants'],
    category_id: '13005000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'LOW',
        entity_id: null,
        logo_url: null,
        name: 'FUN',
        phone_number: null,
        type: 'merchant',
        website: null
      }
    ],
    date: '2022-10-28',
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
      store_number: null
    },
    logo_url: null,
    merchant_entity_id: null,
    merchant_name: 'FUN',
    name: 'SparkFun',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'LOW',
      detailed: 'GENERAL_MERCHANDISE_OTHER_GENERAL_MERCHANDISE',
      primary: 'GENERAL_MERCHANDISE'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_GENERAL_MERCHANDISE.png',
    transaction_code: null,
    transaction_id: 'GXz69ew9ABhkbPEAXayotN45Pmbgqqf6JkZVD',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: null
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 6.33,
    authorized_date: '2022-10-14',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2022-10-15',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 072515 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'ndD9lZ4le1IBRDqpPWN3Ta1KEyxmDDhAPvJax',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 5.4,
    authorized_date: '2022-10-01',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2022-10-02',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 063015 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'bnXokBpkrQIMjegqlWmxiqRNK8rnVVumg8BMW',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: -500,
    authorized_date: '2022-09-30',
    authorized_datetime: null,
    category: ['Travel', 'Airlines and Aviation Services'],
    category_id: '22001000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
        logo_url:
          'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
        name: 'United Airlines',
        phone_number: null,
        type: 'merchant',
        website: 'united.com'
      }
    ],
    date: '2022-09-30',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
    merchant_entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
    merchant_name: 'United Airlines',
    name: 'United Airlines',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRAVEL_FLIGHTS',
      primary: 'TRAVEL'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRAVEL.png',
    transaction_code: null,
    transaction_id: 'mxDwRQJR7ZS5AMlWNVmQcdLMNbv9VVtgR6rVx',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'united.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 12,
    authorized_date: '2022-09-29',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Fast Food'],
    category_id: '13005032',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
        logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
        name: "McDonald's",
        phone_number: null,
        type: 'merchant',
        website: 'mcdonalds.com'
      }
    ],
    date: '2022-09-29',
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
      store_number: '3322'
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
    merchant_entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
    merchant_name: "McDonald's",
    name: "McDonald's",
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_FAST_FOOD',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'y1KRNGdNyzFZ1ymKGWVxTyMbdEDlWWC4kxg7x',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'mcdonalds.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 4.33,
    authorized_date: '2022-09-29',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Coffee Shop'],
    category_id: '13005043',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
        logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
        name: 'Starbucks',
        phone_number: null,
        type: 'merchant',
        website: 'starbucks.com'
      }
    ],
    date: '2022-09-29',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
    merchant_entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
    merchant_name: 'Starbucks',
    name: 'Starbucks',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_COFFEE',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: '9X7j1qk1DNhE9yJKkR6jFWZ5LbElddC4zjKX5',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'starbucks.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 89.4,
    authorized_date: '2022-09-27',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants'],
    category_id: '13005000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'LOW',
        entity_id: null,
        logo_url: null,
        name: 'FUN',
        phone_number: null,
        type: 'merchant',
        website: null
      }
    ],
    date: '2022-09-28',
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
      store_number: null
    },
    logo_url: null,
    merchant_entity_id: null,
    merchant_name: 'FUN',
    name: 'SparkFun',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'LOW',
      detailed: 'ENTERTAINMENT_SPORTING_EVENTS_AMUSEMENT_PARKS_AND_MUSEUMS',
      primary: 'ENTERTAINMENT'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png',
    transaction_code: null,
    transaction_id: 'vQDJdEBdy9FDnpbWmAazF6onx1ZaeeFqarw9B',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: null
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 6.33,
    authorized_date: '2022-09-14',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2022-09-15',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 072515 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: 'RnMAdWBd6XIGwzqXB8WbfXwnNyoJggta78Zm3',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 5.4,
    authorized_date: '2022-09-01',
    authorized_datetime: null,
    category: ['Travel', 'Taxi'],
    category_id: '22016000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        name: 'Uber',
        phone_number: null,
        type: 'merchant',
        website: 'uber.com'
      }
    ],
    date: '2022-09-02',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
    merchant_entity_id: 'eyg8o776k0QmNgVpAmaQj4WgzW9Qzo6O51gdd',
    merchant_name: 'Uber',
    name: 'Uber 063015 SF**POOL**',
    payment_channel: 'online',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
      primary: 'TRANSPORTATION'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
    transaction_code: null,
    transaction_id: '6D64QRXQ5NhynkDgeXVjupyvWad8ZZt8j4zVX',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'uber.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: -500,
    authorized_date: '2022-08-31',
    authorized_datetime: null,
    category: ['Travel', 'Airlines and Aviation Services'],
    category_id: '22001000',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
        logo_url:
          'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
        name: 'United Airlines',
        phone_number: null,
        type: 'merchant',
        website: 'united.com'
      }
    ],
    date: '2022-08-31',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
    merchant_entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
    merchant_name: 'United Airlines',
    name: 'United Airlines',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'TRAVEL_FLIGHTS',
      primary: 'TRAVEL'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_TRAVEL.png',
    transaction_code: null,
    transaction_id: 'XJGR7yo76EIKR4xojVeXfnqk8mEBppFbpGDwE',
    transaction_type: 'special',
    unofficial_currency_code: null,
    website: 'united.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 12,
    authorized_date: '2022-08-30',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Fast Food'],
    category_id: '13005032',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
        logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
        name: "McDonald's",
        phone_number: null,
        type: 'merchant',
        website: 'mcdonalds.com'
      }
    ],
    date: '2022-08-30',
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
      store_number: '3322'
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
    merchant_entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
    merchant_name: "McDonald's",
    name: "McDonald's",
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_FAST_FOOD',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'DXqGbPob6jha3mJGDXk8FnjQgmRNKKF3mbZKJ',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'mcdonalds.com'
  },
  {
    account_id: 'oaDoqMbqQNsJD6KNjLdVf4zeZwP9N9Cpbk98v',
    account_owner: null,
    amount: 4.33,
    authorized_date: '2022-08-30',
    authorized_datetime: null,
    category: ['Food and Drink', 'Restaurants', 'Coffee Shop'],
    category_id: '13005043',
    check_number: null,
    counterparties: [
      {
        confidence_level: 'VERY_HIGH',
        entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
        logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
        name: 'Starbucks',
        phone_number: null,
        type: 'merchant',
        website: 'starbucks.com'
      }
    ],
    date: '2022-08-30',
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
      store_number: null
    },
    logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
    merchant_entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
    merchant_name: 'Starbucks',
    name: 'Starbucks',
    payment_channel: 'in store',
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
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: 'VERY_HIGH',
      detailed: 'FOOD_AND_DRINK_COFFEE',
      primary: 'FOOD_AND_DRINK'
    },
    personal_finance_category_icon_url:
      'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
    transaction_code: null,
    transaction_id: 'VJLmPbpP6GIN7d8rLwJKCxJjQ6vB77t9bzD3Z',
    transaction_type: 'place',
    unofficial_currency_code: null,
    website: 'starbucks.com'
  }
];

module.exports = {
  TRANSACTIONS_SAMPLE,
  TRANSACTIONS_FULL,
  SAVINGS
};
