import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardPageComponent} from './container/dashboard-page/dashboard-page.component';
import {SharedModule} from '../../shared/shared.module';
import {ProductGridComponent} from './componets/product-grid/product-grid.component';
import {ProductCardComponent} from './componets/product-card/product-card.component';

// Material Modules
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
];

const COMPONENTS = [
  DashboardPageComponent,
  ProductCardComponent,
  ProductGridComponent
];


@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    ...MATERIAL_MODULES,
    SharedModule,
    CommonModule,
  ],
  exports: [ ]
})
export class DashboardModule { }
