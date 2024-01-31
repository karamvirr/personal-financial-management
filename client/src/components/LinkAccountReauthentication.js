import { MdErrorOutline } from 'react-icons/md';
import { usePlaidLink } from 'react-plaid-link';
import { useState, useEffect } from 'react';
import useAxios from '../hooks/use-axios';

const LinkAccountReauthentication = props => {
  const [linkToken, setLinkToken] = useState(null);
  const { sendRequest } = useAxios(
    '/plaid/reauthentication_link_token',
    'post'
  );

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: (publicToken, metadata) => {
      // The item's access token has not changed, so we do not need to
      // do anything here other than report success.
      props.onSuccess();
    },
    onExit: (error, metadata) => {}
  });

  useState(() => {
    sendRequest(
      response => {
        setLinkToken(response.data.link_token);
      },
      {
        access_token: props.accessToken
      }
    );
  }, []);

  return (
    <div className='my-2.5 text-sm'>
      <div className='flex flex-row items-center gap-1.5 text-red-500'>
        <MdErrorOutline className='text-lg' />
        <p className='font-bold'>Reauthentication Required</p>
      </div>

      <p className='text-gray-500'>
        The login details of this item have changed (credentials, MFA, or
        required user action) and a user login is required. Please
        reauthenticate by clicking{' '}
        <span
          className={`cursor-pointer text-blue-600 ${!ready && 'opacity-50'}`}
          onClick={() => {
            if (ready) {
              open();
            }
          }}>
          here
        </span>
        .
      </p>
    </div>
  );
};

export default LinkAccountReauthentication;
