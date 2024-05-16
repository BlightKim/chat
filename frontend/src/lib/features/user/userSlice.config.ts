import { UserStateParams } from "./userSlice.types";

export const USER_SLICE_NAME = "user";

export const userInitialState: UserStateParams = {
  accessToken: null,
  currentUser: null,
};
