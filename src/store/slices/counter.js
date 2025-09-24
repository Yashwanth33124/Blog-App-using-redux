import { createSlice } from "@reduxjs/toolkit";

let initialState = { 
  countValue: 0
};

export let counterSlice = createSlice({
  name: "counter",
  initialState, 
  reducers: {
    handleincrease: (state, action) => {
      state.countValue += 1;
      console.log(state, action);
    },
  },
});

export let { handleincrease } = counterSlice.actions;
export default counterSlice.reducer;


