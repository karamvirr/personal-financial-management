import SideBar from '../components/SideBar';
import { Outlet } from 'react-router-dom';

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
