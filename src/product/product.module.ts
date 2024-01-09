import { Module } from '@nestjs/common';
import { ProductsController } from './product.controller';
import { ProductsService } from './product.service';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
