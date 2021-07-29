import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountHomeComponent } from './account-home/account-home.component';

const routes: Routes = [
    {
        path: '',
        component: AccountHomeComponent
      },
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AccountRoutingModule { }