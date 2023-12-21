const Header = ({ children }) => {
  console.log('render - Header');
  return (
    <header className='sticky top-0 bg-white py-2.5 text-center shadow-md'>
      {children}
    </header>
  );
};

export default Header;
