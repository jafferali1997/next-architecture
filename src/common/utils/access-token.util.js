'use client';

/**
 * Retrive access token from local storage
 * @returns string | undefined
 */
export const getAccessToken = () => {
  if (typeof window === 'object' && window?.localStorage?.getItem('user')) {
    return JSON.parse(localStorage.getItem('user')).token;
  }
  return undefined;
};

/**
 * Retrive isLoginVerified Status
 * @returns bool
 */
export const isLoginVerified = () => {
  if (typeof window === 'object' && window?.localStorage?.getItem('user')) {
    return JSON.parse(localStorage.getItem('user')).isLoginVerified;
  }
  return false;
};

/**
 * Retrive access token expiry date from local storage
 * @returns date | undefined
 */
export const getAccessTokenExpiry = () => {
  if (typeof window === 'object') {
    const accessTokenExpiry = JSON.parse(
      window.localStorage.getItem('accessTokenExpiry')
    );
    return accessTokenExpiry;
  }
  return null;
};
