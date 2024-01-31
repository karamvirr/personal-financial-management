const {
  formatCurrency,
  formatPercent,
  formatDate,
  formatTransactionDate,
  formatTime,
  pluralize,
  randomId,
  humanize,
  getTransactionMonths,
  getTransactionCategories,
  getColor,
  getTransactionName,
  isObjectEmpty
} = require('../src/utils/helpers');

describe('formatCurrency', () => {
  it('returns a string in currency format', () => {
    expect(formatCurrency(1250.75)).toBe('$1,250.75');
    expect(formatCurrency(50)).toBe('$50.00');
    expect(formatCurrency(0)).toBe('$0.00');
    expect(formatCurrency(-1000)).toBe('-$1,000.00');

    // handles input that can cast to a number
    expect(formatCurrency('1250.75')).toBe('$1,250.75');
    expect(formatCurrency('50')).toBe('$50.00');
    expect(formatCurrency('0')).toBe('$0.00');
    expect(formatCurrency('-1000')).toBe('-$1,000.00');
  });

  it('returns null for invalid input', () => {
    expect(formatCurrency('abc')).toBeNull();
    expect(formatCurrency('')).toBeNull();
    expect(formatCurrency(null)).toBeNull();
    expect(formatCurrency(undefined)).toBeNull();
    expect(formatCurrency({})).toBeNull();
    expect(formatCurrency([])).toBeNull();
  });
});

describe('formatPercent', () => {
  it('returns a string in percent format', () => {
    expect(formatPercent(10)).toBe('1,000.00%');
    expect(formatPercent(3.1415)).toBe('314.15%');
    expect(formatPercent(0.5)).toBe('50.00%');
    expect(formatPercent(0.12345)).toBe('12.35%');
    expect(formatPercent(0)).toBe('0.00%');
    expect(formatPercent(-0.0001)).toBe('-0.01%');
    expect(formatPercent(-0.5)).toBe('-50.00%');
  });

  it('returns null for invalid input', () => {
    expect(formatPercent('abc')).toBeNull();
    expect(formatPercent('')).toBeNull();
    expect(formatPercent(null)).toBeNull();
    expect(formatPercent(undefined)).toBeNull();
    expect(formatPercent({})).toBeNull();
    expect(formatPercent([])).toBeNull();
  });
});

describe('formatDate', () => {
  it('returns a string in MMMM YYYY format', () => {
    expect(formatDate('2024-01')).toBe('January 2024');
    expect(formatDate('2024-12')).toBe('December 2024');
    expect(formatDate('2024-05')).toBe('May 2024');
    expect(formatDate('2023-08')).toBe('August 2023');
  });

  it('returns null for invalid input', () => {
    expect(formatDate('2024')).toBeNull();
    expect(formatDate('')).toBeNull();
    expect(formatDate(null)).toBeNull();
  });
});

describe('formatTransactionDate', () => {
  it('returns a string in DDDD, MMMM DD, YYYY format', () => {
    expect(formatTransactionDate('2024-01-01')).toBe('Monday, January 1, 2024');
    expect(formatTransactionDate('2024-12-31')).toBe(
      'Tuesday, December 31, 2024'
    );
    expect(formatTransactionDate('2024-05-15')).toBe('Wednesday, May 15, 2024');
    expect(formatTransactionDate('2023-08-10')).toBe(
      'Thursday, August 10, 2023'
    );
  });

  it('returns null for invalid input', () => {
    expect(formatTransactionDate('2024')).toBeNull();
    expect(formatTransactionDate('2024-01')).toBeNull();
    expect(formatTransactionDate('')).toBeNull();
    expect(formatTransactionDate(null)).toBeNull();
  });
});

describe('formatTime', () => {
  it('returns a string in MM/DD/YYYY HH:MM AM/PM format', () => {
    expect(formatTime(new Date('2024-8-10').getTime())).toBe(
      '8/10/2024 12:00 AM'
    );
  });

  it('returns null for invalid input', () => {
    expect(formatTime(null)).toBeNull();
    expect(formatTime(undefined)).toBeNull();
    expect(formatTime('')).toBeNull();
  });
});

describe('pluralize', () => {
  it('returns a string with an "s" appended if count is not 1', () => {
    expect(pluralize('item', 0)).toBe('items');
    expect(pluralize('item', 1)).toBe('item');
    expect(pluralize('item', 2)).toBe('items');
    expect(pluralize('item', 3)).toBe('items');
    expect(pluralize('item', -4)).toBe('items');
  });
});

describe('randomId', () => {
  it('returns a random string of length 8', () => {
    const id = randomId();
    expect(typeof id).toBe('string');
    expect(id.length).toBe(8);
  });

  it('returns a random string of specified length', () => {
    const id = randomId(4);
    expect(typeof id).toBe('string');
    expect(id.length).toBe(4);
  });
});

describe('humanize', () => {
  it('returns a humanized string', () => {
    expect(humanize('some_string_with_underscores')).toBe(
      'Some String With Underscores'
    );
    expect(humanize('FOOD_AND_DRINK')).toBe('Food and Drink');
    expect(humanize('TRAVEL_FLIGHTS')).toBe('Travel Flights');
  });

  it('returns an empty string for invalid input', () => {
    expect(humanize(null)).toBe('');
    expect(humanize(undefined)).toBe('');
  });
});

describe('getTransactionMonths', () => {
  it('returns an array of unique months in MMMM YYYY format', () => {
    const transactions = [
      { date: '2024-01-01' },
      { date: '2024-01-15' },
      { date: '2024-02-01' },
      { date: '2024-02-15' },
      { date: '2024-03-01' },
      { date: '2024-03-15' }
    ];

    expect(getTransactionMonths(transactions)).toEqual([
      'March 2024',
      'February 2024',
      'January 2024'
    ]);
  });

  it('returns an empty array for invalid input', () => {
    expect(getTransactionMonths(null)).toEqual([]);
    expect(getTransactionMonths(undefined)).toEqual([]);
    expect(getTransactionMonths('')).toEqual([]);
    expect(getTransactionMonths([])).toEqual([]);
  });
});

describe('getTransactionCategories', () => {
  it('returns an array of unique transaction categories', () => {
    const transactions = [];
    ['Food and Drink', 'Travel Flights', 'General Merchandise'].forEach(
      category => {
        transactions.push({ personal_finance_category: { primary: category } });
      }
    );

    expect(getTransactionCategories(transactions)).toEqual([
      'Food and Drink',
      'General Merchandise',
      'Travel Flights'
    ]);
  });

  it('returns an empty array for invalid input', () => {
    expect(getTransactionCategories(null)).toEqual([]);
    expect(getTransactionCategories(undefined)).toEqual([]);
    expect(getTransactionCategories('')).toEqual([]);
    expect(getTransactionCategories([])).toEqual([]);
  });
});

describe('getColor', () => {
  it('returns text-emerald-500 for positive values', () => {
    expect(getColor(100)).toBe('text-emerald-500');
    expect(getColor(0.01)).toBe('text-emerald-500');
  });

  it('returns text-rose-500 for negative values', () => {
    expect(getColor(-0.01)).toBe('text-rose-500');
    expect(getColor(-100)).toBe('text-rose-500');
  });

  it('returns black for zero', () => {
    expect(getColor(0)).toBe('');
  });
});

describe('getTransactionName', () => {
  it('returns the merchant name if available', () => {
    const transaction = { merchant_name: 'Starbucks', name: 'Coffee' };
    expect(getTransactionName(transaction)).toBe('Starbucks');
  });

  it('returns the transaction name if merchant name is not available', () => {
    const transaction = { name: 'Coffee' };
    expect(getTransactionName(transaction)).toBe('Coffee');
  });

  it('returns an empty string for invalid input', () => {
    expect(getTransactionName(null)).toBe('');
    expect(getTransactionName(undefined)).toBe('');
  });
});

describe('isObjectEmpty', () => {
  it('returns true for an empty object', () => {
    expect(isObjectEmpty({})).toBe(true);
  });

  it('returns false for a non-empty object', () => {
    expect(isObjectEmpty({ key: 'value' })).toBe(false);
  });
});
