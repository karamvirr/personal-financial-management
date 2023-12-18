import { Outlet, NavLink } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/account/accounts'
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'text-purple-900' : ''
              }>
              Accounts
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/account/transactions'
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'text-purple-900' : ''
              }>
              Transactions
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
