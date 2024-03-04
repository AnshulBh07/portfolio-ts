import { configureStore } from "@reduxjs/toolkit";
import { contactFormReducer } from "./reducers/contactFormReducer";
import { scrollReducer } from "./reducers/scrollReducer";
import { toastReducer } from "./reducers/toastReducer";

export const store = configureStore({
  reducer: {
    contact: contactFormReducer,
    scroll: scrollReducer,
    toast: toastReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
