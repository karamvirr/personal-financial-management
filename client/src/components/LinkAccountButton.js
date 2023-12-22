import { usePlaidLink } from 'react-plaid-link';
import axios from 'axios';
import { useEffect, useState } from 'react';

// generate a temporary link token for the Link client component to use.
const generateLinkToken = () => {
  return axios.post('http://localhost:8080/plaid/link_token', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

// sends public token to server and exchanges it for a permanent access token
// and item id.
//
// @param publicToken - the public token returned by the Plaid Link client
const getAccessToken = publicToken => {
  return axios.post(
    'http://localhost:8080/plaid/access_token',
    {
      public_token: publicToken
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
};

// creates an account ink record in the database with the given data.
//
// @param data        - the account access data which includes the access token and
//                      item id
// @param metadata    - the metadata object contains info about the institution the
//                      user selected
const createAccountRecord = (data, metadata) => {
  return axios.post(
    'http://localhost:8080/links',
    {
      name: metadata.institution.name,
      ...data
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
};

const LinkAccountButton = props => {
  const [linkToken, setLinkToken] = useState(null);

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: (publicToken, metadata) => {
      // swap public token for permanent access token
      getAccessToken(publicToken).then(accessData => {
        const { access_token, item_id } = accessData.data;
        // create account record in database
        createAccountRecord({ access_token, item_id }, metadata).then(
          response => {
            props.onNewAccount(response.data);
          }
        );
      });
    }
  });

  useEffect(() => {
    generateLinkToken().then(response => {
      setLinkToken(response.data.link_token);
    });
  }, []);

  console.log('render - LinkAccountButton');
  return (
    <button
      className={`rounded bg-blue-500 px-4 py-2 text-white
        transition-all duration-100 hover:bg-blue-700 ${
          !ready && 'cursor-not-allowed opacity-50'
        }`}
      onClick={() => open()}
      disabled={!ready}>
      Connect a bank account
    </button>
  );
};

export default LinkAccountButton;
