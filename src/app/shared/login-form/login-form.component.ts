import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {AuthService} from '../services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public form: FormGroup;
  public email = 'admin@email.com';
  public password = 'admin';

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) { }

  public ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(this.email, [Validators.required, Validators.email]),
      password: new FormControl(this.password, [Validators.required])
    });
  }

  public login(): void {
    console.log(this.form.value);
    if (this.form.valid) {
      const user = this.form.value;
      this.authService.login(user);
      this.dialog.closeAll();
      const { email } = user;
      const username = email.split('@')[0];
      this.snackBar.open(`Welcome ${username}`, '', {
        duration: 1500,
        horizontalPosition: 'right',
        verticalPosition: 'bottom'
      } );
    }
  }
}
