# 📚 Library Management System

A comprehensive library management system built with **NestJS**, **TypeScript**, and **PostgreSQL**. This system provides a complete solution for managing books, authors, users, and book borrowing operations with secure authentication and authorization.

## 🚀 Features

### 🔐 Authentication & Authorization
- **User Registration & Login** with JWT tokens
- **Password encryption** using bcrypt
- **Protected routes** with JWT authentication guards
- **Role-based access control** for different operations

### 📖 Book Management
- **CRUD operations** for books (Create, Read, Update, Delete)
- **Book search and filtering** by author, genre, availability
- **ISBN validation** and uniqueness
- **Book categorization** by genre and publication date
- **Author-book relationships** management

### 👤 User Management
- **User profile management** with personal information
- **User registration and authentication**
- **User activity tracking** for borrowed books
- **User-specific book borrowing history**

### ✍️ Author Management
- **Author profile management** with biography and personal details
- **Author-book associations** and relationship tracking
- **Author search and filtering** capabilities
- **Author publication history** tracking

### 📋 Borrowing System
- **Book borrowing** with due date management
- **Book return** functionality with automatic timestamping
- **Borrowing history** tracking for users and books
- **Overdue book** detection and management
- **Borrowing status** monitoring

## 🛠️ Technology Stack

- **Backend Framework**: NestJS (Node.js)
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **Validation**: class-validator & class-transformer

## 📁 Project Structure

```
src/
├── auth/                 # Authentication module
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── auth.dto.ts
│   ├── jwt.strategy.ts
│   └── guards/           # JWT authentication guards
├── books/               # Book management module
│   ├── books.controller.ts
│   ├── books.service.ts
│   └── book.dto.ts
├── author/              # Author management module
│   ├── author.controller.ts
│   ├── author.service.ts
│   └── author.dto.ts
├── users/               # User management module
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.dto.ts
├── borrowed-books/      # Borrowing system module
│   ├── borrowed-books.controller.ts
│   ├── borrowed-books.service.ts
│   └── borrowed-books.dto.ts
├── prisma/              # Database configuration
│   └── prisma.service.ts
├── config/              # Application configuration
│   └── configuration.ts
├── app.module.ts        # Main application module
└── main.ts              # Application entry point
```

## 🗄️ Database Schema

The system uses PostgreSQL with the following main entities:

- **Users**: Library members with authentication credentials
- **Authors**: Book authors with biographical information
- **Books**: Library books with metadata and author relationships
- **BorrowedBooks**: Borrowing transactions with due dates and return tracking

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd library-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/library_db"
   JWT_SECRET="your-jwt-secret-key"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma migrate dev
   
   # (Optional) Seed the database
   npx prisma db seed
   ```

5. **Start the application**
   ```bash
   # Development mode
   npm run start:dev
   
   # Production mode
   npm run start:prod
   ```

The API will be available at `http://localhost:3000`

## 📚 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/auth/signup` | Register a new user | No |
| POST | `/auth/login` | Login user and get JWT token | No |

### Book Management

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/books` | Get all books (with optional filters) | Yes |
| GET | `/books/:id` | Get book by ID | Yes |
| GET | `/books/author/:authorId` | Get books by author | Yes |
| POST | `/books` | Create a new book | Yes |
| PATCH | `/books/:id` | Update book information | Yes |
| DELETE | `/books/:id` | Delete a book | Yes |

### Author Management

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/author` | Get all authors | Yes |
| GET | `/author/:id` | Get author by ID | Yes |
| GET | `/author/book/:bookId` | Get author by book ID | Yes |
| POST | `/author` | Create a new author | Yes |
| PATCH | `/author/:id` | Update author information | Yes |
| DELETE | `/author/:id` | Delete an author | Yes |

### User Management

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/users` | Get all users | Yes |
| GET | `/users/:id` | Get user by ID | Yes |
| POST | `/users` | Create a new user | Yes |
| PATCH | `/users/:id` | Update user information | Yes |
| DELETE | `/users/:id` | Delete a user | Yes |

### Borrowing System

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/borrowed-books` | Get all borrowing records | Yes |
| GET | `/borrowed-books/:id` | Get borrowing record by ID | Yes |
| GET | `/borrowed-books/user/:userId` | Get user's borrowing history | Yes |
| POST | `/borrowed-books/borrow` | Borrow a book | Yes |
| POST | `/borrowed-books/return` | Return a borrowed book | Yes |

## 🔧 Available Scripts

```bash
# Development
npm run start:dev          # Start in development mode with hot reload
npm run start:debug        # Start in debug mode

# Production
npm run build              # Build the application
npm run start:prod         # Start in production mode

# Testing
npm run test               # Run unit tests
npm run test:watch         # Run tests in watch mode
npm run test:cov           # Run tests with coverage
npm run test:e2e           # Run end-to-end tests

# Code Quality
npm run lint               # Run ESLint
npm run format             # Format code with Prettier

# Database
npx prisma generate        # Generate Prisma client
npx prisma migrate dev     # Run database migrations
npx prisma studio          # Open Prisma Studio (database GUI)
```

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Bcrypt encryption for user passwords
- **Input Validation**: Comprehensive validation using class-validator
- **Protected Routes**: JWT guards protecting sensitive endpoints
- **SQL Injection Protection**: Prisma ORM prevents SQL injection attacks