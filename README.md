# 📈 Stocks Trading Platform

> A modern, full-stack stock trading platform built with NestJS, React, and MySQL. Track real-time stock prices, manage your portfolio, and save your favorite stocks with a sleek, professional interface.

<div align="center">

![Stock Trading](https://img.shields.io/badge/Stock-Trading-green?style=for-the-badge&logo=trendingup)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)

</div>

## 🚀 Features

### 📊 **Stock Management**
- **Real-time Stock Data**: Live stock prices and company profiles
- **Historical Data**: Access to historical stock price data with custom date ranges
- **Stock Search**: Search and filter stocks by symbol
- **Company Profiles**: Detailed company information and metrics

### ⭐ **Portfolio Management**
- **Favorites System**: Save and manage your favorite stocks
- **User Dashboard**: Personalized dashboard with portfolio overview
- **Stock Tracking**: Monitor your favorite stocks' performance

### 🔐 **Authentication & Security**
- **JWT Authentication**: Secure login with access and refresh tokens
- **User Registration**: Easy account creation process
- **Protected Routes**: Secure API endpoints and frontend routes
- **Password Encryption**: Bcrypt password hashing

### 🎨 **Modern UI/UX**
- **CoreUI Framework**: Professional admin template
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Interactive Charts**: Beautiful data visualizations
- **Toast Notifications**: Real-time user feedback

### 📚 **API Documentation**
- **Swagger Integration**: Interactive API documentation
- **Auto-generated Docs**: Complete endpoint documentation
- **Easy Testing**: Built-in API testing interface

## 🏗️ Tech Stack

### Backend
- **Framework**: NestJS (Node.js)
- **Language**: TypeScript
- **Database**: MySQL with TypeORM
- **Authentication**: JWT (Access & Refresh tokens)
- **Validation**: Class Validator
- **API Docs**: Swagger/OpenAPI

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite
- **UI Library**: CoreUI React
- **Styling**: SCSS
- **State Management**: Redux
- **Routing**: React Router DOM
- **HTTP Client**: Axios

### Infrastructure
- **Containerization**: Docker & Docker Compose
- **Database**: MySQL 8.0
- **Development**: Hot reload for both frontend and backend

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Docker & Docker Compose
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/NicholasDevlin/stocks.git
cd stocks
```

### 2. Environment Setup
Create environment variables for the backend:

```bash
# In the project root, create .env file
cp .env.example .env
```

Update the `.env` file with your configuration:
```env
# Database Configuration
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=your_db_user
DATABASE_PASSWORD=your_db_password
DATABASE_NAME=stocks_db
MYSQL_ROOT_PASSWORD=your_root_password

# Application
APP_PORT=3001

# JWT Configuration
JWT_ACCESS_SECRET=your_jwt_access_secret
JWT_REFRESH_SECRET=your_jwt_refresh_secret
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

# Stock API (if using external stock API)
STOCK_API_KEY=your_stock_api_key
```

### 3. Start with Docker (Recommended)
```bash
# Start the database
docker-compose up -d mysql

# Wait for MySQL to be ready (about 30 seconds)
# Then start the application
npm run start:dev
```

### 4. Manual Setup (Alternative)

#### Backend Setup
```bash
cd backend
npm install

# Run database migrations
npm run typeorm migration:run

# Start in development mode
npm run start:dev
```

#### Frontend Setup
```bash
cd frontend
npm install

# Start development server
npm start
```

## 🔧 Development

### Backend Development
```bash
cd backend

# Install dependencies
npm install

# Development mode with hot reload
npm run start:dev

# Build for production
npm run build

# Run tests
npm run test

# Run e2e tests
npm run test:e2e
```

### Frontend Development
```bash
cd frontend

# Install dependencies
npm install

# Development server
npm start

# Build for production
npm run build

# Preview production build
npm run serve
```

## 📖 API Documentation

Once the backend is running, visit:
- **Swagger UI**: http://localhost:3001/api/docs
- **API Base URL**: http://localhost:3001

### Key Endpoints

#### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - User login
- `GET /auth/profile` - Get user profile
- `GET /auth/refresh` - Refresh JWT tokens

#### Stocks
- `GET /stocks` - Get all stocks (with optional symbol filter)
- `GET /stocks/:symbol` - Get company profile for a stock
- `GET /stocks/latest-price/:symbol` - Get latest stock price
- `POST /stocks/historical-prices` - Get historical price data

#### Favorites
- `POST /stocks/favorites` - Add stock to favorites
- `GET /stocks/favorites/user` - Get user's favorite stocks
- `DELETE /stocks/favorites/:symbol` - Remove from favorites

## 🗄️ Database Schema

### Users Table
- User authentication and profile information
- Encrypted password storage
- JWT token management

### Stock Favorites Table
- User-specific favorite stocks
- Foreign key relationship to users
- Stock symbol tracking

### Migrations
The project includes TypeORM migrations for easy database setup:
- `InitSchema` - Initial database structure
- `CreateStockFavoritesTable` - Favorites functionality

## 🔑 Environment Variables

### Required Backend Variables
```env
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=stocks_user
DATABASE_PASSWORD=secure_password
DATABASE_NAME=stocks_db
MYSQL_ROOT_PASSWORD=root_password
APP_PORT=3001
JWT_ACCESS_SECRET=your-secret-key
JWT_REFRESH_SECRET=your-refresh-secret
```

### Frontend Variables
```env
VITE_API_URL=http://localhost:3001
```

## 🎯 Usage Examples

### Adding a Stock to Favorites
```javascript
// Frontend example
const addToFavorites = async (symbol) => {
  try {
    await stockFavoriteService.create({ symbol });
    showToast('Stock added to favorites!', 'success');
  } catch (error) {
    showToast('Error adding to favorites', 'error');
  }
};
```

### Fetching Stock Data
```javascript
// Get latest price
const price = await stockService.getLatestPrice('AAPL');

// Get historical data
const historicalData = await stockService.getHistoricalPrices({
  symbol: 'AAPL',
  from: '2024-01-01',
  to: '2024-12-31'
});
```

## 🧪 Testing

### Backend Tests
```bash
cd backend

# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

### API Testing
Use the Swagger UI at `http://localhost:3001/api/docs` for interactive API testing.

## 📁 Project Structure

```
stocks/
├── backend/                 # NestJS Backend
│   ├── src/
│   │   ├── auth/           # Authentication module
│   │   ├── stocks/         # Stock management
│   │   │   ├── stock/      # Stock data service
│   │   │   └── favorite/   # Favorites management
│   │   ├── user/           # User management
│   │   └── migrations/     # Database migrations
│   └── test/               # Test files
├── frontend/               # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── views/          # Page components
│   │   ├── services/       # API services
│   │   └── contexts/       # React contexts
│   └── public/             # Static assets
└── docker-compose.yml      # Docker configuration
```

## 🚀 Deployment

### Production Build

#### Backend
```bash
cd backend
npm run build
npm run start:prod
```

#### Frontend
```bash
cd frontend
npm run build
# Serve the dist/ folder with your preferred web server
```

### Docker Production
```bash
# Build and start all services
docker-compose up -d
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you have any questions or run into issues:

1. Check the [API Documentation](http://localhost:3001/api/docs)
2. Review the environment setup
3. Ensure Docker containers are running properly
4. Check the console logs for any errors

## 🔮 Future Enhancements

- [ ] Real-time WebSocket stock price updates
- [ ] Advanced charting with technical indicators
- [ ] Portfolio performance analytics
- [ ] Stock news integration
- [ ] Email notifications for price alerts
- [ ] Social features (following other traders)
- [ ] Mobile app (React Native)

---

<div align="center">

**Built with ❤️ by [Nicholas Devlin](https://github.com/NicholasDevlin)**

[⭐ Star this repo](https://github.com/NicholasDevlin/stocks) if you found it helpful!

</div>