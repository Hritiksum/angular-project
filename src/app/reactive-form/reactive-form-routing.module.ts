import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RFormComponent } from './r-from/r-from.component';

const routes: Routes = [
    {
        path: '',
        component: RFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReactiveFormRoutingModule{ }