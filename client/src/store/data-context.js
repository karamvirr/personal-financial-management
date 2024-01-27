import React from 'react';

const DataContext = React.createContext({
  showToast: (message, type) => {}
});

export default DataContext;
