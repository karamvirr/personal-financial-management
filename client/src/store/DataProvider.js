import DataContext from './data-context';
import { toast } from 'react-toastify';

const DataProvider = props => {
  const ctx = {
    showToast: (message, type = 'success') => {
      toast[type](message);
    }
  };

  return (
    <DataContext.Provider value={ctx}>{props.children}</DataContext.Provider>
  );
};

export default DataProvider;
