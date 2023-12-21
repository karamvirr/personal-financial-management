import { Outlet, NavLink } from 'react-router-dom';
import { GoStack } from 'react-icons/go';
import { GrTransaction } from 'react-icons/gr';

// TODO: create a separate file for this component
const SideBarNavItem = ({ label, path, icon }) => {
  return (
    <NavLink to={path}>
      {({ isActive }) => (
        <li
          className={`flex flex-row items-center gap-3.5 px-10 py-2.5 text-sm
            font-light text-white subpixel-antialiased transition-all duration-200 ${
              isActive ? 'bg-zinc-900 text-white' : 'text-gray-300'
            }`}>
          {icon}
          {label}
        </li>
      )}
    </NavLink>
  );
};

// TODO: create a separate file for this component
const SideBar = () => {
  return (
    <aside className='sticky h-auto bg-zinc-700'>
      <nav>
        <ul>
          <SideBarNavItem
            label='Accounts'
            path='/account/accounts'
            icon={<GoStack />}
          />
          <SideBarNavItem
            label='Transactions'
            path='/account/transactions'
            icon={<GrTransaction />}
          />
        </ul>
      </nav>
    </aside>
  );
};

const Root = () => {
  return (
    <div className='flex h-screen flex-row'>
      <SideBar className='sticky bottom-0 left-0 top-0' />
      <main className='w-full overflow-y-scroll bg-slate-100'>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
