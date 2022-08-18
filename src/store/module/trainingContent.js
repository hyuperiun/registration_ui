import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import { Map } from 'immutable';
import * as api from '../../lib/api-training';

// action types
const GET_TRAINING_CONTENT_LIST = 'api/GET_TRAINING_CONTENT_LIST';

// action create
export const getTrainingContentList = createAction(GET_TRAINING_CONTENT_LIST, api.getTrainingContentList, meta=>meta);

// initial state
const initialState = Map({
  //api
  trainingContents: [],

  //event
});

export default handleActions({
  //api
  ...pender({
    type: GET_TRAINING_CONTENT_LIST,
        onSuccess: (state, action) => {
          const { data: trainingContents } = action.payload.data;

          return state.set('trainingContents', trainingContents)
        }
  }),
}, initialState)
