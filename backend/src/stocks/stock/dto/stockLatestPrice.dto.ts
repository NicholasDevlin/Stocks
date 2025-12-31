export class StockLatestPriceDto {
  symbol: string;
  price: number;
  change_price: number;
  change_percentage: string;

  constructor(partial: Partial<StockLatestPriceDto>) {
    Object.assign(this, partial);
  }
}