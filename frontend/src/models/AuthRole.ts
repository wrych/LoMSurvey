export class AuthRole {
  title: string;
  description: string;
  roleId: number;
  roleHolderId: number;

  constructor(
    title: string,
    description: string,
    roleId: number,
    roleHolderId: number
  ) {
    this.title = title;
    this.description = description;
    this.roleId = roleId;
    this.roleHolderId = roleHolderId;
  }

  static fromJSON(json: {
    title: string;
    description: string;
    roleId: number;
    roleHolderId: number;
  }): AuthRole | null {
    return json
      ? new AuthRole(
          json.title,
          json.description,
          json.roleId,
          json.roleHolderId
        )
      : null;
  }
}

export class AuthRoles {
  roles: AuthRole[];

  constructor(roles: AuthRole[]) {
    this.roles = roles;
  }

  static fromJSON(json: AuthRole[]): AuthRoles | null {
    return json
      ? new AuthRoles(json.map((role) => AuthRole.fromJSON(role)!))
      : null;
  }
}
