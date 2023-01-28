import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  alldetails: "",
};

const detailsSlice = createSlice({
  name: "details",
  initialState: INITIAL_STATE,
  reducers: {
    addUserDetails: (state, action) => {
      console.log("here");
      let { alldetails } = state;

      alldetails = action.payload;

      return { ...state, alldetails };
    },
  },
});

export const { addUserDetails } = detailsSlice.actions;
//reducer export to a store
export default detailsSlice.reducer;
