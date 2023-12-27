const Header = ({ children }) => {
  console.log('render - Header');
  return (
    <header className='sticky top-0 z-10 bg-white py-2.5 text-center shadow-lg'>
      {children}
    </header>
  );
};

export default Header;
