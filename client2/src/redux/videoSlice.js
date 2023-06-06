import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    video: []
}
export const videoSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {}
})

export default videoSlice.reducer;