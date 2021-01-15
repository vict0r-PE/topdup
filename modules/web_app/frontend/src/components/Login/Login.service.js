import API from '../../api';

export function getToken(credentials) {
  return API
    .post("auth/token", credentials)
    .then(result => result.data);
}
