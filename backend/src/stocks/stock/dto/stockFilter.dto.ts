import { IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class StockFilterDto {
    @ApiProperty({ example: 'AAPL' })
    symbol: string;

    @IsOptional()
    @ApiPropertyOptional()
    period?: string = '1d';
}