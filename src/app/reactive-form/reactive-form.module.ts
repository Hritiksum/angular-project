import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RFromComponent } from './r-from/r-from.component';
import { ReactiveFormRoutingModule } from './reactive-form-routing.module';



@NgModule({
  declarations: [
    RFromComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule
  ]
})
export class ReactiveFormModule { }
