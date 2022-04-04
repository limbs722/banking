import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:4000';
class ApiUtil {
  async requestApi(requestParams) {
    function getData(url, method, params) {
      let body = {
        url: url,
        method: method,
      };
      let data = {};

      if (method === 'GET') {
        data = { params: params };
      } else {
        data = { data: params };
      }

      return axios({ baseURL: BASE_URL, ...body, ...data })
        .then((res) => res)
        .catch((err) => err.response);
    }

    const response = await getData(
      requestParams.url,
      requestParams.method,
      requestParams.params
    );

    let msg = '';

    if (!response) msg = '데이터를 불러 올 수 없습니다.';

    return { data: response.data, msg: msg };
  }
}

export default new ApiUtil();
