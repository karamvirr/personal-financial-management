const NetworkErrorMessage = () => {
  return (
    <div className='flex h-full items-center justify-center'>
      <div className='text-center'>
        <p className='text-lg font-bold text-red-500'>
          The server is not running.
        </p>
        <p className='text-gray-600'>
          Please start the server by running{' '}
          <code className='rounded bg-gray-200 px-2 py-1 font-mono text-sm'>
            DEMO_MODE=true node ./path/to/server/index.js
          </code>{' '}
          in your terminal and then try again.
        </p>
      </div>
    </div>
  );
};

export default NetworkErrorMessage;
