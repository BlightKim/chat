import { jwtDecode } from "jwt-decode";

import { DecodedToken } from "./decodeToken.types";

export const decodeToken = (token: string) => {
  try {
    return jwtDecode<DecodedToken>(token);
  } catch (error) {
    return null;
  }
};
