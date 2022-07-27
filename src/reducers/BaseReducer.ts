import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

const { reducer, actions } = user;
export const { increment, decrement, incrementByAmount } = actions;
const BaseReducer = {
  users: reducer,
};

export default BaseReducer;
