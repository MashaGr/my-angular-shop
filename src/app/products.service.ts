import { Injectable } from '@angular/core';

import { Product } from './product.model';

@Injectable()
export class ProductsService {

  constructor() { }

  getProduct(): Product {
    return new Product(1, 'Product1', 10, true);
  }

  getProducts(): Array<Product> {
    return [
      new Product(1, 'Product1', 10, true),
      new Product(2, 'Product2', 100, false),
      new Product(3, 'Product3', 55, true)
    ];
  }

}
