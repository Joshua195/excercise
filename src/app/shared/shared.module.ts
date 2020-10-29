import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HeaderComponent} from './header/header.component';
import {LayoutComponent} from './layout/layout.component';
import {SidebarComponent} from './sidebar/sidebar.component';

// Material Modules
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';


const COMPONENTS = [
  HeaderComponent,
  LayoutComponent,
  SidebarComponent,
];

const MATERIAL_MODULES = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MATERIAL_MODULES,
    CommonModule,
    RouterModule,
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
