export interface Roles {
  standard?: boolean;
  admin?: boolean;
}

export interface User {
  userId: string;
  email: string;
  roles: Roles;
}
