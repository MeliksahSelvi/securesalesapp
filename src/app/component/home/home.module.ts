import {NgModule} from '@angular/core';
import {HomeRoutingModule} from "./home-routing.module";
import {HomeComponent} from "./home/home.component";
import {NavbarModule} from "../navbar/navbar.module";
import {StatsModule} from "../stats/stats.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule, NavbarModule, StatsModule]
})
export class HomeModule {
}
