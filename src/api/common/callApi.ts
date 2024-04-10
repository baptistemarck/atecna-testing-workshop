import type { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import axios from 'axios';

export const getResponseData = <T>(response: AxiosResponse<T>) => response?.data;

export const promiseReject = (e: AxiosError | Error) => Promise.reject(e);

export const processCall = async <T, R = AxiosResponse<T>>({
  request,
  responseFunction = r => r as R,
  errorFunction = (error: AxiosError) => Promise.reject(error),
}: {
  request: AxiosRequestConfig<T>;
  responseFunction?: (r: AxiosResponse<T>) => R | Promise<R> ;
  errorFunction?: (error: AxiosError) => Promise<R>;
}): Promise<R> => {
  return axios(request).then(responseFunction).catch(errorFunction);
};

const requestBuilder = ({
  method,
  url,
  data = {},
  contentType = 'application/json; charset=UTF-8',
}: {
  method: Method;
  url: string;
  data?: Record<string, unknown>;
  contentType?: string;
}): AxiosRequestConfig => {
  return {
    headers: {
      'Content-Type': contentType,
    },
    ...(data && { data }),
    method,
    responseType: 'json',
    url,
  };
};

export const getRequestBuilder = ({
  url,
}: { url: string }): AxiosRequestConfig =>
  requestBuilder({
    method: 'GET',
    url,
  });

export const postRequestBuilder = ({ url, data }:
{ url: string; data: Record<string, unknown> },
): AxiosRequestConfig =>
  requestBuilder({ method: 'POST', url, data });

export const putRequestBuilder = ({ url, data }:
{ url: string; data: Record<string, unknown> },
): AxiosRequestConfig =>
  requestBuilder({ method: 'POST', url, data });

export const patchRequestBuilder = ({ url, data }:
{ url: string; data: Record<string, unknown> },
): AxiosRequestConfig =>
  requestBuilder({ method: 'POST', url, data });

export const deleteRequestBuilder = ({ url }: { url: string }): AxiosRequestConfig =>
  requestBuilder({ method: 'DELETE', url });
