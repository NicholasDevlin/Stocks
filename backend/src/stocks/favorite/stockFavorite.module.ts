import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockFavoriteService } from './stockFavorite.service';
import { StockFavoriteController } from './stockFavorite.controller';
import { StockFavorite } from './stockFavorite.entity';

@Module({
    imports: [TypeOrmModule.forFeature([StockFavorite])],
    providers: [StockFavoriteService],
    controllers: [StockFavoriteController],
})
export class StockFavoriteModule {}