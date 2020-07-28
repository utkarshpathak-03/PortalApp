import {IS_HOME_LOADING} from '../constants/ActionTypes';

export const HomeActions = name => {
  console.warn(name);
  return dispatch => {
    dispatch({type: IS_HOME_LOADING, payload: 'true'});
  };
};
