const mongoose = require('mongoose');

const opportunitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  type: {
    type: String,
    enum: ['job', 'scholarship', 'internship', 'event', 'other'],
    required: [true, 'Please specify the opportunity type']
  },
  location: {
    type: String,
    required: [true, 'Please add a location']
  },
  isRemote: {
    type: Boolean,
    default: false
  },
  organization: {
    type: String,
    required: [true, 'Please add the organization name']
  },
  deadline: {
    type: Date,
    required: false
  },
  requirements: {
    type: [String],
    required: false
  },
  link: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for applications
opportunitySchema.virtual('applications', {
  ref: 'Application',
  localField: '_id',
  foreignField: 'opportunity',
  justOne: false
});

module.exports = mongoose.model('Opportunity', opportunitySchema);