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
  return <RouterProvider router={router} />;
};

export default App;
