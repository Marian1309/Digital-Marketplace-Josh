import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  counter: number;
};

const initialState: InitialState = {
  counter: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decremement: (state) => {
      state.counter -= 1;
    },
    reset: (state) => {
      state.counter = 0;
    }
  }
});

export default counterSlice.reducer;

export const { increment, decremement, reset } = counterSlice.actions;
