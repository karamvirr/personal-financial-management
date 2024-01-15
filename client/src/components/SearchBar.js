import { IoIosSearch } from 'react-icons/io';

const SearchBar = ({ onSearch }) => {
  return (
    <div
      className='flex w-fit flex-row items-center gap-2
        bg-transparent p-2'>
      <IoIosSearch />
      <input
        type='text'
        placeholder='Search for items...'
        className='w-full border-b-2 border-gray-200 bg-transparent
          pb-0.5 text-sm text-gray-500 focus:outline-none'
        onChange={event => {
          onSearch(event.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
