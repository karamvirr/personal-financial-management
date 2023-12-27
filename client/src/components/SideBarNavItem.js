import { NavLink } from 'react-router-dom';

const SideBarNavItem = ({ label, path, icon }) => {
  return (
    <NavLink to={path}>
      {({ isActive }) => (
        <li
          className={`flex flex-row items-center gap-2.5 py-2.5 pl-5
            pr-10 text-sm text-gray-300 transition-all duration-200 ${
              isActive && 'bg-zinc-800 text-white'
            }`}>
          {icon}
          {label}
        </li>
      )}
    </NavLink>
  );
};

export default SideBarNavItem;
