import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';

@Module({
    imports: [
        DatabaseModule,
        ProductsModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
}
