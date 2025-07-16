const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    trim: true
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
    trim: true
  },
  password: { 
    type: String, 
    required: true,
    minlength: 6
  },
  role: { 
    type: String, 
    enum: ['student', 'employer', 'admin'], 
    default: 'student' 
  },
  profile: {
    phone: String,
    location: {
      country: { type: String, default: 'Kenya' },
      city: String
    },
    skills: [String],
    experience: String,
    education: String,
    languageLevel: { 
      type: String, 
      enum: ['N5', 'N4', 'N3', 'N2', 'N1', 'Beginner'], 
      default: 'Beginner' 
    },
    resume: String,
    profileImage: String,
    interestedFields: [{
      type: String,
      enum: ['IT', 'Hospitality', 'Care Services', 'Language Schools', 'Graduate Studies', 'Undergraduate Studies']
    }],
    availability: {
      type: String,
      enum: ['Immediately', 'Within 1 month', 'Within 3 months', 'Within 6 months'],
      default: 'Within 3 months'
    }
  },
  isVerified: { 
    type: Boolean, 
    default: false 
  },
  isActive: { 
    type: Boolean, 
    default: true 
  }
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);