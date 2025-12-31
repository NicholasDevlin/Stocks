export class StockFavoriteDto {
    user_id: number;
    symbol: string;

    constructor(partial: Partial<StockFavoriteDto>) {
        Object.assign(this, partial);
    }
}