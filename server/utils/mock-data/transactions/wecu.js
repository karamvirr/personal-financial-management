const {
  getRandomNumber,
  getLastFourteenMonths,
  getRandomDayOfMonth,
  getRandomElements,
  mockTransaction
} = require('../../helpers');

const wecuTransactionData = () => {
  const data = [];
  const months = getLastFourteenMonths();
  months.forEach((month, index) => {
    // month format: YYYY-MM
    // income
    ['05', '20'].forEach(day => {
      data.push(
        mockTransaction({
          date: `${month}-${day}`,
          amount: -3250,
          category: ['Transfer', 'Payroll'],
          name: 'Direct Deposit',
          payment_channel: 'other',
          transaction_type: 'special',
          personal_finance_category: {
            confidence_level: 'VERY_HIGH',
            detailed: 'INCOME_WAGES',
            primary: 'INCOME'
          },
          personal_finance_category_icon_url:
            'https://plaid-category-icons.plaid.com/PFC_INCOME.png'
        })
      );
    });

    // fund transfers
    [
      {
        date: `${month}-${getRandomDayOfMonth()}`,
        amount: getRandomNumber(250, 750),
        category: ['Transfer', 'Debit'],
        name: 'Transfer From Regular Checking To Regular Savings (12312...',
        payment_channel: 'other',
        personal_finance_category: {
          confidence_level: 'LOW',
          detailed: 'TRANSFER_OUT_ACCOUNT_TRANSFER',
          primary: 'TRANSFER_OUT'
        },
        personal_finance_category_icon_url:
          'https://plaid-category-icons.plaid.com/PFC_TRANSFER_OUT.png',
        transaction_type: 'special'
      },
      {
        date: `${month}-${getRandomDayOfMonth()}`,
        amount: -getRandomNumber(250, 750),
        category: ['Transfer', 'Credit'],
        name: 'Transfer From Regular Savings To Regular Checking (12312...',
        payment_channel: 'other',
        personal_finance_category: {
          confidence_level: 'LOW',
          detailed: 'TRANSFER_IN_ACCOUNT_TRANSFER',
          primary: 'TRANSFER_IN'
        },
        personal_finance_category_icon_url:
          'https://plaid-category-icons.plaid.com/PFC_TRANSFER_IN.png',
        transaction_type: 'special'
      }
    ].forEach(transaction => data.push(mockTransaction(transaction)));

    // subscriptions and bills
    [
      {
        date: `${month}-28`,
        amount: 16.85,
        category: ['Service', 'Subscription'],
        counterparties: [
          {
            confidence_level: 'VERY_HIGH',
            entity_id: '3LEY2bJ6W1vkoaBjgVg3qBgYVEzD6p8d1dQdY',
            logo_url: 'https://plaid-merchant-logos.plaid.com/netflix_675.png',
            name: 'Netflix',
            phone_number: null,
            type: 'merchant',
            website: 'netflix.com'
          }
        ],
        logo_url: 'https://plaid-merchant-logos.plaid.com/netflix_675.png',
        merchant_name: 'Netflix',
        name: 'Netflix',
        payment_channel: 'online',
        personal_finance_category: {
          confidence_level: 'VERY_HIGH',
          detailed: 'ENTERTAINMENT_TV_AND_MOVIES',
          primary: 'ENTERTAINMENT'
        },
        personal_finance_category_icon_url:
          'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png',
        transaction_type: 'place'
      },
      {
        date: `${month}-16`,
        amount: 55.41,
        category: ['Service', 'Telecommunication Services'],
        counterparties: [
          {
            confidence_level: 'VERY_HIGH',
            entity_id: 'ZoqgR5z4O2WvzzYD7Oma8veqwENWMrQkrayav',
            logo_url: 'https://plaid-merchant-logos.plaid.com/att_75.png',
            name: 'AT&T',
            phone_number: null,
            type: 'merchant',
            website: 'att.com'
          }
        ],
        logo_url: 'https://plaid-merchant-logos.plaid.com/att_75.png',
        name: 'AT&T',
        payment_channel: 'online',
        personal_finance_category: {
          confidence_level: 'HIGH',
          detailed: 'RENT_AND_UTILITIES_TELEPHONE',
          primary: 'RENT_AND_UTILITIES'
        },
        personal_finance_category_icon_url:
          'https://plaid-category-icons.plaid.com/PFC_RENT_AND_UTILITIES.png',
        transaction_type: 'place',
        note: 'Phone bill 📱'
      },
      {
        date: `${month}-21`,
        amount: 8.68,
        category: ['Shops', 'Music, Video and DVD'],
        counterparties: [
          {
            confidence_level: 'VERY_HIGH',
            entity_id: 'RM62dZnNYQ2jmzwWLmomA60mb5B2W2rYNZZa7',
            logo_url:
              'https://plaid-merchant-logos.plaid.com/crunchyroll_254.png',
            name: 'Crunchyroll',
            phone_number: null,
            type: 'merchant',
            website: 'crunchyroll.com'
          }
        ],
        logo_url: 'https://plaid-merchant-logos.plaid.com/crunchyroll_254.png',
        name: 'Crunchyroll',
        payment_channel: 'online',
        personal_finance_category: {
          confidence_level: 'VERY_HIGH',
          detailed: 'ENTERTAINMENT_TV_AND_MOVIES',
          primary: 'ENTERTAINMENT'
        },
        personal_finance_category_icon_url:
          'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png',
        transaction_type: 'place'
      },
      {
        date: `${month}-28`,
        amount: 10.97,
        category: ['Shops', 'Computers and Electronics', 'Video Games'],
        counterparties: [
          {
            confidence_level: 'VERY_HIGH',
            entity_id: '3oRMK5OMq55E6LeoK6JeeEQwv1Yv4e55YEVWX',
            logo_url:
              'https://plaid-merchant-logos.plaid.com/sony_playstation_927.png',
            name: 'Sony Playstation',
            phone_number: null,
            type: 'merchant',
            website: 'playstation.com'
          }
        ],
        logo_url:
          'https://plaid-merchant-logos.plaid.com/sony_playstation_927.png',
        merchant_name: 'Sony Playstation',
        name: 'Playstation Network',
        payment_channel: 'online',
        personal_finance_category: {
          confidence_level: 'VERY_HIGH',
          detailed: 'ENTERTAINMENT_VIDEO_GAMES',
          primary: 'ENTERTAINMENT'
        },
        personal_finance_category_icon_url:
          'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png',
        transaction_type: 'place',
        note: 'Playstation Plus Subscription 🎮'
      },
      {
        date: `${month}-08`,
        amount: 11.96,
        category: ['Shops', 'Subscription'],
        counterparties: [
          {
            confidence_level: 'VERY_HIGH',
            entity_id: 'zbzNyw83zkVDdrdpRo5y1yE67V7vbMWY4LNne',
            logo_url: 'https://plaid-merchant-logos.plaid.com/apple_63.png',
            name: 'Apple',
            phone_number: null,
            type: 'merchant',
            website: 'apple.com'
          }
        ],
        logo_url: 'https://plaid-merchant-logos.plaid.com/apple_63.png',
        merchant_name: 'Apple',
        name: 'Credit Card APPLE.COM/BILL',
        payment_channel: 'online',
        personal_finance_category: {
          confidence_level: 'VERY_HIGH',
          detailed: 'GENERAL_MERCHANDISE_ELECTRONICS',
          primary: 'GENERAL_MERCHANDISE'
        },
        personal_finance_category_icon_url:
          'https://plaid-category-icons.plaid.com/PFC_GENERAL_MERCHANDISE.png',
        transaction_type: 'digital',
        note: 'Apple Music Subscription 🎶'
      },
      {
        date: `${month}-28`,
        amount: getRandomNumber(50, 75),
        category: ['Payment', 'Credit Card'],
        name: 'Withdrawal Credit Card Payment',
        payment_channel: 'other',
        personal_finance_category: {
          confidence_level: 'VERY_HIGH',
          detailed: 'LOAN_PAYMENTS_CREDIT_CARD_PAYMENT',
          primary: 'LOAN_PAYMENTS'
        },
        personal_finance_category_icon_url:
          'https://plaid-category-icons.plaid.com/PFC_LOAN_PAYMENTS.png',
        transaction_type: 'special'
      },
      {
        date: `${month}-09`,
        amount: getRandomNumber(24, 26),
        category: ['Service'],
        name: 'HEROKU',
        payment_channel: 'online',
        personal_finance_category: {
          confidence_level: 'LOW',
          detailed: 'GENERAL_SERVICES_OTHER_GENERAL_SERVICES',
          primary: 'GENERAL_SERVICES'
        },
        logo_url:
          'https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/695ed7b0-' +
          '1482-4ffa-bfdf-d483c02d2e0b.png?w=100&q=50',
        personal_finance_category_icon_url:
          'https://plaid-category-icons.plaid.com/PFC_GENERAL_SERVICES.png',
        transaction_type: 'place',
        note: 'Cloud hosting for personal project'
      },
      {
        date: `${month}-10`,
        amount: getRandomNumber(50, 75),
        category: ['Payment', 'Credit Card'],
        counterparties: [
          {
            confidence_level: 'VERY_HIGH',
            entity_id: 'o2Ry34bq605MvmEed3yjqjkYWwqRQYpnkjd0O',
            logo_url: null,
            name: 'Chase Bank',
            phone_number: null,
            type: 'financial_institution',
            website: 'chase.com'
          }
        ],
        name: 'Chase Credit Card Payment - EPAY',
        payment_channel: 'other',
        personal_finance_category: {
          confidence_level: 'VERY_HIGH',
          detailed: 'LOAN_PAYMENTS_CREDIT_CARD_PAYMENT',
          primary: 'LOAN_PAYMENTS'
        },
        personal_finance_category_icon_url:
          'https://plaid-category-icons.plaid.com/PFC_LOAN_PAYMENTS.png',
        transaction_type: 'special'
      },
      {
        date: `${month}-13`,
        amount: 150,
        counterparties: [
          {
            confidence_level: 'LOW',
            entity_id: null,
            logo_url: null,
            name: 'Dept Education',
            phone_number: null,
            type: 'merchant',
            website: null
          }
        ],
        merchant_name: 'Department of Education',
        name: 'Dept Education ACH Transaction - Student Loan',
        payment_channel: 'online',
        personal_finance_category: {
          confidence_level: 'LOW',
          detailed: 'LOAN_PAYMENTS_STUDENT_LOAN',
          primary: 'LOAN_PAYMENTS'
        },
        personal_finance_category_icon_url:
          'https://plaid-category-icons.plaid.com/PFC_LOAN_PAYMENTS.png',
        transaction_type: 'place',
        note: 'Student Loan Payment 📚'
      },
      {
        date: `${month}-02`,
        amount: 0.5,
        category: ['Shops', 'Digital Purchase'],
        name: 'Google Cloud',
        payment_channel: 'online',
        personal_finance_category: {
          confidence_level: 'LOW',
          detailed: 'GENERAL_MERCHANDISE_ONLINE_MARKETPLACES',
          primary: 'GENERAL_MERCHANDISE'
        },
        personal_finance_category_icon_url:
          'https://plaid-category-icons.plaid.com/PFC_GENERAL_MERCHANDISE.png',
        transaction_type: 'digital',
        note: 'Google  ☁️'
      }
    ].forEach(transaction => data.push(mockTransaction(transaction)));

    // subscriptions billed yearly
    if ((index + 1) % 12 === 0) {
      [
        {
          date: `${month}-01`,
          amount: 139.99,
          category: ['Service', 'Subscription'],
          merchant_name: 'Amazon',
          name: 'Amazon Prime',
          payment_channel: 'online',
          personal_finance_category: {
            confidence_level: 'VERY_HIGH',
            detailed: 'ENTERTAINMENT_TV_AND_MOVIES',
            primary: 'ENTERTAINMENT'
          },
          logo_url:
            'https://banner2.cleanpng.com/20180501/abw/kisspng-amazon-com-' +
            'logo-retail-brand-publishing-chat-room-logo-5ae868f510e770.1581033615251806610693.jpg',
          personal_finance_category_icon_url:
            'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png',
          transaction_type: 'place',
          note: 'Amazon Prime Subscription 📦'
        },
        {
          date: `${month}-01`,
          amount: 59.99,
          category: ['Service'],
          counterparties: [
            {
              confidence_level: 'VERY_HIGH',
              entity_id: '1VjDAKp3JvrQ2Vb5ny1yQarZM8b10Xo26eVoJ',
              logo_url:
                'https://plaid-merchant-logos.plaid.com/google_domains_1394.png',
              name: 'Google Domains',
              phone_number: null,
              type: 'merchant',
              website: 'domains.google.com'
            },
            {
              confidence_level: 'VERY_HIGH',
              entity_id: '8LVAN69qv4bO21pNgv3VEZqByB2V0MOm87mMB',
              logo_url:
                'https://plaid-counterparty-logos.plaid.com/google_play_120.png',
              name: 'Google Play Store',
              phone_number: null,
              type: 'marketplace',
              website: 'play.google.com/store'
            }
          ],
          logo_url:
            'https://plaid-merchant-logos.plaid.com/google_domains_1394.png',
          merchant_name: 'Google Domains',
          name: 'Domains g.co/helppay#CA US',
          payment_channel: 'online',
          personal_finance_category: {
            confidence_level: 'VERY_HIGH',
            detailed: 'GENERAL_SERVICES_OTHER_GENERAL_SERVICES',
            primary: 'GENERAL_SERVICES'
          },
          personal_finance_category_icon_url:
            'https://plaid-category-icons.plaid.com/PFC_GENERAL_SERVICES.png',
          transaction_code: null,
          transaction_type: 'place',
          note: 'Domain Registration 🌐'
        }
      ].forEach(transaction => data.push(mockTransaction(transaction)));
    }

    // fast food and restaurants
    const foodData = [
      {
        date: `${month}-${getRandomDayOfMonth()}`,
        amount: getRandomNumber(10, 20),
        category: ['Food and Drink', 'Restaurants', 'Fast Food'],
        counterparties: [
          {
            confidence_level: 'VERY_HIGH',
            entity_id: 'OEkMw43LJ9yzKOJqrLJyJVBY8dyYa4LqeRLLn',
            logo_url:
              'https://plaid-merchant-logos.plaid.com/jack_in_the_box_528.png',
            name: 'Jack in the Box',
            phone_number: null,
            type: 'merchant',
            website: 'jackinthebox.com'
          }
        ],
        logo_url:
          'https://plaid-merchant-logos.plaid.com/jack_in_the_box_528.png',
        merchant_name: 'Jack in the Box',
        name: 'Jack in the Box',
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
        date: `${month}-${getRandomDayOfMonth()}`,
        amount: getRandomNumber(10, 20),
        category: ['Food and Drink', 'Restaurants'],
        counterparties: [
          {
            confidence_level: 'VERY_HIGH',
            entity_id: 'EJ70Mg1YmVNWVyXj85wvmNzjzg5madJyLYgo1',
            logo_url:
              'https://plaid-merchant-logos.plaid.com/dairy_queen_265.png',
            name: 'Dairy Queen',
            phone_number: null,
            type: 'merchant',
            website: 'dairyqueen.com'
          }
        ],
        logo_url: 'https://plaid-merchant-logos.plaid.com/dairy_queen_265.png',
        merchant_name: 'Dairy Queen',
        name: 'Dairy Queen',
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
        date: `${month}-${getRandomDayOfMonth()}`,
        amount: getRandomNumber(15, 30),
        category: ['Food and Drink', 'Restaurants', 'Fast Food'],
        counterparties: [
          {
            confidence_level: 'VERY_HIGH',
            entity_id: 'wdB3azEL75wzEk5VX1gqbLqQRyW8kVvOAARoq',
            logo_url:
              'https://plaid-merchant-logos.plaid.com/chickfila_197.png',
            name: 'Chick-fil-A',
            phone_number: null,
            type: 'merchant',
            website: 'chick-fil-a.com'
          }
        ],
        logo_url: 'https://plaid-merchant-logos.plaid.com/chickfila_197.png',
        merchant_name: 'Chick-fil-A',
        name: 'Chick-fil-A',
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
        date: `${month}-${getRandomDayOfMonth()}`,
        amount: getRandomNumber(10, 20),
        category: ['Food and Drink', 'Restaurants', 'Fast Food'],
        counterparties: [
          {
            confidence_level: 'VERY_HIGH',
            entity_id: 'WMBDMdZdmnew9EBd5qEWAdnOMYQvJDa6KvjQe',
            logo_url:
              'https://plaid-merchant-logos.plaid.com/taco_bell_989.png',
            name: 'Taco Bell',
            phone_number: null,
            type: 'merchant',
            website: 'tacobell.com'
          }
        ],
        logo_url: 'https://plaid-merchant-logos.plaid.com/taco_bell_989.png',
        merchant_name: 'Taco Bell',
        name: 'Taco Bell',
        payment_channel: 'in store',
        personal_finance_category: {
          confidence_level: 'VERY_HIGH',
          detailed: 'FOOD_AND_DRINK_FAST_FOOD',
          primary: 'FOOD_AND_DRINK'
        },
        personal_finance_category_icon_url:
          'https://plaid-category-icons.plaid.com/PFC_FOOD_AND_DRINK.png',
        transaction_type: 'place'
      }
    ];
    getRandomElements(foodData, 2).forEach(transaction => {
      data.push(mockTransaction(transaction));
    });

    // miscellaneous
    const miscData = [
      {
        date: `${month}-${getRandomDayOfMonth()}`,
        amount: getRandomNumber(50, 150),
        category: ['Shops', 'Computers and Electronics'],
        counterparties: [
          {
            confidence_level: 'VERY_HIGH',
            entity_id: 'q63vdERovbmjyQoYA6k7m6je8EzOv6ywA7Ea2',
            logo_url: 'https://plaid-merchant-logos.plaid.com/best_buy_103.png',
            name: 'Best Buy',
            phone_number: null,
            type: 'merchant',
            website: 'bestbuy.com'
          }
        ],
        logo_url: 'https://plaid-merchant-logos.plaid.com/best_buy_103.png',
        merchant_name: 'Best Buy',
        name: 'Best Buy',
        payment_channel: 'in store',
        personal_finance_category: {
          confidence_level: 'VERY_HIGH',
          detailed: 'GENERAL_MERCHANDISE_ELECTRONICS',
          primary: 'GENERAL_MERCHANDISE'
        },
        personal_finance_category_icon_url:
          'https://plaid-category-icons.plaid.com/PFC_GENERAL_MERCHANDISE.png',
        transaction_type: 'place'
      },
      {
        date: `${month}-${getRandomDayOfMonth()}`,
        amount: getRandomNumber(15, 40),
        category: ['Recreation', 'Arts and Entertainment'],
        counterparties: [
          {
            confidence_level: 'VERY_HIGH',
            entity_id: 'paA2onLyDMw0L80eR72MQ1neQoN5Oyo7OpkB1',
            logo_url:
              'https://plaid-merchant-logos.plaid.com/century_theatres_181.png',
            name: 'Century Theatres',
            phone_number: null,
            type: 'merchant',
            website: 'cinemark.com'
          }
        ],
        logo_url:
          'https://plaid-merchant-logos.plaid.com/century_theatres_181.png',
        merchant_name: 'Century Theatres',
        name: 'Century Theatres',
        payment_channel: 'in store',
        personal_finance_category: {
          confidence_level: 'HIGH',
          detailed: 'ENTERTAINMENT_TV_AND_MOVIES',
          primary: 'ENTERTAINMENT'
        },
        personal_finance_category_icon_url:
          'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png',
        transaction_type: 'place'
      },
      {
        date: `${month}-${getRandomDayOfMonth()}`,
        amount: getRandomNumber(5, 15),
        category: ['Shops', 'Pharmacies'],
        counterparties: [
          {
            confidence_level: 'VERY_HIGH',
            entity_id: 'qJ0kRK8E9vpQKom2wJJmm0Oe9bBRJEg5vAqqY',
            logo_url: 'https://plaid-merchant-logos.plaid.com/rite_aid_832.png',
            name: 'Rite Aid',
            phone_number: null,
            type: 'merchant',
            website: 'riteaid.com'
          }
        ],
        logo_url: 'https://plaid-merchant-logos.plaid.com/rite_aid_832.png',
        merchant_name: 'Rite Aid',
        name: 'Rite Aid',
        payment_channel: 'in store',
        personal_finance_category: {
          confidence_level: 'VERY_HIGH',
          detailed: 'MEDICAL_PHARMACIES_AND_SUPPLEMENTS',
          primary: 'MEDICAL'
        },
        personal_finance_category_icon_url:
          'https://plaid-category-icons.plaid.com/PFC_MEDICAL.png',
        transaction_type: 'place'
      },
      {
        date: `${month}-${getRandomDayOfMonth()}`,
        amount: getRandomNumber(5, 20),
        category: ['Shops', 'Hardware Store'],
        counterparties: [
          {
            confidence_level: 'VERY_HIGH',
            entity_id: 'kVawvV6p0R25gKw3qbp4Kq7kEzDdY5RnjV7RK',
            logo_url:
              'https://plaid-merchant-logos.plaid.com/home_depot_491.png',
            name: 'The Home Depot',
            phone_number: null,
            type: 'merchant',
            website: 'homedepot.com'
          }
        ],
        logo_url: 'https://plaid-merchant-logos.plaid.com/home_depot_491.png',
        merchant_name: 'The Home Depot',
        name: 'Home Depot',
        payment_channel: 'in store',
        personal_finance_category: {
          confidence_level: 'VERY_HIGH',
          detailed: 'HOME_IMPROVEMENT_HARDWARE',
          primary: 'HOME_IMPROVEMENT'
        },
        personal_finance_category_icon_url:
          'https://plaid-category-icons.plaid.com/PFC_HOME_IMPROVEMENT.png',
        transaction_type: 'place'
      },
      {
        date: `${month}-${getRandomDayOfMonth()}`,
        amount: getRandomNumber(100, 300),
        category: ['Shops', 'Warehouses and Wholesale Stores'],
        counterparties: [
          {
            confidence_level: 'VERY_HIGH',
            entity_id: 'pBowAoZJMM9DKR37jvNmzM4yWBBXyMzV2rM3A',
            logo_url: 'https://plaid-merchant-logos.plaid.com/costco_235.png',
            name: 'Costco',
            phone_number: null,
            type: 'merchant',
            website: 'costco.com'
          }
        ],
        logo_url: 'https://plaid-merchant-logos.plaid.com/costco_235.png',
        merchant_name: 'Costco',
        name: 'Costco',
        payment_channel: 'in store',
        personal_finance_category: {
          confidence_level: 'VERY_HIGH',
          detailed: 'GENERAL_MERCHANDISE_SUPERSTORES',
          primary: 'GENERAL_MERCHANDISE'
        },
        personal_finance_category_icon_url:
          'https://plaid-category-icons.plaid.com/PFC_GENERAL_MERCHANDISE.png',
        transaction_type: 'place'
      },
      {
        date: `${month}-${getRandomDayOfMonth()}`,
        amount: getRandomNumber(5, 20),
        category: ['Shops', 'Pharmacies'],
        counterparties: [
          {
            confidence_level: 'VERY_HIGH',
            entity_id: '1dOLXDKNJJMY67wMwVgo5K32Z7E9QRnqYV2Ba',
            logo_url:
              'https://plaid-merchant-logos.plaid.com/walgreens_1099.png',
            name: 'Walgreens',
            phone_number: null,
            type: 'merchant',
            website: 'walgreens.com'
          }
        ],
        logo_url: 'https://plaid-merchant-logos.plaid.com/walgreens_1099.png',
        merchant_name: 'Walgreens',
        name: 'Walgreens',
        payment_channel: 'in store',
        personal_finance_category: {
          confidence_level: 'VERY_HIGH',
          detailed: 'MEDICAL_PHARMACIES_AND_SUPPLEMENTS',
          primary: 'MEDICAL'
        },
        personal_finance_category_icon_url:
          'https://plaid-category-icons.plaid.com/PFC_MEDICAL.png',
        transaction_type: 'place'
      }
    ];
    getRandomElements(miscData, 3).forEach(transaction => {
      data.push(mockTransaction(transaction));
    });
  });

  return data;
};

module.exports = {
  wecuTransactionData
};
