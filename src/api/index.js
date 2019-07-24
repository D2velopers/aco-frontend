import search from './search';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = `
  Bearer ${localStorage.getItem('token')}
`;
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

export { search };
