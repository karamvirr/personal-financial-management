const { useState, useEffect } = require('react');

const DropdownMenu = props => {
  const [selectedOption, setSelectedOption] = useState(props.items[0]);

  if (!props.excludeAllOption && !props.items.includes('All')) {
    props.items.unshift('All');
  }

  useEffect(() => {
    // invoke the onchange handler on initial render to broadcast the default
    // selected option
    onChangeHandler({ target: { value: selectedOption } });
  }, []);

  const onChangeHandler = event => {
    const value = event.target.value;

    setSelectedOption(value);
    props.onSelect(value);
  };

  return (
    <div className={props.className}>
      <label
        htmlFor='months'
        className='mb-2 block text-sm font-medium text-gray-800'>
        {props.label}
      </label>
      <select
        name='months'
        id='months'
        value={selectedOption}
        onChange={onChangeHandler}
        className='cursor-pointer rounded-lg border
          border-gray-300 bg-gray-50 py-2.5 pl-2.5 pr-5 text-sm
          text-gray-800 focus:border-blue-500 focus:ring-blue-500'>
        {props.items.map(item => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
