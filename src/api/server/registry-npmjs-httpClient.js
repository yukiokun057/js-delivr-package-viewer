import Axios from 'axios';
import { cacheAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions';

// init adapters
const cacheConfig = {
  enabledByDefault: false,
  cacheFlag: 'useCache',
};
const throttleConfig = {
  threshold: 2 * 1000, // 2 seconds
};
const myAdapter = throttleAdapterEnhancer(
  cacheAdapterEnhancer(Axios.defaults.adapter, cacheConfig), throttleConfig,
);

// init httpClient
const httpClient = Axios.create({
  baseURL: 'http://localhost:7071/npmjs',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
  // throttle and cache adapters
  adapter: myAdapter,
});

export default httpClient;
