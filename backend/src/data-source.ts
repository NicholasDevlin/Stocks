import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from './user/user.entity';
import { StockFavorite } from './stocks/favorite/stockFavorite.entity';

dotenv.config();

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT ?? 3306),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [User, StockFavorite],
    migrations: ['src/migrations/*.ts'],
});

// Generate migration: npm run typeorm -- migration:generate ./src/migrations/{migration-name} -d ./src/data-source.ts
// Run migration: npm run typeorm -- migration:run -d ./src/data-source.ts