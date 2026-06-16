const mongoose = require('mongoose');
require('dotenv').config();

const clearProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/vortexexim');
    const Product = mongoose.model('Product', new mongoose.Schema({}));
    await Product.deleteMany({});
    console.log('Products collection cleared successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Error clearing products:', error);
    process.exit(1);
  }
};

clearProducts();
