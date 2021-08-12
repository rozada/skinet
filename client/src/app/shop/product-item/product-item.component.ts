import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct;

  constructor() { 
    this.product = { id: -1, name: "NA", description: "NA", price: 0, productBrand: "NA", productType: "NA", pictureUrl: "NA"};
  }

  ngOnInit(): void {
  }

}
