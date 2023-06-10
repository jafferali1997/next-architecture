'use client';

/**
 * Retrive access token from local storage
 * @returns string | undefined
 */
export const getAccessToken = () => {
  if (window !== undefined && window.localStorage.getItem('user')) {
    return JSON.parse(localStorage.getItem('user')).token;
  }
  return undefined;
};

/**
 * Retrive access token expiry date from local storage
 * @returns date | undefined
 */
export const getAccessTokenExpiry = () => {
  if (window !== undefined) {
    const accessTokenExpiry = JSON.parse(
      window.localStorage.getItem('accessTokenExpiry')
    );
    return accessTokenExpiry;
  }
  return null;
};

/**
 * If the access token is present and is not expired
 * @returns boolean
 */
export const isAccessTokenVerifed = () => {
  const accessToken = getAccessToken();
  const accessTokenExpiry = getAccessTokenExpiry();

  if (accessToken && accessTokenExpiry) {
    if (Date(accessTokenExpiry).getTime() > Date().getTime()) {
      return true;
    }
  }

  return false;
};
