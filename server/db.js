const { DEMO_MODE } = require('./utils/constants');
const mongoose = require('mongoose');

module.exports = () => {
  console.log('DEMO_MODE:', DEMO_MODE ? 'ON' : 'OFF');
  if (!DEMO_MODE) {
    mongoose
      .connect(process.env.MONGODB_CLUSTER_URL)
      .then(() => console.log('Connected to MongoDB...'))
      .catch(() => console.error('Could not connect to MongoDB...'));
  } else {
    console.log('Not connected to MongoDB, mock data will be used instead...');
  }
};
