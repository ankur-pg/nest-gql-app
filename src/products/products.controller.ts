import { Controller, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  addProduct(): any {
    this.productsService.insertProduct('ProdA', 'New Launch', 300);
  }
}
