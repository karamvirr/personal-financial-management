import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Accounts from './pages/account/Accounts';
import Transactions from './pages/account/Transactions';
import Overview from './pages/account/Overview';
import Root from './pages/account/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/account',
    element: <Root />,
    children: [
      { path: 'accounts', element: <Accounts /> },
      { path: 'transactions', element: <Transactions /> },
      { path: 'overview', element: <Overview /> }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
