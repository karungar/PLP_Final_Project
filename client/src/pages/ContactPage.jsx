import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };
  
  return (
    <div className="min-h-screen pt-16 bg-paper">
      {/* Hero Section with Cultural Background */}
      <section className="relative bg-gradient-to-r from-jp-indigo to-jp-slate text-white">
        {/* Kente Pattern (African) */}
        <div className="absolute inset-0 bg-repeat opacity-10" style={{ 
          backgroundImage: `linear-gradient(45deg, #e67e22 25%, transparent 25%, transparent 75%, #e67e22 75%, #e67e22),
          linear-gradient(45deg, #e67e22 25%, transparent 25%, transparent 75%, #e67e22 75%, #e67e22)`,
          backgroundSize: `40px 40px`,
          backgroundPosition: `0 0, 20px 20px`
        }}></div>
        
        {/* Washi Pattern (Japanese) */}
        <div className="absolute inset-0 bg-repeat opacity-20" style={{ 
          backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 2px, transparent 2px, transparent 4px)`,
          backgroundSize: `20px 20px`
        }}></div>
        
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block">
                Contact{' '}
                <span className="text-[#E6AF2E]">Afri</span>
                <span className="text-[#BC002D]">Bridge</span>
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We're here to answer your questions and help you connect with opportunities
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-paper relative">
        {/* Washi-inspired background pattern */}
        <div className="absolute inset-0 bg-repeat opacity-10" style={{ 
          backgroundImage: `repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 2px, transparent 2px, transparent 4px)`,
          backgroundSize: `20px 20px`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Office Location */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-2 bg-gradient-to-r from-afri-red via-afri-yellow to-jp-red"></div>
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-jp-indigo/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-jp-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                <address className="text-gray-600 not-italic">
                  Tokyo Office<br />
                  Shibuya Crossing, 4F<br />
                  Shibuya, Tokyo 150-0002<br />
                  Japan
                </address>
                <div className="mt-4 border-t border-gray-200 pt-4 w-full">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
               </div>
            </motion.div>

            {/* Phone */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-2 bg-gradient-to-r from-afri-red via-afri-yellow to-jp-red"></div>
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-jp-indigo/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-jp-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-2">
                  We're available during business hours to assist you.
                </p>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Japan:</span><br />
                    <a href="tel:+81312345678" className="text-jp-indigo hover:text-jp-slate">+81 3-1234-5678</a>
                  </p>
                  <p>
                    <span className="font-medium">International:</span><br />
                    <a href="tel:+16175551234" className="text-jp-indigo hover:text-jp-slate">+1 617-555-1234</a>
                  </p>
                </div>
                <div className="mt-4 border-t border-gray-200 pt-4 w-full">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Support Hours</h4>
                  <p className="text-gray-600">
                    24/7 Email Support<br />
                    Phone Support: 9:00 AM - 8:00 PM (JST)
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-2 bg-gradient-to-r from-afri-red via-afri-yellow to-jp-red"></div>
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-jp-indigo/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-jp-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-2">
                  Reach out to the appropriate department for faster assistance.
                </p>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">General Inquiries:</span><br />
                    <a href="mailto:info@afribridge.com" className="text-jp-indigo hover:text-jp-slate">info@afribridge.com</a>
                  </p>
                  <p>
                    <span className="font-medium">Business Partnerships:</span><br />
                    <a href="mailto:partnerships@afribridge.com" className="text-jp-indigo hover:text-jp-slate">partnerships@afribridge.com</a>
                  </p>
                  <p>
                    <span className="font-medium">Support:</span><br />
                    <a href="mailto:support@afribridge.com" className="text-jp-indigo hover:text-jp-slate">support@afribridge.com</a>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50 relative">
        {/* African Kente-inspired background pattern */}
        <div className="absolute inset-0 bg-repeat opacity-5" style={{ 
          backgroundImage: `linear-gradient(45deg, #e67e22 25%, transparent 25%, transparent 75%, #e67e22 75%, #e67e22),
          linear-gradient(45deg, #e67e22 25%, transparent 25%, transparent 75%, #e67e22 75%, #e67e22)`,
          backgroundSize: `40px 40px`,
          backgroundPosition: `0 0, 20px 20px`
        }}></div>
        
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-lg text-gray-600">
              Have questions or want to discuss opportunities? Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {submitSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-md p-4 text-center">
                <svg className="w-12 h-12 text-green-500 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Message Sent Successfully!</h3>
                <p className="text-gray-600">
                  Thank you for contacting us. We'll respond to your message as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-jp-indigo focus:border-jp-indigo ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-jp-indigo focus:border-jp-indigo ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-jp-indigo focus:border-jp-indigo ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="How can we help you?"
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-jp-indigo focus:border-jp-indigo ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
                
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 text-white font-medium rounded-md transition duration-300 ${
                      isSubmitting
                        ? 'bg-jp-indigo/70 cursor-not-allowed'
                        : 'bg-jp-indigo hover:bg-jp-slate'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
     <section className="py-16 bg-paper relative">
        {/* Washi-inspired background pattern */}
        <div className="absolute inset-0 bg-repeat opacity-10" style={{ 
          backgroundImage: `repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 2px, transparent 2px, transparent 4px)`,
          backgroundSize: `20px 20px`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're located in the heart of Shibuya, Tokyo. Feel free to stop by during our office hours!
            </p>
          </motion.div>
          
          <motion.div 
            className="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* This would be a real map in production */}
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-600 text-lg">
                  Map would be displayed here
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 relative">
        {/* Cultural Fusion Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ 
          background: `repeating-linear-gradient(45deg, 
            rgba(230, 126, 34, 0.1) 0px, rgba(230, 126, 34, 0.1) 10px, 
            rgba(0, 0, 0, 0.05) 10px, rgba(0, 0, 0, 0.05) 20px)`
        }}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find quick answers to common questions
            </p>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">What is AfriBridge?</h3>
              <p className="text-gray-600">
                AfriBridge is a platform dedicated to fostering connections between Africa and Japan through cultural exchange, business partnerships, and talent development opportunities.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">How can I join AfriBridge?</h3>
              <p className="text-gray-600">
                You can create an account on our platform to access opportunities, connect with professionals, and participate in our community. Registration is free and takes only a few minutes.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Do you offer services for businesses?</h3>
              <p className="text-gray-600">
                Yes, we offer various services for businesses including market entry consultation, partnership matchmaking, talent recruitment, and cultural training programs. Contact our business partnerships team for more information.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">How quickly can I expect a response to my inquiry?</h3>
              <p className="text-gray-600">
                We strive to respond to all inquiries within 24-48 hours during business days. For urgent matters, please call our office directly.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;