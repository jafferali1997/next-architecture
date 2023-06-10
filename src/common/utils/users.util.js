'use client';

/**
 * Retrive access token from local storage
 * @returns string | undefined
 */
// eslint-disable-next-line import/prefer-default-export
export const getUser = () => {
  if (window !== undefined && window.localStorage.getItem('user')) {
    return JSON.parse(localStorage.getItem('user'));
  }
  return undefined;
};
