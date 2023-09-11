import {RoleType} from "../enum/roletype.enum";

export interface Role{
  id:number;
  roleType: RoleType;
  permission:string;
}
