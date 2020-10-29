import {Component, OnInit} from '@angular/core';
import {ROUTES} from '../../consts/routes';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public routes: typeof ROUTES = ROUTES;
  public isOpenUiElements = false;
  public user;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user$.subscribe(user => this.user = user);
  }

  public openUiElements(): void {
    this.isOpenUiElements = !this.isOpenUiElements;
  }
}
