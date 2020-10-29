import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import {LoginFormComponent} from '../login-form/login-form.component';
import {MatDialog} from '@angular/material/dialog';
import {AuthService} from '../services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isMenuOpened: boolean;
  @Output() isShowSidebar = new EventEmitter<boolean>();
  public user;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.authService.user$.subscribe(user => this.user = user);
  }

  public openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
    this.isShowSidebar.emit(this.isMenuOpened);
  }

  public openDialog(): void {
    this.dialog.open(LoginFormComponent);
  }

  public signOut(): void {
    this.authService.signOut();
    this.snackBar.open('Log out successfully', '', {
      duration: 1500,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    } );
  }

  get username(): string {
    if (this.user) {
      const {email} = this.user;
      return email.split('@')[0];
    }
  }
}
