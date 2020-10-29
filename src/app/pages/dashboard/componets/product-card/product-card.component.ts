import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../../shared/models';

@Component({
  selector: 'app-product',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit{

  @Input() product: Product;

  constructor() {
  }

  ngOnInit(): void {
  }
}
