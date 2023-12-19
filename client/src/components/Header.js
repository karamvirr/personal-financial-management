const Header = ({ label }) => {
  return (
    <header className='bg-white py-2.5 text-center shadow-md'>
      <h1 className='text-lg font-bold'>{label}</h1>
    </header>
  );
};

export default Header;
