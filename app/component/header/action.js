import { SELECT_CITY } from './actionType';

export const selectCity = (e) => {
  return {
    type: SELECT_CITY,
    city: e.target.value
  }
}