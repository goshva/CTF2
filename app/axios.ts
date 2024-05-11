import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://countertrade.vit.ooo/v1/api',
});

export default instance;
