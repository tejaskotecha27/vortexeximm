# VortexExim - Export/Import Business Website

A premium, modern export-import business website built using the MERN Stack. 

## Structure
- `/frontend` - React.js (Vite + Bootstrap)
- `/backend` - Node.js + Express.js + MongoDB

## Prerequisites
- Node.js installed
- MongoDB installed and running locally on `mongodb://127.0.0.1:27017/` (or update `.env` in backend with your Mongo URI string)

## Setup Instructions

### 1. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set your custom environment variables in `backend/.env`. Specifically update `WHATSAPP_NUMBER` with your number (Format with country code: `919876543210` without the `+`).
4. Start the server:
   ```bash
   npm run start
   # or for development:
   npx nodemon server.js
   ```

### 2. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```

## Features Complete
- 🌐 Premium Corporate Design via React Bootstrap & Custom CSS.
- 📱 Fully responsive UI (Home, About, Products, Product Details, Contact).
- 📦 Full REST API backed with Mongoose (Products & Orders).
- 🛒 Order System with Form validation & direct WhatsApp redirection.
- 🚀 Seamless deployment ready folders structure.
