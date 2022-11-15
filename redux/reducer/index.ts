import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import testReducer from './testSlice';

const combinedReducers = combineReducers({
  testSlice: testReducer,
});

export const rootReducer = (state: any, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default:
      return combinedReducers(state, action);
  }
};
