import { Controller, Get, Post, Query, Param, Body } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockFilterDto } from './dto/stockFilter.dto';

@Controller('stocks')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  findAll(@Query('symbol') symbol?: string) {
    return this.stockService.findAll(symbol);
  }

  @Get(':symbol')
  async getStockCompanyProfiles(@Param('symbol') symbol: string) {
    return this.stockService.getCompanyProfiles(symbol);
  }

  @Get('/latest-price/:symbol')
  async getLatestPrice(@Param('symbol') symbol: string) {
    return this.stockService.getLatestPrice(symbol);
  }

  @Post('/historical-prices')
  async getHistoricalPrices(@Body() body: StockFilterDto) {
    return await this.stockService.getHistoricalPrices(body);
  }
}
