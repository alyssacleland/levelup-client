import { clientCredentials } from '../client';

const getEvents = () =>
  // eslint-disable-next-line no-new
  new Promise((resolve, reject) => {
    fetch(`${clientCredentials.databaseURL}/events`)
      .then((response) => response.json())
      .then(resolve)
      .catch(reject);
  });

const createEvent = (game) =>
  new Promise((resolve, reject) => {
    fetch(`${clientCredentials.databaseURL}/events`, {
      method: 'POST',
      body: JSON.stringify(game),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(resolve)
      .catch(reject);
  });

export { getEvents, createEvent };
