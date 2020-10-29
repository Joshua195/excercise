import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../shared/models';
import {ProductService} from '../../services/product.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  public products: Product[];

  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productService.fetchProducts().subscribe(data => {
      this.products = data;
    });
  }
}
