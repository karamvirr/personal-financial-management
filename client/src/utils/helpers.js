const formatCurrency = value => {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
};

// 'x (seconds, minutes, hours, days, months, years) ago' format
const formatDate = date => {
  const now = new Date();
  const then = new Date(date);
  const diff = now - then;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(seconds / 60);
  const days = Math.floor(seconds / 60);
  const months = Math.floor(seconds / 60);
  const years = Math.floor(seconds / 60);

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (days < 30) {
    return `${days} days ago`;
  } else if (months < 12) {
    return `${months} months ago`;
  }
  return `${years} years ago`;
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

const titleize = string => {
  return string
    .split(' ')
    .map(word => {
      if (word === 'and') {
        return word;
      }
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(' ');
};

const pluralize = (string, count) => {
  return count === 1 ? string : string + 's';
};

const randomId = (length = 8) => {
  return Math.random()
    .toString(36)
    .slice(2, length + 2);
};

const sanitizeCategory = category => {
  return titleize(category.replaceAll('_', ' ').toLowerCase());
};

module.exports = {
  formatCurrency,
  formatDate,
  formatTime,
  titleize,
  pluralize,
  randomId,
  sanitizeCategory
};
