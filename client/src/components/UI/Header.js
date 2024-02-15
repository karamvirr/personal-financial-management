const Header = ({ title }) => {
  return (
    <header className='sticky top-0 z-10 bg-white py-2.5 text-center shadow-lg'>
      <h1 className='text-xl font-bold'>{title}</h1>
    </header>
  );
};

export default Header;
