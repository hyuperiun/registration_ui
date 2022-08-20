import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import { Map } from 'immutable';
import * as api from '../../lib/api-gym';

// action types
const GET_GYM_LIST = 'api/GET_GYM_LIST';
const CHANGE_INPUT = 'event/CHANGE_INPUT';
const GET_PROGRAM_LIST = 'api/GET_PROGRAM_LIST';
const GET_GYM_LIST_BY_NAME = 'api/GET_GYM_LIST_BY_NAME';

// action create
export const getGymList = createAction(GET_GYM_LIST, api.getGymList);
export const changeInput = createAction(CHANGE_INPUT);
export const getProgramList = createAction(GET_PROGRAM_LIST, gymId => api.getProgramList(gymId));
export const getGymListByName = createAction(GET_GYM_LIST_BY_NAME, gymName => api.getGymListByName(gymName));

// initial state
const initialState = Map({
  //api
  gyms: [],

  //event
  search: "",

  //programs
  programs: []
});

export default handleActions({
  //api
  ...pender(
    {
      type: GET_PROGRAM_LIST,
      onSuccess: (state, action) => {
        const { data: programs } = action.payload.data;

        return state.set('programs',programs)
      }
    }
  ),
  ...pender({
    type: GET_GYM_LIST,
        onSuccess: (state, action) => {
          const { data: gyms } = action.payload.data;

          return state.set('gyms', gyms)
        }
      }
  ),
  ...pender({
    type: GET_GYM_LIST_BY_NAME,
        onSuccess: (state, action) => {
          const { data: gyms } = action.payload.data;

          return state.set('gyms', gyms)
        }
      }
  ),
  //event
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return state.set(name, value);
  }
}, initialState)
