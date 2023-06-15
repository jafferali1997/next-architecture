'use client';

import axios from 'axios';
import { enqueueSnackbar } from 'notistack';
import { getAccessToken } from './access-token.util';
import { delay } from './generic.util';

const api = (headers = null) => {
  let header = headers;
  const accessToken = getAccessToken();

  if (!header) {
    header = { Accept: 'application/json', 'Content-Type': 'application/json' };
  }

  // if (user) headers.Authorization = `Bearer ${user.token}`;

  const apiSet = axios.create({
    baseURL: process.env.NEXT_PUBLIC_MAIN_URL,
    headers: accessToken ? { ...header, Authorization: `Bearer ${accessToken}` } : header
  });

  apiSet.interceptors.response.use(
    async (response) => {
      if (response.config.method === 'post' || response.config.method === 'patch') {
        if (
          response.config.url.split('/')[response.config.url.split('/').length - 1] !==
          'get-all'
        ) {
          enqueueSnackbar(response.data.message, {
            variant: 'success'
          });
          await delay(700);
          return response;
        }
      }
      return response;
    },
    (error) => {
      if (error.message === 'Network Error') {
        enqueueSnackbar(error.message, {
          variant: 'error'
        });
        throw error;
      }
      if (error.response.status === 401 && window === 'object') {
        localStorage.removeItem('user');
        window.location.href = '/';
      }
      let { message } = error.response.data;

      if (!message) {
        message =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
      }

      if (Array.isArray(message)) {
        message.forEach((element) => {
          enqueueSnackbar(element, {
            variant: 'error'
          });
        });
      } else {
        enqueueSnackbar(message, {
          variant: 'error'
        });
      }
      return error.response;
    }
  );

  return apiSet;
};

export default api;
