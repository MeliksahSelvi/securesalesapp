import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomersComponent} from "./customers/customers.component";
import {AuthenticationGuard} from "../guard/authentication.guard";
import {NewcustomerComponent} from "./newcustomer/newcustomer.component";
import {CustomerDetailComponent} from "./customer-detail/customer-detail.component";

const customerRoutes: Routes = [
  {path: 'customers', component: CustomersComponent, canActivate: [AuthenticationGuard]},
  {path: 'customers/new', component: NewcustomerComponent, canActivate: [AuthenticationGuard]},
  {path: 'customers/:id', component: CustomerDetailComponent, canActivate: [AuthenticationGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
