import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import { Map } from 'immutable';
import * as api from '../../lib/api-training';

// action types
const GET_TRAINING_LIST = 'api/GET_TRAINING_LIST';
const CHANGE_INPUT = 'event/CHANGE_INPUT';

// action create
export const getTrainingList = createAction(GET_TRAINING_LIST, api.getTrainingList);
export const changeInput = createAction(CHANGE_INPUT);

// initial state
const initialState = Map({
  //api
  trainings: [],

  //event
});

export default handleActions({
  //api
  ...pender({
    type: GET_TRAINING_LIST,
        onSuccess: (state, action) => {
          const { data: trainings } = action.payload.data;

          return state.set('trainings', trainings)
        }
  }),
  //event
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return state.set(name, value);
  },
}, initialState)
