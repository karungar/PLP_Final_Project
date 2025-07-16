const express = require('express');
const Application = require('../models/Application');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Get user's applications
router.get('/my-applications', protect, authorize('student'), async (req, res) => {
  try {
    const applications = await Application.find({ applicant: req.user._id })
      .populate('job', 'title company category location status')
      .sort({ createdAt: -1 });

    res.json(applications);
  } catch (error) {
    console.error('Get applications error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update application status (for employers)
router.put('/:id/status', protect, authorize('employer', 'admin'), async (req, res) => {
  try {
    const { status, notes } = req.body;
    const application = await Application.findById(req.params.id)
      .populate('job', 'postedBy');

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    // Check if user owns the job or is admin
    if (application.job.postedBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to update this application' });
    }

    application.status = status;
    application.notes = notes;
    application.reviewedBy = req.user._id;
    application.reviewedAt = new Date();

    await application.save();

    res.json({ message: 'Application status updated successfully' });
  } catch (error) {
    console.error('Update application error:', error);
    res.status(500).json({ message: 'Server error during application update' });
  }
});

module.exports = router;