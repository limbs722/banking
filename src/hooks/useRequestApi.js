import { useEffect, useState } from 'react';
import { ApiUtil } from '../utils';

const GET_API_PARAMS = {
  url: '/accounts',
  method: 'GET',
  params: {
    userName: 'HONG GIL DONG',
  },
};

function useRequestApi(params) {
  const [requestParams, setRequestParams] = useState(params);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await ApiUtil.requestApi(requestParams);
      const { data, msg } = res;

      if (!!msg) return;

      setResponse(data);
    };
    getData();
  }, [requestParams]);

  function onApiRequest(params) {
    setRequestParams(params);
  }

  return { response, onApiRequest };
}

export default useRequestApi;
