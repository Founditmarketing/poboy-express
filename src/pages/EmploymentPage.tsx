import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Briefcase, Send, Mail, User, Map, Calendar, Users, Star, UploadCloud } from 'lucide-react';

export const EmploymentPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    startDate: '',
    location: '',
    training: '',
    heardAboutUs: ''
  });

  const [fileName, setFileName] = useState('No file selected');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('No file selected');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ 
        firstName: '', lastName: '', email: '', phone: '', address: '', city: '', 
        state: '', zip: '', startDate: '', location: '', training: '', heardAboutUs: '' 
      });
      setFileName('No file selected');
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans mb-0">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/poboyexpresspeople.jpg" 
            alt="Poboy Express Team" 
            className="w-full h-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 pt-20"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-1 bg-poboy-yellow"></div>
            <span className="text-poboy-yellow font-bold tracking-[0.2em] uppercase text-sm drop-shadow-md">Careers</span>
            <div className="w-12 h-1 bg-poboy-yellow"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-normal text-white uppercase tracking-tight drop-shadow-lg">
            Join Our <span className="text-poboy-red">Team</span>
          </h1>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="relative z-20 -mt-16 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-4/12 flex flex-col gap-6 lg:sticky lg:top-32 lg:self-start"
          >
            {/* Why Join Us Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-8 border-poboy-yellow hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-yellow-50 rounded-full group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>
              
              <h2 className="text-3xl font-display uppercase text-poboy-black mb-6 relative z-10 flex items-center gap-3">
                <Users className="text-poboy-yellow" size={28} />
                Work With Us
              </h2>
              
              <div className="space-y-6 relative z-10 text-gray-600 leading-relaxed text-sm font-medium">
                <p>We are a family-owned business proudly serving Central Louisiana since 1999. We believe in taking care of our team just as well as we take care of our customers.</p>
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
                    <Star className="text-poboy-yellow w-3 h-3" />
                  </div>
                  <p>Flexible scheduling and competitive pay in a fast-paced environment.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
                    <Star className="text-poboy-yellow w-3 h-3" />
                  </div>
                  <p>Employee meal discounts on our authentic Cajun menu items.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
                    <Star className="text-poboy-yellow w-3 h-3" />
                  </div>
                  <p>Career growth opportunities within our multiple locations.</p>
                </div>
              </div>
            </div>

            {/* Hiring Locations */}
            <div className="bg-poboy-black rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10 pointer-events-none w-32 h-32 translate-x-8 -translate-y-8">
                 <Briefcase className="w-full h-full text-white" />
              </div>
              <h2 className="text-2xl font-display uppercase mb-6 flex items-center gap-3 text-poboy-yellow">
                <MapPin size={24} />
                Hiring Locations
              </h2>
               <div className="space-y-4 relative z-10">
                <div className="bg-white/10 p-4 rounded-xl border border-white/5">
                  <h4 className="font-bold text-white mb-0.5">Alexandria</h4>
                  <p className="text-gray-300 text-sm">123 MacArthur Drive</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl border border-white/5">
                  <h4 className="font-bold text-white mb-0.5">Pineville</h4>
                  <p className="text-gray-300 text-sm">456 Military Hwy</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-8/12"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 h-full border border-gray-100 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full pointer-events-none"></div>
              
              <div className="mb-8 relative z-10">
                <h2 className="text-4xl font-display font-medium text-poboy-black mb-3 uppercase tracking-wide">Application Form</h2>
                <p className="text-gray-500 font-medium text-lg">Please fill out the details below. If you have a resume, you may attach it at the bottom.</p>
              </div>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex-1 flex flex-col items-center justify-center text-center py-12 relative z-10"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <Send size={32} />
                  </div>
                  <h3 className="text-3xl font-display font-medium text-poboy-black mb-3 drop-shadow-sm">Application Sent!</h3>
                  <p className="text-gray-500 max-w-sm text-lg leading-relaxed">Thank you for applying to Po'Boy Express. We will review your application and be in touch soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-5 relative z-10">
                  
                  {/* Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="firstName" className="text-sm font-bold text-gray-700 uppercase tracking-widest pl-1">First Name <span className="text-red-500">*</span></label>
                      <input
                        type="text" id="firstName" name="firstName" required value={formData.firstName} onChange={handleChange}
                        className="block w-full px-4 py-3 border-2 border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-poboy-red focus:ring-4 focus:ring-red-50 transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="lastName" className="text-sm font-bold text-gray-700 uppercase tracking-widest pl-1">Last Name <span className="text-red-500">*</span></label>
                      <input
                        type="text" id="lastName" name="lastName" required value={formData.lastName} onChange={handleChange}
                        className="block w-full px-4 py-3 border-2 border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-poboy-red focus:ring-4 focus:ring-red-50 transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Contact Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-bold text-gray-700 uppercase tracking-widest pl-1">Email <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Mail className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                          type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                          className="block w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-poboy-red focus:ring-4 focus:ring-red-50 transition-all font-medium"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-sm font-bold text-gray-700 uppercase tracking-widest pl-1">Phone Number <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Phone className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                          type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange}
                          className="block w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-poboy-red focus:ring-4 focus:ring-red-50 transition-all font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Address Row (Full width Address + Half City + Partial State/Zip) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="address" className="text-sm font-bold text-gray-700 uppercase tracking-widest pl-1">Address</label>
                      <input
                        type="text" id="address" name="address" required value={formData.address} onChange={handleChange}
                        className="block w-full px-4 py-3 border-2 border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-poboy-red focus:ring-4 focus:ring-red-50 transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="city" className="text-sm font-bold text-gray-700 uppercase tracking-widest pl-1">City</label>
                      <input
                        type="text" id="city" name="city" required value={formData.city} onChange={handleChange}
                        className="block w-full px-4 py-3 border-2 border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-poboy-red focus:ring-4 focus:ring-red-50 transition-all font-medium"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="state" className="text-sm font-bold text-gray-700 uppercase tracking-widest pl-1">State</label>
                      <input
                        type="text" id="state" name="state" required value={formData.state} onChange={handleChange}
                        className="block w-full px-4 py-3 border-2 border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-poboy-red focus:ring-4 focus:ring-red-50 transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="zip" className="text-sm font-bold text-gray-700 uppercase tracking-widest pl-1">Zip Code</label>
                      <input
                        type="text" id="zip" name="zip" required value={formData.zip} onChange={handleChange}
                        className="block w-full px-4 py-3 border-2 border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-poboy-red focus:ring-4 focus:ring-red-50 transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Dates & Location Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="startDate" className="text-sm font-bold text-gray-700 uppercase tracking-widest pl-1">Date You Can Start</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Calendar className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                          type="date" id="startDate" name="startDate" required value={formData.startDate} onChange={handleChange}
                          className="block w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-poboy-red focus:ring-4 focus:ring-red-50 transition-all font-medium appearance-none uppercase text-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="location" className="text-sm font-bold text-gray-700 uppercase tracking-widest pl-1">Desired Location</label>
                      <select
                        id="location" name="location" required value={formData.location} onChange={handleChange}
                        className="block w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-poboy-red focus:ring-4 focus:ring-red-50 transition-all font-medium appearance-none"
                        style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                      >
                        <option value="" disabled>Select Location</option>
                        <option value="Alexandria">Alexandria, LA</option>
                        <option value="Pineville">Pineville, LA</option>
                        <option value="Any">Either Location</option>
                      </select>
                    </div>
                  </div>

                  {/* Textarea */}
                  <div className="space-y-1.5 flex-1 flex flex-col">
                    <label htmlFor="training" className="text-sm font-bold text-gray-700 uppercase tracking-widest pl-1 mt-2">Give details regarding any special training or skills you have that would assist you with this job: <span className="text-red-500">*</span></label>
                    <textarea
                      id="training" name="training" required rows={5} value={formData.training} onChange={handleChange}
                      className="block w-full flex-1 px-4 py-4 border-2 border-gray-200 rounded-xl leading-relaxed bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-poboy-red focus:ring-4 focus:ring-red-50 transition-all font-medium resize-none shadow-sm"
                    />
                  </div>

                  {/* Source Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="heardAboutUs" className="text-sm font-bold text-gray-700 uppercase tracking-widest pl-1 mt-2">How did you hear about us?</label>
                    <select
                      id="heardAboutUs" name="heardAboutUs" required value={formData.heardAboutUs} onChange={handleChange}
                      className="block w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-poboy-red focus:ring-4 focus:ring-red-50 transition-all font-medium appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                    >
                      <option value="" disabled>Select Option</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Walk-in">Walk-in / Drove by</option>
                      <option value="Friend/Family">Friend / Family</option>
                      <option value="Indeed">Indeed</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* File Upload and Submit Row */}
                  <div className="flex flex-col sm:flex-row items-end justify-between mt-6 pt-6 border-t border-gray-100 gap-6">
                    <div className="w-full sm:w-auto">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-widest pl-1 block mb-2">Upload Resume (Optional)</label>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="bg-poboy-black hover:bg-gray-800 text-poboy-yellow font-display font-medium px-6 py-3 rounded-lg uppercase tracking-wider text-sm transition-colors flex items-center justify-center border-2 border-poboy-yellow/20 hover:border-poboy-yellow/50 w-full sm:w-auto"
                        >
                          <UploadCloud size={18} className="mr-2" /> Upload File
                        </button>
                        <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded truncate max-w-[200px]">
                          {fileName}
                        </span>
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-poboy-red hover:bg-red-700 text-white font-display font-medium text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>

                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
