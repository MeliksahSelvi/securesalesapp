import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ExtractArrayValue} from "../pipes/extractarrayvalue.pipe";

@NgModule({
  declarations: [ExtractArrayValue],
  imports: [RouterModule, CommonModule, FormsModule],
  exports: [RouterModule, CommonModule, FormsModule, ExtractArrayValue]
})
export class SharedModule {
}
