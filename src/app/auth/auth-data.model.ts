// type of data i want to get during the signup and login that i'm sending to the server for validation
import { Roles } from './user.model';

export interface AuthData {
  email: string;
  password: string;
  roles: Roles;
}
