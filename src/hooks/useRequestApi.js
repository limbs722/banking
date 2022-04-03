import { useEffect, useState } from 'react';
import { ApiUtil } from '../utils';

const useRequestApi = (params) => {
  const [requestParams, setRequestParams] = useState(params);
  const [response, setResponse] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await ApiUtil.requestApi(requestParams);
      setIsFetching(false);
      const { data, msg } = res;

      if (!!msg) return;

      setResponse(data);
    };
    getData();
  }, [requestParams]);

  return { response, isFetching };
};

export default useRequestApi;
