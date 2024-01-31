// @param value: string to be checked if it is a number
// @return boolean: true if the value is a number, false otherwise
const isANumber = value => {
  const regex = /^[-+]?\d+(\.\d+)?$/;

  return regex.test(value);
};

// @param value: number to be formatted as currency
// @return string in currency format (USD)
const formatCurrency = value => {
  if (!isANumber(value)) {
    return null;
  }

  return (+value).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
};

// @param value: number to be formatted as a percentage
// @return string in percentage format
const formatPercent = value => {
  if (!isANumber(value)) {
    return null;
  }

  return value.toLocaleString('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

// formats the given date string to MMMM YYYY format
// example: 2024-01 => January 2024
//
// @return string in MMMM YYYY format
const formatDate = dateStr => {
  if (!dateStr || dateStr.split('-').length !== 2) {
    return null;
  }

  const split = dateStr.split('-');
  const monthInt = +split[1];
  const year = split[0];
  const month = new Date(year, monthInt - 1).toLocaleString('default', {
    month: 'long'
  });
  return `${month} ${year}`;
};

// @param date: string in format YYYY-MM-DD
// @return string in format DDDD, MMMM DD, YYYY
const formatTransactionDate = date => {
  if (!date || date.split('-').length !== 3) {
    return null;
  }

  const split = date.split('-');
  const monthInt = +split[1];
  const year = +split[0];
  const day = +split[2];

  const dateObj = new Date(year, monthInt - 1, day);
  const dayOfWeek = dateObj.toLocaleString('default', { weekday: 'long' });
  const month = dateObj.toLocaleString('default', { month: 'long' });

  return `${dayOfWeek}, ${month} ${day}, ${year}`;
};

// @param timestamp: number in milliseconds since epoch
// @return string in MM/DD/YYYY HH:MM AM/PM format (12 hour clock)
const formatTime = timestamp => {
  if (!isANumber(timestamp)) {
    return null;
  }
  const date = new Date(timestamp);
  const hours = date.getHours();
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour = hours % 12 || 12;
  const ampm = hours < 12 ? 'AM' : 'PM';

  return `${month}/${day}/${year} ${hour}:${minutes} ${ampm}`;
};

// @param string: string to be pluralized
// @param count: number to determine if the string should be pluralized
// @return string in pluralized format
const pluralize = (string, count) => {
  return count === 1 ? string : string + 's';
};

// Generates a random string of the given length.
// If no length is provided, the default length is 8.
//
// @param length: length of the random string
// @return string in random format
const randomId = (length = 8) => {
  return Math.random()
    .toString(36)
    .slice(2, length + 2);
};

// Capitalizes the first letter of each word in the string,
// replaces underscores with spaces, strips leading or trailing
// whitespaces, and lowercases the rest of the string.
// Used to generate more human-readable strings.
//
// @param string: string to be humanized
// @return string in humanized format
const humanize = string => {
  if (!string) {
    return '';
  }

  return string
    .replaceAll('_', ' ')
    .toLowerCase()
    .trim()
    .split(' ')
    .map(word => {
      if (word === 'and') {
        return word;
      }
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(' ');
};

// @param transactionData: list of transaction objects.
// @return list of unique months in the transaction data in MMMM YYYY format.
//         the result is sorted in descending order.
const getTransactionMonths = transactionData => {
  if (!transactionData) {
    return [];
  }
  const months = new Set();
  transactionData.forEach(transaction => {
    const date = transaction.date;
    // format: YYYY-MM
    const parsedMonth = date.split('-').slice(0, 2).join('-');
    const month = formatDate(parsedMonth);

    // format: MMMM YYYY
    months.add(month);
  });
  return Array.from(months).sort((a, b) => {
    return new Date(b).getTime() - new Date(a).getTime();
  });
};

// @param transactions: list of transaction objects
// @return list of unique transaction categories, sorted alphabetically
const getTransactionCategories = transactions => {
  const categoriesSet = new Set([]);

  if (transactions) {
    transactions.map(transaction => {
      categoriesSet.add(
        humanize(transaction.personal_finance_category.primary)
      );
    });
  }

  return Array.from(categoriesSet).sort();
};

// @param value: number to determine the color
// @return string: tailwind css color class based on the value provided
const getColor = value => {
  if (value < 0) {
    return 'text-rose-500';
  }
  if (value > 0) {
    return 'text-emerald-500';
  }
  return '';
};

// @param transaction: transaction object
// @return string: transaction name or merchant name if available
const getTransactionName = transaction => {
  if (!transaction) {
    return '';
  }
  return humanize(transaction.merchant_name || transaction.name);
};

// @param obj: object to be checked if it is empty
// @return boolean: true if the object is empty, false otherwise
const isObjectEmpty = obj => {
  return Object.keys(obj).length === 0;
};

module.exports = {
  formatCurrency,
  formatPercent,
  formatDate,
  formatTransactionDate,
  formatTime,
  pluralize,
  isObjectEmpty,
  getTransactionName,
  randomId,
  getTransactionCategories,
  getTransactionMonths,
  humanize,
  getColor
};
