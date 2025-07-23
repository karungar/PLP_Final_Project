const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

// @desc    Create new contact message
// @route   POST /api/contacts
// @access  Public
const createContact = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    res.status(400);
    throw new Error('Please fill all required fields');
  }

  const contact = await Contact.create({
    name,
    email,
    subject,
    message
  });

  if (contact) {
    res.status(201).json({ success: true, message: 'Message sent successfully' });
  } else {
    res.status(400);
    throw new Error('Invalid contact data');
  }
});

// @desc    Get all contact messages
// @route   GET /api/contacts
// @access  Private/Admin
const getContacts = asyncHandler(async (req, res) => {
  const pageSize = 20;
  const page = Number(req.query.page) || 1;

  // Build filter object
  const filter = {};
  
  if (req.query.isRead !== undefined) {
    filter.isRead = req.query.isRead === 'true';
  }

  // Get total count
  const count = await Contact.countDocuments(filter);

  // Get contacts with pagination
  const contacts = await Contact.find(filter)
    .sort({ createdAt: -1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({
    contacts,
    page,
    pages: Math.ceil(count / pageSize),
    total: count
  });
});

// @desc    Get contact by ID
// @route   GET /api/contacts/:id
// @access  Private/Admin
const getContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (contact) {
    res.json(contact);
  } else {
    res.status(404);
    throw new Error('Contact not found');
  }
});

// @desc    Mark contact as read
// @route   PUT /api/contacts/:id/read
// @access  Private/Admin
const markContactAsRead = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (contact) {
    contact.isRead = true;
    
    const updatedContact = await contact.save();
    res.json(updatedContact);
  } else {
    res.status(404);
    throw new Error('Contact not found');
  }
});

// @desc    Delete contact
// @route   DELETE /api/contacts/:id
// @access  Private/Admin
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (contact) {
    await contact.remove();
    res.json({ message: 'Contact removed' });
  } else {
    res.status(404);
    throw new Error('Contact not found');
  }
});

module.exports = {
  createContact,
  getContacts,
  getContactById,
  markContactAsRead,
  deleteContact
};