export class StockCompanyProfileDto {
  symbol: string;
  name: string;
  sector: string;
  info?: object;

  constructor(partial: Partial<StockCompanyProfileDto>) {
    Object.assign(this, partial);
  }
}