import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StockFavorite } from './stockFavorite.entity';
import { StockFavoriteDto } from './dto/stockFavorite.dto';

@Injectable()
export class StockFavoriteService {
    constructor(
        @InjectRepository(StockFavorite)
        private readonly stockFavoriteRepository: Repository<StockFavorite>,
    ) {}

    async create(data: StockFavoriteDto): Promise<StockFavorite> {
        const favorite = this.stockFavoriteRepository.create(data);

        return await this.stockFavoriteRepository.save(favorite);
    }

    async findAllByUserId(user_id: number): Promise<Record<string, StockFavoriteDto>> {
        const favorites = await this.stockFavoriteRepository.find({ where: { user_id } });

        return favorites.reduce((favorites, favorite) => {
            favorites[favorite.symbol] = { symbol: favorite.symbol, user_id: favorite.user_id };

            return favorites;
        }, {} as Record<string, StockFavoriteDto>);
    }

    async deleteByUserIdAndSymbol(data: StockFavoriteDto): Promise<void> {
        await this.stockFavoriteRepository.delete(data);
    }
}
