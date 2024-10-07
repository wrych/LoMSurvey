import type { AuthUser } from "@/models/AuthUser";
import { useAuthRepository } from "@/repositories/auth";
import * as authApi from "@/apis/auth";
import type { Ref } from "vue";
import type { AuthRoles } from "@/models/AuthRole";

export class AuthService {
  private repository = useAuthRepository();

  getUser = (): Ref<AuthUser | null | undefined> => {
    return this.repository.getUser();
  };

  getRoles = (): Ref<AuthRoles | undefined> => {
    return this.repository.getRoles();
  };

  logout = async (): Promise<void> => {
    await authApi.logout();
    await this.repository.updateUser();
  };
}

export const useAuthService = (): AuthService => {
  return new AuthService();
};
