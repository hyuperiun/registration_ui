import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import { Map } from 'immutable';
import * as api from '../../lib/api-gym';

// action types
const GET_GYM_LIST = 'api/GET_GYM_LIST';
const CHANGE_INPUT = 'event/CHANGE_INPUT';

// action create
export const getGymList = createAction(GET_GYM_LIST, api.getGymList);
export const changeInput = createAction(CHANGE_INPUT);

// initial state
const initialState = Map({
  //api
  gyms: [],

  //event
  category: ""
});

export default handleActions({
  //api
  ...pender({
    type: GET_GYM_LIST,
        onSuccess: (state, action) => {
          const { data: gyms } = action.payload.data;

          return state.set('gyms', gyms)
        }
  }),
  //event
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return state.set(name, value);
},
}, initialState)
