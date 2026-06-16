const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  items: [{
    productName: { type: String, required: true },
    quantity: { type: Number, required: true, default: 1 },
    unit: { type: String, default: 'Kgs' },
    price: { type: Number }
  }],
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
