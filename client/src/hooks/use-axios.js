import { useState, useContext } from 'react';
import DataContext from '../store/data-context';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

const isTransactionUpdate = (method, route) => {
  const regex = /links\/\S*\/transactions\/\S*/gm;
  return method.toLowerCase() === 'put' && regex.test(route);
};

const isDeleteAccountLink = (method, route) => {
  const regex = /links\/\S*/gm;
  return method.toLowerCase() === 'delete' && regex.test(route);
};

const isNewAccountLink = (method, route) => {
  return method.toLowerCase() === 'post' && route === '/links';
};

const isInvalidMongoDBCluster = error => {
  return (
    error?.response?.data?.error === 'MongooseError' &&
    error?.response?.status === 400
  );
};

const useAxios = (route, method) => {
  const ctx = useContext(DataContext);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  method = method.toLowerCase();

  const sendRequest = (onSuccess, body = {}, onFailure) => {
    setIsLoading(true);

    console.log(
      `%c ${method.toUpperCase()} ${route} ${
        JSON.stringify(body) === '{}' ? '' : JSON.stringify(body)
      }`,
      'color: #ff0000'
    );

    return axios[method](route, body, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (isTransactionUpdate(method, route)) {
          ctx.showToast('Transaction has been updated.');
        } else if (isDeleteAccountLink(method, route)) {
          ctx.showToast('Account has been deleted.');
        } else if (isNewAccountLink(method, route)) {
          ctx.showToast('Account has been linked.');
        }

        onSuccess(response);
      })
      .catch(error => {
        setError(error);
        if (isInvalidMongoDBCluster(error)) {
          ctx.showToast(
            'An error occured connecting to the database. Please double-check ' +
              'your configuration and try again.',
            'error'
          );
        }
        if (onFailure) {
          onFailure(error);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { isLoading, error, sendRequest };
};

export default useAxios;
