import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  test: string | null;
}

const initialState = {
  test: '',
};

const testSlice = createSlice({
  name: 'testSlice',
  initialState,
  reducers: {
    test(state: State, action: PayloadAction<string>) {
      state.test = action.payload;
    },
  },
});

export const { test } = testSlice.actions;
export default testSlice.reducer;
