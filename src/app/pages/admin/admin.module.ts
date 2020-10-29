import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {AdminRouting} from './admin.routing';
import {DashboardAdminComponent} from './container/dashboard-page/dashboard-admin.component';
import {SharedModule} from '../../shared/shared.module';

// Material Modules
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
];

const COMPONENTS = [
  DashboardAdminComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MATERIAL_MODULES,
    SharedModule,
    AdminRouting,
    ReactiveFormsModule
  ],
  exports: [ ]
})
export class AdminModule { }
