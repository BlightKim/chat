import { encryptSignupData } from "@/helpers/encrypt/encrypt";

import { instance } from "../index";
import { AuthTypes } from "./auth.types";

export async function signUp(name: string, username: string, password: string) {
  const { encryptedName, encryptedUsername, encryptedPassword } = encryptSignupData(name, username, password);
  const body = {
    name: encryptedName,
    username: encryptedUsername,
    password: encryptedPassword,
  };

  const { data } = await instance.post("/member", body);
  return data;
}

export async function signIn(username: string, password: string) {
  const body = {
    username,
    password,
  };

  const { data } = await instance.post<AuthTypes>("auth/login", body, { withCredentials: true });
  return data;
}

export async function refreshToken() {
  const { data } = await instance.post<AuthTypes>("auth/refresh-tokens", {}, { withCredentials: true });
  return data;
}

export async function logout() {
  const { data } = await instance.post<AuthTypes>("auth/logout", {}, { withCredentials: true });
  return data;
}
