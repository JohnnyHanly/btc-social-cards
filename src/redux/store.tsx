import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import userProfileSlice from "./userProfileSlice";

export const store = configureStore({
  reducer: {
    userProfiles: userProfileSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
