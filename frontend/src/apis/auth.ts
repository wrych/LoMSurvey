import { AuthRole, AuthRoles } from "@/models/AuthRole";
import { AuthUser } from "../models/AuthUser";
import { getJson, postJson } from "./common";

export const getUser = async (): Promise<AuthUser | null> => {
  return AuthUser.fromJSON((await getJson("/api/auth/user")) as AuthUser);
};

export const getRoles = async (): Promise<AuthRoles> => {
  return AuthRoles.fromJSON(await getJson<AuthRole[]>("/api/auth/roles"));
};

export const logout = async (): Promise<void> => {
  await postJson("/api/auth/logout");
};
