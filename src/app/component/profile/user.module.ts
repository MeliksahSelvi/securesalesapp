import {NgModule} from '@angular/core';
import {NavbarModule} from "../navbar/navbar.module";
import {UserRoutingModule} from "./user-routing.module";
import {UserComponent} from "./user/user.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [UserComponent],
  imports: [SharedModule, UserRoutingModule, NavbarModule]
})
export class UserModule {
}
