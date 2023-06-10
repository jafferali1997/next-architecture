'use client';

/**
 * Retrive access token from local storage
 * @returns string | undefined
 */
// eslint-disable-next-line import/prefer-default-export
export const getUser = () => {
  if (typeof window === 'object' && window?.localStorage?.getItem('user')) {
    return JSON.parse(localStorage.getItem('user'));
  }
  return undefined;
};
