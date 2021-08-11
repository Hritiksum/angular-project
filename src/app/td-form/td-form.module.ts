import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';

//use Td Form import FormModule from @angular/form
import { FormsModule } from '@angular/forms';

import { tdFormRoutingModule } from './td-form-routing.module';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    tdFormRoutingModule
  ]
})
export class TdFormModule { }
