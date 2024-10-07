export class AuthRole {
  title: string;
  description: string;
  globalRoleId: number;
  userId: number;

  constructor(
    title: string,
    description: string,
    globalRoleId: number,
    roleHolderId: number
  ) {
    this.title = title;
    this.description = description;
    this.globalRoleId = globalRoleId;
    this.userId = roleHolderId;
  }

  static fromJSON(json: {
    title: string;
    description: string;
    globalRoleId: number;
    userId: number;
  }): AuthRole | null {
    return json
      ? new AuthRole(
          json.title,
          json.description,
          json.globalRoleId,
          json.userId
        )
      : null;
  }
}

export class AuthRoles {
  roles: AuthRole[];

  constructor(roles: AuthRole[]) {
    this.roles = roles;
  }

  static fromJSON(json: AuthRole[]): AuthRoles {
    return new AuthRoles(json.map((role) => AuthRole.fromJSON(role)!));
  }
}
