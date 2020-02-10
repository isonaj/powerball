import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://data.api.thelott.com/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getLatestResults() {
    var body = {
      CompanyId: 'GoldenCasket',
      MaxDrawCountPerProduct: 1,
      OptionalProductFilter: ['Powerball']
    };
    return apiClient.post('/sales/vmax/web/data/lotto/latestresults', body);
  }
};
