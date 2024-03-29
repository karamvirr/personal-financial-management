const {
  getRandomNumber,
  getLastFourteenMonths,
  getRandomDayOfMonth,
  mockTransaction
} = require('../../helpers');

const plaidTransactionData = () => {
  const data = [];
  const months = getLastFourteenMonths();
  months.forEach((month, index) => {
    // month format: YYYY-MM
    const transactions = [
      {
        amount: getRandomNumber(5, 10),
        category: ['Travel', 'Taxi'],
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
        date: `${month}-${getRandomDayOfMonth()}`,
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        merchant_name: 'Uber',
        name: 'Uber 072515 SF**POOL**',
        payment_channel: 'online',
        personal_finance_category: {
          confidence_level: 'VERY_HIGH',
          detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
          primary: 'TRANSPORTATION'
        },
        personal_finance_category_icon_url:
          'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
        transaction_type: 'special'
      },
      {
        amount: getRandomNumber(75, 100),
        category: ['Food and Drink', 'Restaurants'],
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
        date: `${month}-${getRandomDayOfMonth()}`,
        logo_url: null,
        merchant_name: 'FUN',
        name: 'SparkFun',
        payment_channel: 'in store',
        personal_finance_category: {
          confidence_level: 'LOW',
          detailed: 'GENERAL_MERCHANDISE_OTHER_GENERAL_MERCHANDISE',
          primary: 'GENERAL_MERCHANDISE'
        },
        logo_url:
          'https://media.glassdoor.com/sql/373813/sparkfun-squarelogo-1431953977111.png',
        personal_finance_category_icon_url:
          'https://plaid-category-icons.plaid.com/PFC_GENERAL_MERCHANDISE.png',
        transaction_type: 'place'
      },
      {
        amount: getRandomNumber(5, 15),
        category: ['Food and Drink', 'Restaurants', 'Coffee Shop'],
        counterparties: [
          {
            confidence_level: 'VERY_HIGH',
            entity_id: 'NZAJQ5wYdo1W1p39X5q5gpb15OMe39pj4pJBb',
            logo_url:
              'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
            name: 'Starbucks',
            phone_number: null,
            type: 'merchant',
            website: 'starbucks.com'
          }
        ],
        date: `${month}-${getRandomDayOfMonth()}`,
        logo_url: 'https://plaid-merchant-logos.plaid.com/starbucks_956.png',
        merchant_name: 'Starbucks',
        name: 'Starbucks',
        payment_channel: 'in store',
        personal_finance_category: {
          confidence_level: 'VERY_HIGH',
          detailed: 'FOOD_AND_DRINK_COFFEE',
          primary: 'FOOD_AND_DRINK'
        },
        personal_finance_category_icon_url:
          'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
        transaction_type: 'place'
      },
      {
        amount: getRandomNumber(10, 15),
        category: ['Food and Drink', 'Restaurants', 'Fast Food'],
        counterparties: [
          {
            confidence_level: 'VERY_HIGH',
            entity_id: 'vzWXDWBjB06j5BJoD3Jo84OJZg7JJzmqOZA22',
            logo_url:
              'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
            name: "McDonald's",
            phone_number: null,
            type: 'merchant',
            website: 'mcdonalds.com'
          }
        ],
        date: `${month}-${getRandomDayOfMonth()}`,
        logo_url: 'https://plaid-merchant-logos.plaid.com/mcdonalds_619.png',
        merchant_name: "McDonald's",
        name: "McDonald's",
        payment_channel: 'in store',
        personal_finance_category: {
          confidence_level: 'VERY_HIGH',
          detailed: 'FOOD_AND_DRINK_FAST_FOOD',
          primary: 'FOOD_AND_DRINK'
        },
        personal_finance_category_icon_url:
          'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
        transaction_type: 'place'
      },
      {
        amount: getRandomNumber(5, 15),
        category: ['Travel', 'Taxi'],
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
        date: `${month}-${getRandomDayOfMonth()}`,
        logo_url: 'https://plaid-merchant-logos.plaid.com/uber_1060.png',
        merchant_name: 'Uber',
        name: 'Uber 063015 SF**POOL**',
        payment_channel: 'online',
        personal_finance_category: {
          confidence_level: 'VERY_HIGH',
          detailed: 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
          primary: 'TRANSPORTATION'
        },
        personal_finance_category_icon_url:
          'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png',
        transaction_type: 'special'
      }
    ];

    if (index === 0) {
      transactions.push({
        amount: getRandomNumber(100, 200),
        category: ['Travel', 'Airlines and Aviation Services'],
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
        date: `${month}-${getRandomDayOfMonth()}`,
        logo_url:
          'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
        merchant_name: 'United Airlines',
        name: 'United Airlines',
        payment_channel: 'in store',
        personal_finance_category: {
          confidence_level: 'VERY_HIGH',
          detailed: 'TRAVEL_FLIGHTS',
          primary: 'TRAVEL'
        },
        personal_finance_category_icon_url:
          'https://plaid-category-icons.plaid.com/PFC_TRAVEL.png',
        transaction_type: 'special'
      });
    }

    transactions.forEach(transaction => {
      data.push(mockTransaction(transaction, month));
    });
  });

  return data;
};

module.exports = {
  plaidTransactionData
};
