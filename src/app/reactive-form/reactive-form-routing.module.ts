import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RFromComponent } from './r-from/r-from.component';

const routes: Routes = [
    {
        path: '',
        component: RFromComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReactiveFormRoutingModule{ }