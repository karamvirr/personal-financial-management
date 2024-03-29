const { DEMO_ACCOUNT_LINKS } = require('../../constants');
const { mockAccountLink } = require('../../helpers');

const getAccountLinks = () => {
  return DEMO_ACCOUNT_LINKS.map(mockAccountLink);
};

module.exports = {
  getAccountLinks
};
