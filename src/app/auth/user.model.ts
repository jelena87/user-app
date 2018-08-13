export interface Roles {
  standard?: boolean;
  admin?: boolean;
}

export interface User {
  userId?: string;
  email: string;
  password: string;
  roles?: Roles;
}
