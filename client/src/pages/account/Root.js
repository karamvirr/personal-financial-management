import { Outlet, NavLink } from 'react-router-dom';
import { GoStack } from 'react-icons/go';
import { GrTransaction } from 'react-icons/gr';

// TODO: create a separate file for this component
const SideBarNavItem = ({ label, path, icon }) => {
  return (
    <NavLink to={path}>
      {({ isActive }) => (
        <li
          className={`flex flex-row items-center gap-3.5 px-5 py-2.5 text-sm
            font-light text-white subpixel-antialiased transition-all duration-200 ${
              isActive ? 'bg-zinc-900 text-white' : 'text-zinc-300'
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
    <aside className='left-0 h-screen w-fit bg-zinc-700'>
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
    <div className='flex'>
      <SideBar />
      <main className='w-full bg-slate-50'>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
