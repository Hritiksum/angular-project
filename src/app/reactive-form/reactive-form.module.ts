import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { RFormComponent } from './r-from/r-from.component';
import { ReactiveFormRoutingModule } from './reactive-form-routing.module';



@NgModule({
  declarations: [
    RFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormRoutingModule
  ]
})
export class ReactiveFModule { }
