import { clientCredentials } from '../client';

const getEvents = () =>
  // eslint-disable-next-line no-new
  new Promise((resolve, reject) => {
    fetch(`${clientCredentials.databaseURL}/events`)
      .then((response) => response.json())
      .then(resolve)
      .catch(reject);
  });

export default getEvents;
