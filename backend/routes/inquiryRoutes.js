const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');

// POST /api/inquiries
router.post('/', async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const inquiry = new Inquiry({
    firstName,
    lastName,
    email,
    subject,
    message
  });

  try {
    const newInquiry = await inquiry.save();
    res.status(201).json(newInquiry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
