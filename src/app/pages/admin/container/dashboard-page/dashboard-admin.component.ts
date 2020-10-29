import {Component, OnInit } from '@angular/core';
import {ROUTES} from '../../../../consts/routes';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent implements OnInit {

  public routers: typeof ROUTES = ROUTES;

  constructor() {}

  ngOnInit(): void {}
}
