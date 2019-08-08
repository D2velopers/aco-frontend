import axios from 'axios';

export default {
  randomImg: (limit = 10, page = 1) => {
    return axios.get('https://api.thecatapi.com/v1/images/search', {
      params: {
        limit,
        order: 'Desc',
        page,
      },
    });
  },
};
