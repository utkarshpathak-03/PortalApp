import {IS_HOME_LOADING} from '../constants/ActionTypes';

const INITIAL_STATE = {
  list: [],
  isLoading: 'false',
};

export default function HomeReducers(state = INITIAL_STATE, action) {
  console.warn('action = >' + JSON.stringify(action));
  switch (action.type) {
    case IS_HOME_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}
