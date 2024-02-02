import { usePlaidLink } from 'react-plaid-link';
import useAxios from '../hooks/use-axios';
import { useEffect, useState, useContext } from 'react';
import DataContext from '../store/data-context';

// temporary link token -> temporary public token -> permanent access token
const LinkAccountButton = props => {
  const [linkToken, setLinkToken] = useState(null);

  // generate a temporary link token for the Link client component to use.
  const {
    error: generateLinkTokenError,
    sendRequest: generateLinkTokenRequest
  } = useAxios('/plaid/link_token', 'post');
  // sends public token to server and exchanges it for a permanent access token
  // and item id. (send in the public token in the body of the request).
  const { sendRequest: getAccessTokenRequest } = useAxios(
    '/plaid/access_token',
    'post'
  );
  // creates an account link record in the database with the given data.
  // (send in the institution name, access token, and item id in the body of the request).
  const { sendRequest: createAccountRecordRequest } = useAxios(
    '/links',
    'post'
  );

  const ctx = useContext(DataContext);

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: (publicToken, metadata) => {
      // swap public token for permanent access token
      getAccessTokenRequest(
        response => {
          const { access_token, item_id } = response.data;
          // create account record in database
          createAccountRecordRequest(
            response => {
              props.onNewAccountLink(response.data);
            },
            {
              name: metadata.institution.name,
              access_token,
              item_id
            }
          );
        },
        {
          public_token: publicToken
        }
      );
    }
  });

  useEffect(() => {
    generateLinkTokenRequest(response => {
      setLinkToken(response.data.link_token);
    });
  }, []);

  if (generateLinkTokenError) {
    const message =
      generateLinkTokenError.response.data.message ||
      generateLinkTokenError.message;
    ctx.showToast(message, 'error');
  }

  console.log('render - LinkAccountButton');
  return (
    <button
      className={`mx-auto mt-5 block rounded
      bg-blue-500 px-6 py-2 text-white transition-all
      duration-200 ${ready && 'cursor-pointer hover:bg-blue-700'} ${
        !ready && 'cursor-not-allowed opacity-50'
      }`}
      onClick={() => open()}
      disabled={!ready}>
      Connect a bank account
    </button>
  );
};

export default LinkAccountButton;
