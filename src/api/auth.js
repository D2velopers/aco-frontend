import axios from 'axios';

export default {
  login: () => {
    return axios.post(`api/auth/login`);
  },
  logout: () => {
    return axios.post(`api/auth/logout`);
  },
};
