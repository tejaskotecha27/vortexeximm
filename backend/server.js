require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const catalogRoutes = require('./routes/catalogRoutes');
const inquiryRoutes = require('./routes/inquiryRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Logging middleware for debugging routes on Vercel
app.use((req, res, next) => {
  console.log(`[ROUTE LOG] Method: ${req.method} | URL: ${req.url} | Original: ${req.originalUrl}`);
  next();
});

app.use('/api', catalogRoutes);
app.use('/', catalogRoutes);

app.use('/api/products', productRoutes);
app.use('/products', productRoutes);

app.use('/api/orders', orderRoutes);
app.use('/orders', orderRoutes);

app.use('/api/inquiries', inquiryRoutes);
app.use('/inquiries', inquiryRoutes);

const path = require('path');
app.use(express.static(path.join(__dirname, '../dist')));

// For all other routes, serve index.html (client-side React routing fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const { MongoMemoryServer } = require('mongodb-memory-server');
const Product = require('./models/Product');
const { seedData } = require('./seed');

const connectDB = async () => {
  try {
    let mongoUri = process.env.MONGO_URI;
    
    if (!mongoUri || mongoUri.includes('127.0.0.1')) {
      try {
        console.log('Attempting connection to local MongoDB...');
        await mongoose.connect('mongodb://127.0.0.1:27017/vortexexim', { serverSelectionTimeoutMS: 2000 });
        console.log('Local MongoDB Connected');
      } catch (e) {
        console.log('Local MongoDB not running. Starting in-memory MongoDB...');
        const mongoServer = await MongoMemoryServer.create();
        mongoUri = mongoServer.getUri();
        await mongoose.connect(mongoUri);
        console.log(`In-Memory MongoDB Connected successfully at ${mongoUri}`);
      }
    } else {
      await mongoose.connect(mongoUri);
      console.log('Production MongoDB Connected');
    }
    
    // Auto-seed if empty or data mismatch
    const count = await Product.countDocuments();
    if (count !== seedData.length) {
      console.log(`Database count (${count}) mismatch with seed data (${seedData.length})! Re-seeding...`);
      await Product.deleteMany({});
      await Product.insertMany(seedData);
      console.log('Database Seeded Successfully!');
    }
    
    if (!process.env.VERCEL) {
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    }
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
  }
};

connectDB();

module.exports = app;
