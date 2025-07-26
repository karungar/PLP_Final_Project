const asyncHandler = require('../utils/asyncHandler');
const Talent = require('../models/talentModel');
const User = require('../models/userModel');

/**
 * @desc    Create or update a talent profile
 * @route   POST /api/talents
 * @access  Private
 */
const createOrUpdateTalent = asyncHandler(async (req, res) => {
  // Check if the user already has a talent profile
  let talent = await Talent.findOne({ user: req.user._id });

  const {
    title,
    skills,
    experience,
    education,
    languages,
    portfolio,
    linkedin,
    github,
    available,
    location,
    bio,
  } = req.body;

  const talentFields = {
    user: req.user._id,
    title,
    skills: Array.isArray(skills) ? skills : skills.split(',').map(skill => skill.trim()),
    experience,
    education,
    languages: Array.isArray(languages) ? languages : languages.split(',').map(lang => lang.trim()),
    portfolio,
    linkedin,
    github,
    available,
    location,
    bio,
  };

  if (talent) {
    // Update existing profile
    talent = await Talent.findOneAndUpdate(
      { user: req.user._id },
      { $set: talentFields },
      { new: true }
    ).populate('user', 'name email');

    res.json(talent);
  } else {
    // Create new profile
    talent = new Talent(talentFields);
    await talent.save();
    talent = await Talent.findById(talent._id).populate('user', 'name email');
    res.status(201).json(talent);
  }
});

/**
 * @desc    Get all talents
 * @route   GET /api/talents
 * @access  Public
 */
const getTalents = asyncHandler(async (req, res) => {
  // Implement pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  // Implement filtering
  const filter = { approved: true };
  
  if (req.query.skills) {
    const skillsArray = req.query.skills.split(',').map(skill => skill.trim());
    filter.skills = { $in: skillsArray };
  }
  
  if (req.query.available === 'true') {
    filter.available = true;
  }

  if (req.query.location) {
    filter.location = { $regex: req.query.location, $options: 'i' };
  }

  // Execute query with pagination
  const talents = await Talent.find(filter)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .populate('user', 'name email country');

  // Get total count for pagination info
  const total = await Talent.countDocuments(filter);

  res.json({
    talents,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
    },
  });
});

/**
 * @desc    Get talent profile by ID
 * @route   GET /api/talents/:id
 * @access  Public
 */
const getTalentById = asyncHandler(async (req, res) => {
  const talent = await Talent.findById(req.params.id)
    .populate('user', 'name email country');

  if (talent) {
    res.json(talent);
  } else {
    res.status(404);
    throw new Error('Talent profile not found');
  }
});

/**
 * @desc    Get current user's talent profile
 * @route   GET /api/talents/me
 * @access  Private
 */
const getMyTalent = asyncHandler(async (req, res) => {
  const talent = await Talent.findOne({ user: req.user._id })
    .populate('user', 'name email country');

  if (talent) {
    res.json(talent);
  } else {
    res.status(404);
    throw new Error('Talent profile not found');
  }
});

/**
 * @desc    Delete talent profile
 * @route   DELETE /api/talents/me
 * @access  Private
 */
const deleteTalent = asyncHandler(async (req, res) => {
  const talent = await Talent.findOne({ user: req.user._id });

  if (!talent) {
    res.status(404);
    throw new Error('Talent profile not found');
  }

  await talent.deleteOne();
  res.json({ message: 'Talent profile removed' });
});

/**
 * @desc    Approve talent profile (admin only)
 * @route   PUT /api/talents/:id/approve
 * @access  Private/Admin
 */
const approveTalent = asyncHandler(async (req, res) => {
  const talent = await Talent.findById(req.params.id);

  if (!talent) {
    res.status(404);
    throw new Error('Talent profile not found');
  }

  talent.approved = true;
  const updatedTalent = await talent.save();
  res.json(updatedTalent);
});

/**
 * @desc    Get featured talents
 * @route   GET /api/talents/featured
 * @access  Public
 */
const getFeaturedTalents = asyncHandler(async (req, res) => {
  const talents = await Talent.find({ featured: true, approved: true })
    .sort({ createdAt: -1 })
    .limit(5)
    .populate('user', 'name country');

  res.json(talents);
});

module.exports = {
  createOrUpdateTalent,
  getTalents,
  getTalentById,
  getMyTalent,
  deleteTalent,
  approveTalent,
  getFeaturedTalents,
};