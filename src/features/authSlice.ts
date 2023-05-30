import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { AuthSate } from "../interfaces/auth-interface";

const initialState: AuthSate = {
  id: 0,
  name: "",
  email: "",
  key: "",
  secret: "",
};

export const authSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthSate>) => {
      localStorage.setItem("user-info", JSON.stringify(action.payload));
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.key = action.payload.key;
      state.secret = action.payload.secret;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
