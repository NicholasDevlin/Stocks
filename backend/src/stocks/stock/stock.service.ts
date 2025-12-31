import { Injectable, HttpException } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv';
import { StockCompanyProfileDto } from './dto/stockCompanyProfile.dto';
import { StockLatestPriceDto } from './dto/stockLatestPrice.dto';
import { StockPriceDto } from './dto/stockPrice.dto';
import { StockFilterDto } from './dto/stockFilter.dto';

dotenv.config();

@Injectable()
export class StockService {
  private readonly BASE_URL = 'https://fcsapi.com/api-v3/stock';
  private readonly API_KEY = process.env.FCS_API_KEY;

  async findAll(symbol?: string) {
    try {
      const url = `${this.BASE_URL}/list?country=indonesia&access_key=${this.API_KEY}`;
      const { data }: any = await axios.get(url);

      if (!data.status || !data.response?.length) {
        throw new HttpException('No data found', 404);
      }

      if (symbol) {
        data.response = data.response.filter((datum: any) => datum.short_name.toLowerCase().includes(symbol.toLowerCase()));
      }

      return data.response.slice(0, 50).map((datum: any): StockCompanyProfileDto => ({
        symbol: datum.short_name,
        name: datum.name,
        sector: datum.sector,
      }));
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async getCompanyProfiles(symbol: string) {
    try {
      const url = `${this.BASE_URL}/profile?symbol=${symbol}&access_key=${this.API_KEY}`;
      const { data }: any = await axios.get(url);

      if (!data.status) {
        throw new HttpException('No data found or invalid symbol', 404);
      }

      return data.response.map((datum: any): StockCompanyProfileDto => ({
        symbol: datum.symbol,
        name: datum.full_name,
        sector: datum.sector,
        info: datum.info,
      }));
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async getLatestPrice(symbol: string) {
    try {
      const url = `${this.BASE_URL}/latest?symbol=${symbol}&country=indonesia&access_key=${this.API_KEY}`;
      const { data }: any = await axios.get(url);

      if (!data.status || !data.response?.length) {
        throw new HttpException('No response found or invalid symbol', 404);
      }

      const response = data.response[0];

      return new StockLatestPriceDto({
        symbol: response.s,
        price: Number(response.c),
        change_price: Number(response.ch),
        change_percentage: response.cp,
      });
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async getHistoricalPrices(filter: StockFilterDto) {
    try {
      const url = `${this.BASE_URL}/history?symbol=${filter.symbol}&period=${filter.period}&access_key=${this.API_KEY}`;
      const { data }: any = await axios.get(url);

      if (!data.status) {
        throw new HttpException('No response found or invalid symbol', 404);
      }

      return Object.values(data.response).reduce((data: Record<string, StockPriceDto>, datum: any) => {
        data[datum.tm] = {
          symbol: filter.symbol,
          current_price: datum.c,
          timestamp: datum.t,
          datetime: datum.tm,
        };

        return data;
      }, {});
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
