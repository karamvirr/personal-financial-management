import { useEffect, useState } from 'react';
import useAxios from '../hooks/use-axios';
import Header from '../components/UI/Header';
import Section from '../components/UI/Section';
import AccountLink from '../components/AccountLink';
import LinkAccountButton from '../components/LinkAccountButton';

const Accounts = () => {
  const [accountLinks, setAccountLinks] = useState(null);
  const { sendRequest } = useAxios('/links', 'get');

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
      sendRequest(response => {
        setAccountLinks(response.data);
      });
    }
  }, [accountLinks]);

  return (
    <>
      <Header title='Accounts' />
      <Section>
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
      </Section>
    </>
  );
};

export default Accounts;
