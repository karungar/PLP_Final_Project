const asyncHandler = require('../utils/asyncHandler');
const Opportunity = require('../models/opportunityModel');
const User = require('../models/userModel');

/**
 * @desc    Create a new opportunity
 * @route   POST /api/opportunities
 * @access  Private/Admin
 */
const createOpportunity = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    type,
    location,
    organization,
    requirements,
    deadline,
    link,
    contactEmail,
  } = req.body;

  const opportunity = await Opportunity.create({
    title,
    description,
    type,
    location,
    organization,
    requirements,
    deadline: deadline ? new Date(deadline) : undefined,
    link,
    contactEmail,
    createdBy: req.user._id,
  });

  if (opportunity) {
    res.status(201).json(opportunity);
  } else {
    res.status(400);
    throw new Error('Invalid opportunity data');
  }
});

/**
 * @desc    Get all opportunities
 * @route   GET /api/opportunities
 * @access  Public
 */
const getOpportunities = asyncHandler(async (req, res) => {
  // Implement pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  // Implement filtering
  const filter = {};
  
  if (req.query.type) {
    filter.type = req.query.type;
  }
  
  if (req.query.location) {
    filter.location = { $regex: req.query.location, $options: 'i' };
  }

  // Execute query with pagination
  const opportunities = await Opportunity.find(filter)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .populate('createdBy', 'name');

  // Get total count for pagination info
  const total = await Opportunity.countDocuments(filter);

  res.json({
    opportunities,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
    },
  });
});

/**
 * @desc    Get opportunity by ID
 * @route   GET /api/opportunities/:id
 * @access  Public
 */
const getOpportunityById = asyncHandler(async (req, res) => {
  const opportunity = await Opportunity.findById(req.params.id)
    .populate('createdBy', 'name email');

  if (opportunity) {
    res.json(opportunity);
  } else {
    res.status(404);
    throw new Error('Opportunity not found');
  }
});

/**
 * @desc    Get opportunities created by the current user
 * @route   GET /api/opportunities/user
 * @access  Private
 */
const getUserOpportunities = asyncHandler(async (req, res) => {
  const opportunities = await Opportunity.find({ createdBy: req.user._id })
    .sort({ createdAt: -1 })
    .populate('createdBy', 'name');
    
  res.json(opportunities);
});

/**
 * @desc    Update opportunity
 * @route   PUT /api/opportunities/:id
 * @access  Private/Admin
 */
const updateOpportunity = asyncHandler(async (req, res) => {
  const opportunity = await Opportunity.findById(req.params.id);

  if (!opportunity) {
    res.status(404);
    throw new Error('Opportunity not found');
  }

  const {
    title,
    description,
    type,
    location,
    organization,
    requirements,
    deadline,
    link,
    contactEmail,
    isActive,
  } = req.body;

  opportunity.title = title || opportunity.title;
  opportunity.description = description || opportunity.description;
  opportunity.type = type || opportunity.type;
  opportunity.location = location || opportunity.location;
  opportunity.organization = organization || opportunity.organization;
  opportunity.requirements = requirements || opportunity.requirements;
  opportunity.deadline = deadline ? new Date(deadline) : opportunity.deadline;
  opportunity.link = link || opportunity.link;
  opportunity.contactEmail = contactEmail || opportunity.contactEmail;
  
  // Only update isActive if it's provided
  if (isActive !== undefined) {
    opportunity.isActive = isActive;
  }

  const updatedOpportunity = await opportunity.save();
  res.json(updatedOpportunity);
});

/**
 * @desc    Delete opportunity
 * @route   DELETE /api/opportunities/:id
 * @access  Private/Admin
 */
const deleteOpportunity = asyncHandler(async (req, res) => {
  const opportunity = await Opportunity.findById(req.params.id);

  if (!opportunity) {
    res.status(404);
    throw new Error('Opportunity not found');
  }

  await opportunity.deleteOne();
  res.json({ message: 'Opportunity removed' });
});

/**
 * @desc    Get featured opportunities
 * @route   GET /api/opportunities/featured
 * @access  Public
 */
const getFeaturedOpportunities = asyncHandler(async (req, res) => {
  const opportunities = await Opportunity.find({ isFeatured: true, isActive: true })
    .sort({ createdAt: -1 })
    .limit(5)
    .populate('createdBy', 'name');

  res.json(opportunities);
});

module.exports = {
  createOpportunity,
  getOpportunities,
  getOpportunityById,
  updateOpportunity,
  deleteOpportunity,
  getFeaturedOpportunities,
  getUserOpportunities
};