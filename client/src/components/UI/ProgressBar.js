const ProgressBar = ({ value, color }) => {
  return (
    <div className='w-full rounded bg-slate-200'>
      <div
        className={`h-2 rounded ${color} animate-fill`}
        style={{ width: `${value}%` }}
        data-value={value}></div>
    </div>
  );
};

export default ProgressBar;
