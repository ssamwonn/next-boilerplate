import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducer';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () => {
  const store = configureStore({ reducer: rootReducer });
  return store;
};

const store = makeStore();
const wrapper = createWrapper(makeStore);
export default wrapper;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
