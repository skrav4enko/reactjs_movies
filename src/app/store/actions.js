/* eslint-disable import/prefer-default-export */
import { NAVIGATE_TO } from './types';

export const navigateTo = (url) => {
  return {
    type: NAVIGATE_TO,
    payload: url,
  };
};
