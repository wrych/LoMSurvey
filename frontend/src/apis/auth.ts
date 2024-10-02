import { AuthUser } from "../models/AuthUser";
import { getJson, postJson } from "./common";

const getUser = async (): Promise<AuthUser | null> => {
  return AuthUser.fromJSON((await getJson("/api/auth/user")) as AuthUser);
};

const logout = async (): Promise<void> => {
  await postJson("/api/auth/logout");
};

export { getUser, logout };
