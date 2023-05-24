/**
 * Retrive access token from local storage
 * @returns string | undefinded
 */
export const getAccessToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user.accessToken;
};

/**
 * Retrive access token expiry date from local storage
 * @returns date | undefinded
 */
export const getAccessTokenExpiry = () => {
  const accessTokenExpiry = JSON.parse(localStorage.getItem('accessTokenExpiry'));
  return accessTokenExpiry;
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
