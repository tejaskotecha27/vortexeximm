const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Get all orders (admin)
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create an order
router.post('/', async (req, res) => {
  const { customerName, phone, email, items, message } = req.body;

  if (!customerName || !phone || !email || !items || items.length === 0) {
    return res.status(400).json({ message: 'All required fields must be provided, including items' });
  }

  const order = new Order({
    customerName,
    phone,
    email,
    items,
    message
  });

  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
