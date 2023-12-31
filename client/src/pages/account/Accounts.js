import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/UI/Header';
import AccountLink from '../../components/AccountLink';
import LinkAccountButton from '../../components/LinkAccountButton';

const Accounts = () => {
  const [accountLinks, setAccountLinks] = useState(null);

  const updateAccountLinkHandler = data => {
    setAccountLinks(prevState => {
      const copy = [...prevState];
      const record = data.record;
      const index = prevState.findIndex(link => link._id === record._id);

      if (data.method === 'delete') {
        copy.splice(index, 1);
      } else {
        copy[index] = record;
      }

      return copy;
    });
  };

  const newAccountLinkHandler = data => {
    setAccountLinks(prevState => {
      return [...prevState, data];
    });
  };

  useEffect(() => {
    if (!accountLinks) {
      axios
        .get('http://localhost:8080/links', {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          setAccountLinks(response.data);
        });
    }
  }, [accountLinks]);

  return (
    <>
      <Header>
        <h1 className='text-lg font-bold'>Accounts</h1>
      </Header>
      <section className='m-5'>
        {accountLinks && (
          <ul>
            {accountLinks.map(link => (
              <li key={link._id} className='mb-5'>
                <AccountLink data={link} onUpdate={updateAccountLinkHandler} />
              </li>
            ))}
          </ul>
        )}
        <LinkAccountButton onNewAccountLink={newAccountLinkHandler} />
      </section>
    </>
  );
};

export default Accounts;
