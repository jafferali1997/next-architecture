'use client';

/**
 * Retrive access token from local storage
 * @returns string | undefined
 */

export const getUser = () => {
  if (typeof window === 'object' && window?.localStorage?.getItem('user')) {
    return JSON.parse(localStorage.getItem('user'));
  }
  return undefined;
};

/**
 * Retrive isPhoneVerified from local storage
 * @returns bool
 */

export const isPhoneVerified = () => {
  if (typeof window === 'object' && window?.localStorage?.getItem('user')) {
    return JSON.parse(localStorage.getItem('user')).isPhoneVerified;
  }
  return false;
};

/**
 * Retrive isEmailVerified from local storage
 * @returns bool
 */

export const isEmailVerified = () => {
  if (typeof window === 'object' && window?.localStorage?.getItem('user')) {
    return JSON.parse(localStorage.getItem('user')).isEmailVerified;
  }
  return false;
};
