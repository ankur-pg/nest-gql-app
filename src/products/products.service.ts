import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(title: string, description: string, price: number) {
    const id = new Date().toISOString();
    const newProduct = new Product(id, title, description, price);
    this.products.push(newProduct);
  }
}
