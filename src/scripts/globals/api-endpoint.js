import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  SEARCH: `${CONFIG.BASE_URL}/search?q=<query>`,
  REVIEW: (id) => `${CONFIG.BASE_URL}/review/${id}`,
};

export default API_ENDPOINT;
