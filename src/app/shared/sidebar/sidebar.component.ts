import {Component, OnInit} from '@angular/core';
import {ROUTES} from '../../consts/routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public routes: typeof ROUTES = ROUTES;
  public isOpenUiElements = false;

  constructor() { }

  ngOnInit(): void {}

  public openUiElements(): void {
    this.isOpenUiElements = !this.isOpenUiElements;
  }
}
