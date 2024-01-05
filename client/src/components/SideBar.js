import { GoStack } from 'react-icons/go';
import { GrTransaction } from 'react-icons/gr';
import { PiListMagnifyingGlass } from 'react-icons/pi';
import SideBarNavItem from './SideBarNavItem';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { RiBarChart2Line } from 'react-icons/ri';

import SocialLink from './SocialLink';

const SideBar = () => {
  return (
    <aside className='sticky h-auto bg-zinc-700'>
      <nav className='flex h-screen flex-col justify-between'>
        <ul>
          <SideBarNavItem
            label='Accounts'
            path='/account/accounts'
            icon={<GoStack />}
          />
          <SideBarNavItem
            label='Cash Flow'
            path='/account/cash-flow'
            icon={<RiBarChart2Line />}
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
        <div className='flex justify-evenly p-5'>
          <SocialLink
            link='https://github.com/karamvirr'
            icon={<FaGithub />}
            name='github'
          />
          <SocialLink
            link='https://www.linkedin.com/in/rai'
            icon={<FaLinkedin />}
            name='linkedin'
          />
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
