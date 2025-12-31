import { Controller, Post, Get, Req, Body, Param, UseGuards, Delete } from '@nestjs/common';
import { StockFavoriteService } from './stockFavorite.service';
import { StockFavoriteDto } from './dto/stockFavorite.dto';
import { JwtAccessGuard } from 'src/auth/guards/jwt-access.guard';

@UseGuards(JwtAccessGuard)
@Controller('stocks/favorites')
export class StockFavoriteController {
    constructor(private readonly stockFavoriteService: StockFavoriteService) {}

    @Post()
    async create(@Req() req: any, @Body() body: StockFavoriteDto) {
        const user = req.user;

        return await this.stockFavoriteService.create({ ...body, user_id: user.id });
    }

    @Get('user')
    async findAllByUser(@Req() req: any) {
        const user = req.user;

        return await this.stockFavoriteService.findAllByUserId(user.id);
    }

    @Delete(':symbol')
    async delete(@Req() req: any, @Param('symbol') symbol: string): Promise<void> {
        const user = req.user;

        await this.stockFavoriteService.deleteByUserIdAndSymbol(new StockFavoriteDto({ symbol, user_id: user.id }));
    }
}