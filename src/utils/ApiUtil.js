import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:4000';
class ApiUtil {
  async requestApi(requestParams) {
    function getData(url, method, params, type) {
      let body = {
        url: url,
        method: method,
      };
      let data = {};

      if (type === 'normal') {
        data = { params: params };
      }

      return axios({ baseURL: BASE_URL, ...body, ...data })
        .then((res) => res)
        .catch((err) => err.response);
    }

    const response = await getData(
      requestParams.url,
      requestParams.method,
      requestParams.params,
      requestParams.type
    );

    let msg = '';

    if (!response) msg = '데이터를 불러 올 수 없습니다.';
    if (response.status !== 200) msg = '네트워크 통신 중 오류가 발생했습니다.';

    return { data: response.data, msg: msg };
  }
}

export default new ApiUtil();
