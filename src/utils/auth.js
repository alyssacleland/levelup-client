import firebase from 'firebase/app';
import 'firebase/auth';
import { clientCredentials } from './client';

// in the BE repo, see auth.py to see views check_user and register_user. and see urls to see urlpatterns for these views (checkuser and register)
const checkUser = (uid) =>
  new Promise((resolve, reject) => {
    fetch(`${clientCredentials.databaseURL}/checkuser`, {
      method: 'POST',
      body: JSON.stringify({ uid }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((resp) => resolve(resp.json()))
      .catch(reject);
  });

const registerUser = (userInfo) =>
  new Promise((resolve, reject) => {
    fetch(`${clientCredentials.databaseURL}/register`, {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((resp) => resolve(resp.json()))
      .catch(reject);
  });

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  firebase.auth().signOut();
};

export { signIn, signOut, checkUser, registerUser };
