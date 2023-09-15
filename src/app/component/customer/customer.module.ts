import {NgModule} from '@angular/core';
import {CustomerDetailComponent} from "./customer-detail/customer-detail.component";
import {CustomersComponent} from "./customers/customers.component";
import {NewcustomerComponent} from "./newcustomer/newcustomer.component";
import {CustomerRoutingModule} from "./customer-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {NavbarModule} from "../navbar/navbar.module";

@NgModule({
  declarations: [CustomersComponent, NewcustomerComponent, CustomerDetailComponent],
  imports: [SharedModule, CustomerRoutingModule, NavbarModule]
})
export class CustomerModule {
}
