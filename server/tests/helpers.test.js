const {
  getRandomId,
  getRandomNumber,
  getLastFourteenMonths,
  getRandomDayOfMonth,
  getRandomElements,
  mockAccountLink,
  mockAccountBalance,
  mockTransaction
} = require('../utils/helpers');

describe('getRandomId', () => {
  it('returns a random string of length 8', () => {
    const id = getRandomId();
    expect(typeof id).toBe('string');
    expect(id.length).toBe(8);
  });

  it('returns a random string of specified length', () => {
    const id = getRandomId(4);
    expect(typeof id).toBe('string');
    expect(id.length).toBe(4);
  });
});

describe('getRandomNumber', () => {
  it('returns a number between min and max', () => {
    const min = 1;
    const max = 10;
    const num = getRandomNumber(min, max);
    expect(num).toBeGreaterThanOrEqual(min);
    expect(num).toBeLessThan(max);
  });

  it('throws an error if min is greater than max', () => {
    expect(() => getRandomNumber(10, 1)).toThrow();
  });
});

describe('getLastFourteenMonths', () => {
  it('returns an array of the last twelve months in YYYY-MM format', () => {
    const months = getLastFourteenMonths();
    expect(months.length).toBe(14);
    months.forEach(month => {
      expect(month).toMatch(/^\d{4}-\d{2}$/);
    });
  });
});

describe('getRandomDayOfMonth', () => {
  it('returns a string of length 2', () => {
    const day = getRandomDayOfMonth();
    expect(typeof day).toBe('string');
    expect(day.length).toBe(2);
  });
});

describe('getRandomElements', () => {
  it('returns an array of three random elements from the list', () => {
    const list = ['a', 'b', 'c', 'd', 'e'];
    const elements = getRandomElements(list, 3);
    expect(elements.length).toBe(3);
    elements.forEach(element => {
      expect(list).toContain(element);
    });
  });

  it('returns the list if it has less than three elements', () => {
    const list = ['a', 'b'];
    const elements = getRandomElements(list, 3);
    expect(elements).toEqual(list);
  });

  it('returns an empty array if the list is empty', () => {
    const list = [];
    const elements = getRandomElements(list, 3);
    expect(elements).toEqual(list);
  });

  it('returns an empty array if the list is null', () => {
    const list = null;
    const elements = getRandomElements(list, 3);
    expect(elements).toEqual(list);
  });
});

describe('mockAccountLink', () => {
  it('returns an account link object with empty balance and transaction data', () => {
    const name = 'plaid';
    const link = mockAccountLink(name);

    expect(link).toHaveProperty('_id');
    expect(link).toHaveProperty('name', name);
    expect(link).toHaveProperty('access_token');
    expect(link).toHaveProperty('item_id');
    expect(link).toHaveProperty('created_at');
    expect(link).toHaveProperty('balance');
    expect(link.balance).toHaveProperty('accounts');
    expect(link.balance).toHaveProperty('updated_at');
    expect(link).toHaveProperty('transactions');
    expect(link.transactions).toHaveProperty('data');
    expect(link.transactions).toHaveProperty('updated_at');
    expect(link.transactions).toHaveProperty('cursor');
  });
});

describe('mockAccountBalance', () => {
  it('returns an account balance object with random account ID and mask', () => {
    const available = 1000;
    const current = 500;
    const limit = 1500;
    const balance = {
      balances: {
        available: available,
        current: current,
        limit: limit
      },
      name: 'checking',
      official_name: 'Chase Checking',
      subtype: 'checking',
      type: 'depository'
    };
    const accountBalance = mockAccountBalance(balance);

    expect(accountBalance).toHaveProperty('account_id');
    expect(accountBalance).toHaveProperty('balances');
    expect(accountBalance.balances).toHaveProperty('iso_currency_code', 'USD');
    expect(accountBalance.balances).toHaveProperty('available', available);
    expect(accountBalance.balances).toHaveProperty('current', current);
    expect(accountBalance.balances).toHaveProperty('limit', limit);
    expect(accountBalance).toHaveProperty('mask');
  });
});

describe('mockTransaction', () => {
  it('returns a transaction object with random account ID and transaction ID', () => {
    const transaction = {
      date: '2024-02-01',
      category: ['Food and Drink', 'Restaurants'],
      name: 'Chipotle',
      amount: 25
    };
    const mock = mockTransaction(transaction);

    expect(mock).toHaveProperty('_id');
    expect(mock).toHaveProperty('location');
    expect(mock).toHaveProperty('payment_channel');
    expect(mock).toHaveProperty('transaction_type');
    expect(mock).toHaveProperty('merchant_entity_id');
    expect(mock).toHaveProperty('website');
    expect(mock).toHaveProperty('note');
    expect(mock).toHaveProperty('iso_currency_code', 'USD');
    expect(mock).toHaveProperty('category', transaction.category);
    expect(mock).toHaveProperty('amount', transaction.amount);
    expect(mock).toHaveProperty('date', transaction.date);
    expect(mock).toHaveProperty('name', transaction.name);
    expect(mock).toHaveProperty('pending', false);
  });
});
