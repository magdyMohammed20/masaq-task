import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export type AppSliceStateType = {
  accessToken: string | null;
};

const initialState: AppSliceStateType = {
  accessToken: null
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload[AppSlice.name]
      };
    });
  }
});
export const { setAccessToken } = AppSlice.actions;
export default AppSlice.reducer;
