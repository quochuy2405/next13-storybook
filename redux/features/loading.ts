import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
	name: "loading",
	initialState: false,
	reducers: {
		startLoading: (state) => {
			state = true;
		},
		closeLoading: (state) => {
			state = false;
		},
	},
});

export const { startLoading, closeLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
