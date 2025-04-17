import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "~/types/user";

const initialState: User = {
  id: "",
  name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    clearUser: (state) => {
      state.id = "";
      state.name = "";
      state.email = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
