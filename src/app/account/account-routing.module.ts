import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../services/auth-guard.service';

import { AccountHomeComponent } from './account-home/account-home.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';


const routes: Routes = [
    {
      path: '',
      component: AccountHomeComponent
    },
    {
      path:':id',
      canActivate: [AuthGuard],//protect the whole module
      component: AccountDetailComponent
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AccountRoutingModule { }