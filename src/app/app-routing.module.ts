import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path:'',
    component: LandingPageComponent
  },
  {
    path:'account',
    canActivate: [AuthGuard],
    loadChildren:() => import('./account/account.module').then(m => m.AccountModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }