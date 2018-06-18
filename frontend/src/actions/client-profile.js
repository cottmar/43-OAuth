import superagent from 'superagent';
import * as routes from '../routes';
//-------------------
// SYNC
// __________________
// these are different objects
const setProfile = profile => ({
  type: 'CLIENT_PROFILE_SET',
  payload: profile,
});

//-------------------
// ASYNC
// __________________
// these are functions
// whenever we have an async operation, we are building something from middleware?
// we come back to async function, we want to update the store by calling a sync action

const createRequest = profile => (store) => {
  const { token } = store.getState();

  return superagent.post(`${API_URL}${routes.PROFILE_ROUTE}`)
    .set('Authorization', `Bearer ${token}`) // HTTP HEADER, STRING
    .set('Content-Type', 'application/json')
    .send(profile)
    .then((response) => {
      return store.dispatch(setProfile(response.body));
      // these lines need to be written with full understanding of the back-end
    });
};

const updateRequest = profile => (store) => {
  const { token } = store.getState();

  return superagent.put(`${API_URL}${routes.PROFILE_ROUTE}/${profile._id}`)
    .set('Authorization', `Bearer ${token}`) // HTTP HEADER, STRING
    .set('Content-Type', 'application/json')
    .send(profile)
    .then((response) => {
      return store.dispatch(setProfile(response.body));
      // these lines need to be written with full understanding of the back-end
    });
};

const fetchRequest = () => (store) => {
  const { token } = store.getState();

  return superagent.get(`${API_URL}${routes.PROFILE_ROUTE}/me`)
    .set('Authorization', `Bearer ${token}`)
    .then((response) => {
      return store.dispatch(setProfile(response.body));
    });
};

export { setProfile, createRequest, updateRequest, fetchRequest };
