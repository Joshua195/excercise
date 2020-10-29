import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {DashboardAdminComponent} from './container/dashboard-page/dashboard-admin.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardAdminComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class AdminRouting {
}
