import { configureStore } from "@reduxjs/toolkit";

import { chatReducer } from "./features/chat/chatSlice";
import { userReducer } from "./features/user/userSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      user: userReducer,
      chat: chatReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
  });

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
