import {RoleType} from "../enum/roletype.enum";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address?: string;
  phone?: string;
  title?: string;
  bio?: string;
  enabled: boolean;
  notLocked: boolean;
  usingMfa: boolean;
  createdAt?: Date;
  imageUrl?: string;
  roleType: RoleType;
  permissions: string;
}
