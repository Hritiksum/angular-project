import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path:'',
    component: LandingPageComponent
  },
  {
    path:'account',
    // canActivate: [AuthGuard],//protect the whole module
    loadChildren:() => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path:'rform',
    loadChildren:() =>import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule)
  },
  {
    path:'notfound',
    component: NotFoundComponent
  },
  {
    path:'**',
    redirectTo: 'notfound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }