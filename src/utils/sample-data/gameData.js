/* eslint-disable consistent-return */
// import { clientCredentials } from '../utils/client';
import { clientCredentials } from '../client';

const getGames = () =>
  new Promise((resolve, reject) => {
    fetch(`${clientCredentials.databaseURL}/games`)
      .then((response) => response.json())
      .then(resolve)
      .catch(reject);
  });

// eslint-disable-next-line import/prefer-default-export

const createGame = (game) =>
  new Promise((resolve, reject) => {
    fetch(`${clientCredentials.databaseURL}/games`, {
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

// get all game types for the dropdown in the game form
const getGameTypes = () =>
  new Promise((resolve, reject) => {
    fetch(`${clientCredentials.databaseURL}/gametypes`, {})
      .then((response) => response.json())
      .then(resolve)
      .catch(reject);
  });

const updateGame = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${clientCredentials.databaseURL}/games/${payload.id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 204) {
          resolve();
        } else {
          return response.json().then(resolve);
        }
      })
      .catch(reject);
  });

const getGameById = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${clientCredentials.databaseURL}/games/${id}`)
      .then((response) => response.json())
      .then(resolve)
      .catch(reject);
  });

export { getGames, createGame, getGameTypes, updateGame, getGameById };
