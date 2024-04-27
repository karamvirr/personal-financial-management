const { DEMO_MODE } = require('./utils/constants');
const mongoose = require('mongoose');

module.exports = () => {
  if (!DEMO_MODE && process.env.NODE_ENV !== 'test') {
    mongoose
      .connect(process.env.MONGODB_CLUSTER_URL)
      .then(() => console.log('Connected to MongoDB...'))
      .catch(() => console.error('Could not connect to MongoDB...'));

    mongoose.connection.on('error', error => {
      console.error('MongoDB connection error:', error);
    });
  } else {
    console.log('Not connected to MongoDB...');
  }
};
