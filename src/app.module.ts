import { Module } from '@nestjs/common';
import { BuyerModule } from './buyer/buyer.module';
import { SellerModule } from './seller/seller.module';
import { TransportModule } from './transport/transport.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './product/product.module';

@Module({
  imports: [BuyerModule, SellerModule, TransportModule, AuthModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
