// Generates a random string of the given length.
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

module.exports = {
  getRandomId,
  getRandomNumber
};
