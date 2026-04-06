import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Send, Mail, User, MessageSquare } from 'lucide-react';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans mb-0">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/poboyexpressrestaurant.jpeg" 
            alt="Poboy Express Restaurant" 
            className="w-full h-full object-cover object-center"
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
            <span className="text-poboy-yellow font-bold tracking-[0.2em] uppercase text-sm drop-shadow-md">Get In Touch</span>
            <div className="w-12 h-1 bg-poboy-yellow"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-normal text-white uppercase tracking-tight drop-shadow-lg">
            Contact <span className="text-poboy-red">Us</span>
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
            className="w-full lg:w-5/12 flex flex-col gap-6 lg:sticky lg:top-32 lg:self-start"
          >
            {/* Alexandria Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-8 border-poboy-red hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-red-50 rounded-full group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>
              
              <h2 className="text-3xl font-display uppercase text-poboy-black mb-6 relative z-10 flex items-center gap-3">
                <MapPin className="text-poboy-red" size={28} />
                Alexandria
              </h2>
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <MapPin className="text-poboy-red" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-0.5">Address</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">123 MacArthur Drive<br/>Alexandria, LA 71301</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <Phone className="text-poboy-red" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-0.5">Call to Order</h4>
                    <a href="tel:+13185550123" className="text-poboy-red hover:underline font-bold text-lg">(318) 555-0123</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Pineville Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-8 border-poboy-yellow hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-yellow-50 rounded-full group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>
              
              <h2 className="text-3xl font-display uppercase text-poboy-black mb-6 relative z-10 flex items-center gap-3">
                <MapPin className="text-poboy-yellow" size={28} />
                Pineville
              </h2>
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center shrink-0">
                    <MapPin className="text-poboy-yellow" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-0.5">Address</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">456 Military Hwy<br/>Pineville, LA 71360</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center shrink-0">
                    <Phone className="text-poboy-yellow" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-0.5">Call to Order</h4>
                    <a href="tel:+13185550456" className="text-poboy-black hover:text-poboy-yellow transition-colors font-bold text-lg hover:underline">(318) 555-0456</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-poboy-black rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10 pointer-events-none w-32 h-32 translate-x-8 -translate-y-8">
                 <Clock className="w-full h-full text-white" />
              </div>
              <h2 className="text-2xl font-display uppercase mb-6 flex items-center gap-3 text-poboy-yellow">
                <Clock size={24} />
                Hours of Operation
              </h2>
              <ul className="space-y-3 font-medium">
                <li className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-gray-300">Mon - Thurs</span>
                  <span>10:30 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-gray-300">Fri - Sat</span>
                  <span>10:30 AM - 9:00 PM</span>
                </li>
                <li className="flex justify-between items-center pt-1">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-poboy-red font-bold tracking-widest uppercase">Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-7/12"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 h-full border border-gray-100 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full pointer-events-none"></div>
              
              <div className="mb-8 relative z-10">
                <h2 className="text-4xl font-display font-medium text-poboy-black mb-3 uppercase tracking-wide">Drop us a line</h2>
                <p className="text-gray-500 font-medium text-lg">Have a question about catering or feedback about your visit? Send us a message!</p>
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
                  <h3 className="text-3xl font-display font-medium text-poboy-black mb-3 drop-shadow-sm">Message Sent!</h3>
                  <p className="text-gray-500 max-w-sm text-lg leading-relaxed">Thank you for reaching out to us. A member of the Po'Boy Express family will get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-5 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-bold text-gray-700 uppercase tracking-widest pl-1">Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="block w-full pl-11 pr-4 py-3.5 border-2 border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-poboy-red focus:ring-4 focus:ring-red-50 transition-all font-medium"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-sm font-bold text-gray-700 uppercase tracking-widest pl-1">Phone</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Phone className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="block w-full pl-11 pr-4 py-3.5 border-2 border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-poboy-red focus:ring-4 focus:ring-red-50 transition-all font-medium"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-bold text-gray-700 uppercase tracking-widest pl-1">Email <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full pl-11 pr-4 py-3.5 border-2 border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-poboy-red focus:ring-4 focus:ring-red-50 transition-all font-medium"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 flex-1 flex flex-col">
                    <label htmlFor="message" className="text-sm font-bold text-gray-700 uppercase tracking-widest pl-1">Message <span className="text-red-500">*</span></label>
                    <div className="relative flex-1 flex flex-col">
                      <div className="absolute top-4 left-0 pl-4 flex items-center pointer-events-none">
                        <MessageSquare className="h-4 w-4 text-gray-400" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="block w-full flex-1 pl-11 pr-4 py-3.5 border-2 border-gray-200 rounded-xl leading-relaxed bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-poboy-red focus:ring-4 focus:ring-red-50 transition-all font-medium resize-none shadow-sm"
                        placeholder="How can we help you?"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-poboy-red hover:bg-red-700 text-white font-display font-medium text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 uppercase tracking-widest mt-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <Send size={20} />}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
