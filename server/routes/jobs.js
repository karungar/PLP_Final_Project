// const express = require('express');
// const Job = require('../models/Job');
// const Application = require('../models/Application');
// const { protect, authorize } = require('../middleware/auth');

// const router = express.Router();

// // Get all jobs (public)
// router.get('/', async (req, res) => {
//   try {
//     const { category, location, level, search } = req.query;
//     let query = { status: 'active' };

//     // Apply filters
//     if (category) query.category = category;
//     if (location) query['location.prefecture'] = new RegExp(location, 'i');
//     if (level) query.languageRequirement = level;
//     if (search) {
//       query.$or = [
//         { title: new RegExp(search, 'i') },
//         { description: new RegExp(search, 'i') },
//         { company: new RegExp(search, 'i') }
//       ];
//     }

//     const jobs = await Job.find(query)
//       .populate('postedBy', 'name email')
//       .sort({ createdAt: -1 });

//     res.json(jobs);
//   } catch (error) {
//     console.error('Get jobs error:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Get single job
// router.get('/:id', async (req, res) => {
//   try {
//     const job = await Job.findById(req.params.id)
//       .populate('postedBy', 'name email');

//     if (!job) {
//       return res.status(404).json({ message: 'Job not found' });
//     }

//     res.json(job);
//   } catch (error) {
//     console.error('Get job error:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Create job (employers only)
// router.post('/', protect, authorize('employer', 'admin'), async (req, res) => {
//   try {
//     const job = new Job({
//       ...req.body,
//       postedBy: req.user._id
//     });

//     const createdJob = await job.save();
//     res.status(201).json(createdJob);
//   } catch (error) {
//     console.error('Create job error:', error);
//     res.status(500).json({ message: 'Server error during job creation' });
//   }
// });

// // Update job
// router.put('/:id', protect, authorize('employer', 'admin'), async (req, res) => {
//   try {
//     const job = await Job.findById(req.params.id);

//     if (!job) {
//       return res.status(404).json({ message: 'Job not found' });
//     }

//     // Check if user owns the job or is admin
//     if (job.postedBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
//       return res.status(403).json({ message: 'Not authorized to update this job' });
//     }

//     Object.assign(job, req.body);
//     const updatedJob = await job.save();
//     res.json(updatedJob);
//   } catch (error) {
//     console.error('Update job error:', error);
//     res.status(500).json({ message: 'Server error during job update' });
//   }
// });

// // Delete job
// router.delete('/:id', protect, authorize('employer', 'admin'), async (req, res) => {
//   try {
//     const job = await Job.findById(req.params.id);

//     if (!job) {
//       return res.status(404).json({ message: 'Job not found' });
//     }

//     if (job.postedBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
//       return res.status(403).json({ message: 'Not authorized to delete this job' });
//     }

//     await job.deleteOne();
//     res.json({ message: 'Job deleted successfully' });
//   } catch (error) {
//     console.error('Delete job error:', error);
//     res.status(500).json({ message: 'Server error during job deletion' });
//   }
// });

// // Apply for job
// router.post('/:id/apply', protect, authorize('student'), async (req, res) => {
//   try {
//     const { coverLetter, resume } = req.body;
//     const job = await Job.findById(req.params.id);

//     if (!job) {
//       return res.status(404).json({ message: 'Job not found' });
//     }

//     // Check if already applied
//     const existingApplication = await Application.findOne({
//       job: req.params.id,
//       applicant: req.user._id
//     });

//     if (existingApplication) {
//       return res.status(400).json({ message: 'You have already applied for this job' });
//     }

//     const application = new Application({
//       job: req.params.id,
//       applicant: req.user._id,
//       coverLetter,
//       resume
//     });

//     await application.save();

//     // Update job application count
//     job.applicationsCount += 1;
//     await job.save();

//     res.status(201).json({ message: 'Application submitted successfully' });
//   } catch (error) {
//     console.error('Job application error:', error);
//     res.status(500).json({ message: 'Server error during job application' });
//   }
// });

// // Get job applications (for employers)
// router.get('/:id/applications', protect, authorize('employer', 'admin'), async (req, res) => {
//   try {
//     const job = await Job.findById(req.params.id);

//     if (!job) {
//       return res.status(404).json({ message: 'Job not found' });
//     }

//     if (job.postedBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
//       return res.status(403).json({ message: 'Not authorized to view applications' });
//     }

//     const applications = await Application.find({ job: req.params.id })
//       .populate('applicant', 'name email profile')
//       .sort({ createdAt: -1 });

//     res.json(applications);
//   } catch (error) {
//     console.error('Get applications error:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;