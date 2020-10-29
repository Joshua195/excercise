import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {HeaderComponent} from './header/header.component';
import {LayoutComponent} from './layout/layout.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {LoginFormComponent} from './login-form/login-form.component';


// Material Modules
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';


const COMPONENTS = [
  HeaderComponent,
  LayoutComponent,
  SidebarComponent,
  LoginFormComponent
];

const MATERIAL_MODULES = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MATERIAL_MODULES,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
