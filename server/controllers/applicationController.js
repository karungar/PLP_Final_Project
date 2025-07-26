const asyncHandler = require('express-async-handler');
const Application = require('../models/applicationModel');
const Opportunity = require('../models/opportunityModel');

// @desc    Apply for an opportunity
// @route   POST /api/applications
// @access  Private
const createApplication = asyncHandler(async (req, res) => {
  const { opportunityId, coverLetter, resume, additionalDocuments } = req.body;

  // Check if opportunity exists
  const opportunity = await Opportunity.findById(opportunityId);
  if (!opportunity) {
    res.status(404);
    throw new Error('Opportunity not found');
  }

  // Check if user already applied
  const existingApplication = await Application.findOne({
    opportunity: opportunityId,
    applicant: req.user._id
  });

  if (existingApplication) {
    res.status(400);
    throw new Error('You have already applied for this opportunity');
  }

  const application = await Application.create({
    opportunity: opportunityId,
    applicant: req.user._id,
    coverLetter,
    resume,
    additionalDocuments
  });

  if (application) {
    res.status(201).json(application);
  } else {
    res.status(400);
    throw new Error('Invalid application data');
  }
});

// @desc    Get user applications
// @route   GET /api/applications/user
// @access  Private
const getUserApplications = asyncHandler(async (req, res) => {
  const applications = await Application.find({ applicant: req.user._id })
    .populate('opportunity', 'title organization type deadline')
    .sort({ createdAt: -1 });

  res.json(applications);
});

// @desc    Get applications for an opportunity
// @route   GET /api/applications/opportunity/:id
// @access  Private
const getOpportunityApplications = asyncHandler(async (req, res) => {
  const opportunity = await Opportunity.findById(req.params.id);

  // Check if opportunity exists
  if (!opportunity) {
    res.status(404);
    throw new Error('Opportunity not found');
  }

  // Check if user is authorized to view applications
  if (opportunity.createdBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
    res.status(403);
    throw new Error('Not authorized to view these applications');
  }

  const applications = await Application.find({ opportunity: req.params.id })
    .populate('applicant', 'name email profileImage')
    .sort({ createdAt: -1 });

  res.json(applications);
});

// @desc    Get application by ID
// @route   GET /api/applications/:id
// @access  Private
const getApplicationById = asyncHandler(async (req, res) => {
  const application = await Application.findById(req.params.id)
    .populate('opportunity', 'title organization type deadline')
    .populate('applicant', 'name email profileImage');

  if (!application) {
    res.status(404);
    throw new Error('Application not found');
  }

  // Check if user is authorized to view application
  const isAdmin = req.user.role === 'admin';
  const isApplicant = application.applicant._id.toString() === req.user._id.toString();
  const isOpportunityCreator = false;

  if (application.opportunity) {
    const opportunity = await Opportunity.findById(application.opportunity._id);
    if (opportunity && opportunity.createdBy.toString() === req.user._id.toString()) {
      isOpportunityCreator = true;
    }
  }

  if (!isAdmin && !isApplicant && !isOpportunityCreator) {
    res.status(403);
    throw new Error('Not authorized to view this application');
  }

  res.json(application);
});

// @desc    Update application status
// @route   PUT /api/applications/:id/status
// @access  Private
const updateApplicationStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;

  const application = await Application.findById(req.params.id);

  if (!application) {
    res.status(404);
    throw new Error('Application not found');
  }

  // Check if opportunity exists
  const opportunity = await Opportunity.findById(application.opportunity);
  if (!opportunity) {
    res.status(404);
    throw new Error('Opportunity not found');
  }

  // Check if user is authorized to update status
  if (opportunity.createdBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
    res.status(403);
    throw new Error('Not authorized to update this application');
  }

  application.status = status;
  application.notes = req.body.notes || application.notes;

  const updatedApplication = await application.save();

  res.json(updatedApplication);
});

// @desc    Withdraw application
// @route   DELETE /api/applications/:id
// @access  Private
const withdrawApplication = asyncHandler(async (req, res) => {
  const application = await Application.findById(req.params.id);

  if (!application) {
    res.status(404);
    throw new Error('Application not found');
  }

  // Check if user is the applicant
  if (application.applicant.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
    res.status(403);
    throw new Error('Not authorized to withdraw this application');
  }

  await application.remove();
  res.json({ message: 'Application withdrawn' });
});

module.exports = {
  createApplication,
  getUserApplications,
  getOpportunityApplications,
  getApplicationById,
  updateApplicationStatus,
  withdrawApplication
};