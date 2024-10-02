import type { AuthUser } from "@/models/AuthUser";
import { useAuthRepository } from "@/repositories/auth";
import * as authApi from "@/apis/auth";
import type { Ref } from "vue";

export class AuthService {
  private repository = useAuthRepository();

  getUser = (): Ref<AuthUser | null> => {
    return this.repository.getUser();
  };

  getRole = (): Ref<AuthRole | null> => {
    return this.repository.getRole();
  };

  logout = async (): Promise<void> => {
    await authApi.logout();
    await this.repository.updateUser();
  };
}

export const useAuthService = (): AuthService => {
  return new AuthService();
};
