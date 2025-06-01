/* eslint-disable consistent-return */
import { clientCredentials } from '../client';

const getEvents = (uid) =>
  // eslint-disable-next-line no-new
  new Promise((resolve, reject) => {
    fetch(`${clientCredentials.databaseURL}/events`, {
      headers: {
        Authorization: uid,
      },
    })
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

const updateEvent = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${clientCredentials.databaseURL}/events/${payload.id}`, {
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

const getEventById = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${clientCredentials.databaseURL}/events/${id}`)
      .then((response) => response.json())
      .then(resolve)
      .catch(reject);
  });

const deleteEvent = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${clientCredentials.databaseURL}/events/${id}`, {
      method: 'DELETE',
    })
      .then(resolve)
      .catch(reject);
  });

const joinEvent = (eventId, uid, setEvents) => {
  // TODO: Write the POST fetch request to join and event
  fetch(`${clientCredentials.databaseURL}/events/${eventId}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: uid,
    },
    body: JSON.stringify({}),
  })
    .then(() => getEvents(uid))
    .then(setEvents);
};

const leaveEvent = (eventId, uid, setEvents) => {
  // TODO: Write the DELETE fetch request to leave an event
  fetch(`${clientCredentials.databaseURL}/events/${eventId}/leave`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: uid,
    },
    body: JSON.stringify({}),
  })
    .then(() => getEvents(uid))
    .then(setEvents);
};

export { getEvents, createEvent, updateEvent, getEventById, deleteEvent, joinEvent, leaveEvent };
