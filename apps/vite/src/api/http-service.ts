import axios, { AxiosResponse } from 'axios';

const baseApiUrl = 'http://jsonplaceholder.typicode.com';

const getFullApiUrl = (path: string): string => {
  return `${baseApiUrl}${path}`;
};

const baseAxios = axios.create({
  baseURL: baseApiUrl,
});

type Http = {
  url: string;
  data?: Record<string, unknown>;
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  headers?: Record<string, string>;
  isDifferentUrl?: boolean;
};

export const $http = async ({
  url,
  data = {},
  method = 'GET',
  headers = {},
  isDifferentUrl = false,
}: Http): Promise<AxiosResponse<any, any>> => {
  return baseAxios({
    url: isDifferentUrl ? url : getFullApiUrl(url),
    method,
    data,
    headers,
  })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};
