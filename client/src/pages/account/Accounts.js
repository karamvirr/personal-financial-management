import Header from '../../components/Header';
import { usePlaidLink } from 'react-plaid-link';
import axios from 'axios';
import { useEffect, useState } from 'react';

const generateLinkToken = () => {
  return axios.post('http://localhost:8080/link_token', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

// send public_token to server and exchange it for a permanent
// account_token
const getAccessToken = public_token => {
  return axios.post(
    'http://localhost:8080/access_token',
    {
      public_token: public_token
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
};

const createAccountRecord = (data, metadata) => {
  return axios.post(
    'http://localhost:8080/accounts',
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

const fetchAccountData = () => {
  return axios.get(
    'http://localhost:8080/accounts',
    {},
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
};

const Accounts = () => {
  const [fetchAccountDataFlag, setFetchAccountDataFlag] = useState(true);
  const [accounts, setAccounts] = useState([]);
  const [linkToken, setLinkToken] = useState(null);
  const [accountAccessData, setAccountAccessData] = useState(null);

  useEffect(() => {
    generateLinkToken().then(response => {
      setLinkToken(response.data.link_token);
    });
  }, []);

  useEffect(() => {
    if (fetchAccountDataFlag) {
      fetchAccountData().then(response => {
        setAccounts(response.data);
      });
      setFetchAccountDataFlag(prevState => !prevState);
    }
  }, [fetchAccountDataFlag]);

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: (public_token, metadata) => {
      getAccessToken(public_token).then(response => {
        createAccountRecord(response.data, metadata).then(() => {
          setFetchAccountDataFlag(true);
        });
      });
    }
  });

  return (
    <>
      <Header label='Accounts' />
      <section className='py-2.5 text-center'>
        <div className='my-5'>
          {accounts.map((account, index) => (
            // currently rendering access tokens & item ids for debugging purposes
            <div key={index}>
              <p className='text-lg'>
                Account {index + 1} - {account.name}
              </p>
              <p className='my-5'>
                <strong>Access Token: </strong>
                <code className='rounded bg-gray-700 p-2 px-4 font-mono text-white'>
                  {account.access_token}
                </code>
              </p>
              <p>
                <strong>Item ID: </strong>
                <code className='rounded bg-gray-700 p-2 px-4 font-mono text-white'>
                  {account.item_id}
                </code>
              </p>
            </div>
          ))}
        </div>
        <button
          className={`rounded bg-blue-500 px-4 py-2 font-bold text-white
            transition-all duration-100 hover:bg-blue-700 ${
              !ready && 'cursor-not-allowed opacity-50'
            }`}
          onClick={() => open()}
          disabled={!ready}>
          Connect a bank account
        </button>
      </section>
    </>
  );
};

export default Accounts;
