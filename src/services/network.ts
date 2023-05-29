import axios from 'axios';

export const network = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});
