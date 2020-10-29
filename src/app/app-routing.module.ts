import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {DashboardPageComponent} from './pages/dashboard/container/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path: 'products',
    pathMatch: 'full',
    component: DashboardPageComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: DashboardPageComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
