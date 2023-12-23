import { GoStack } from 'react-icons/go';
import { GrTransaction } from 'react-icons/gr';
import { PiListMagnifyingGlass } from 'react-icons/pi';
import SideBarNavItem from './SideBarNavItem';

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
            label='Overview'
            path='/account/overview'
            icon={<PiListMagnifyingGlass />}
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

export default SideBar;
