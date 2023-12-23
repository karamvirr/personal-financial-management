import { NavLink } from 'react-router-dom';

const SideBarNavItem = ({ label, path, icon }) => {
  return (
    <NavLink to={path}>
      {({ isActive }) => (
        <li
          className={`flex flex-row items-center gap-3.5 border-l-4 px-10 py-2.5 text-sm
            font-light text-white subpixel-antialiased transition-all duration-200 ${
              isActive
                ? 'border-gray-300 bg-zinc-900 text-white'
                : 'border-zinc-700 text-gray-300'
            }`}>
          {icon}
          {label}
        </li>
      )}
    </NavLink>
  );
};

export default SideBarNavItem;
