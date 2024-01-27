import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom';
import Accounts from './pages/Accounts';
import CashFlow from './pages/CashFlow';
import Transactions from './pages/Transactions';
import Overview from './pages/Overview';
import Root from './pages/Root';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataProvider from './store/DataProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Navigate to='/accounts' replace />,
    children: [
      {
        index: true,
        element: <Navigate to='/accounts' replace />
      },
      { path: 'accounts', element: <Accounts /> },
      { path: 'cash-flow', element: <CashFlow /> },
      { path: 'transactions', element: <Transactions /> },
      { path: 'overview', element: <Overview /> }
    ]
  }
]);

const App = () => {
  return (
    <DataProvider>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <RouterProvider router={router} />
    </DataProvider>
  );
};

export default App;
