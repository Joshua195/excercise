import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../../shared/models';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit{

  @Input() products: Product[];

  constructor() {
  }

  ngOnInit(): void {
  }
}
