const D23_001 = 'Profile is required';
const D23_002 = 'Invalid Profile';

const validateProfile = (profile) => { // should have a try catch at some point
  // in a way that the user understands
  if (!profile) {
    throw new Error(D23_001);
  }

  const {
    username, email, bio, owner,
  } = profile;
  if (!username || !email || !bio || !owner) {
    throw new Error(D23_002);
  }
  return undefined;
};


export default (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CLIENT_PROFILE_SET': // refactor, it smells
      validateProfile(payload);
      return payload;
    case 'TOKEN_REMOVE': // log out
      return null;
    default:
      return state;
  }
};
