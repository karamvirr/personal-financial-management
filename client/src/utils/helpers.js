const formatCurrency = value => {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
};

const formatPercent = value => {
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
  const split = date.split('-');
  const monthInt = +split[1];
  const year = +split[0];
  const day = +split[2];

  const dateObj = new Date(year, monthInt - 1, day);
  const dayOfWeek = dateObj.toLocaleString('default', { weekday: 'long' });
  const month = dateObj.toLocaleString('default', { month: 'long' });

  return `${dayOfWeek}, ${month} ${day}, ${year}`;
};

// MM/DD/YYYY HH:MM:SS format (12 hour clock)
const formatTime = timestamp => {
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

const pluralize = (string, count) => {
  return count === 1 ? string : string + 's';
};

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
    months.add(month);
  });
  return Array.from(months).sort((a, b) => {
    return new Date(b).getTime() - new Date(a).getTime();
  });
};

const getTransactionCategories = transactions => {
  const categoriesSet = new Set([]);
  transactions.map(transaction => {
    categoriesSet.add(humanize(transaction.personal_finance_category.primary));
  });

  return Array.from(categoriesSet).sort();
};

const getColor = value => {
  if (value < 0) {
    return 'text-rose-500';
  }
  if (value > 0) {
    return 'text-emerald-500';
  }
  return '';
};

const getTransactionName = transaction => {
  return humanize(transaction.merchant_name || transaction.name);
};

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
