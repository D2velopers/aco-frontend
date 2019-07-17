import axios from 'axios';

export default {
  randomImg: () => {
    return axios.get(`api/v1/images/latest`);
  },
};
