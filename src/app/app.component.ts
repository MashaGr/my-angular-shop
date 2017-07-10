import { Component, OnInit } from '@angular/core';

import { Product } from './product.model';
import { ProductsService } from './products.service';

enum CategoryType {
  cat1 = 1 ,
  cat2 = 2,
  cat3 = 3
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Web Store';
  name: string;
  description: string;
  price: number;
  category: CategoryType;
  isAvailable: boolean;
  ingredients: any[];
  equivalents: any[];
  cartIsNotEmpty: boolean;
  productAmount: number;
  productSum: number;

  products: Array<Product>;

  constructor(
      public productsService: ProductsService
  ) { }

  ngOnInit() {
    this.isAvailable = false;
    this.cartIsNotEmpty = false;
    this.productAmount = 0;
    this.productSum = 0;
    this.ingredients = ['category1', 'category2'];
    this.equivalents = ['product1', 'product2', 'product3'];
    this.products = this.productsService.getProducts();
  }

  onBuy(value: number): void {
    this.cartIsNotEmpty = true;
    this.productAmount += 1;
    this.productSum += value;
  }

}
