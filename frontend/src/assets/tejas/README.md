# ARB Accessories E-Commerce Website

A professional, modern e-commerce platform for ARB Accessories built with Django (REST Framework) and React.

## Features
- **Customer Side**:
  - Homepage with featured categories.
  - Product listing with search and category filters.
  - Product detail page with image gallery and specs.
  - Shopping cart with quantity management.
  - Checkout process (Cash on Delivery).
  - User profile with order history.
  - JWT Authentication.

- **Admin Side**:
  - Dashboard with key metrics (Total Orders, Products, Revenue).
  - Product management (CRUD).
  - Category management (CRUD).
  - Order management (Change status).

## Tech Stack
- **Backend**: Django, Django REST Framework, SimpleJWT, SQLite (configurable to PostgreSQL).
- **Frontend**: React, Bootstrap, Axios, Lucide React, Framer Motion.

## Setup Instructions

### Prerequisites
- Python 3.x
- Node.js & npm

### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run migrations:
   ```bash
   python manage.py migrate
   ```
4. Start the server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Default Credentials
- **Admin Username**: `admin`
- **Admin Password**: `admin`

## Database configuration
By default, the project uses SQLite for ease of setup. To use PostgreSQL, update the `DATABASES` setting in `backend/server/settings.py` with your credentials.
