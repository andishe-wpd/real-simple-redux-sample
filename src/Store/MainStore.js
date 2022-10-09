import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  value: 200
};

const CounterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increment: (state) => {
      // return state.value++; why it has not to has a return value ?
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    set: (state, action) => {
      // action.payload is a must syntax
      state.value = action.payload;
    }
  }
});

// test if counterSlice works or not
//console.log(CounterSlice);

// action creators creator
export const { increment, decrement, set } = CounterSlice.actions;

export const mainStore = configureStore(CounterSlice);
