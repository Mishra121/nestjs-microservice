import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest_main', {
    autoCreate: true
  }), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
