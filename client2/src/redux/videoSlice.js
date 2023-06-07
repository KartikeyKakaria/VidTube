import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentVideo: {},
  loading:true,
  error:null,
};
export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    fetchStart: (state) => {
        state.loading=true;
    },
    fetchSuccess: (state, action) => {
        state.currentVideo = action.payload;
        state.loading = false
    },
    fetchFailure: (state) => {
        state.error = true,
        state.loading = false;
    },
  },
});
export const { fetchStart, fetchFailure, fetchSuccess } = videoSlice.actions;
export default videoSlice.reducer;
