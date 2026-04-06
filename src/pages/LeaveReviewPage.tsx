import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, ExternalLink, Star } from 'lucide-react';

export const LeaveReviewPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans mb-0">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/poboyexpressrestaurant.jpeg" 
            alt="Poboy Express Locations" 
            className="w-full h-full object-cover object-[center_70%]"
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
            <span className="text-poboy-yellow font-bold tracking-[0.2em] uppercase text-sm drop-shadow-md">We Value Your Feedback</span>
            <div className="w-12 h-1 bg-poboy-yellow"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-normal text-white uppercase tracking-tight drop-shadow-lg mb-6">
            Leave A <span className="text-poboy-red">Review</span>
          </h1>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <Star key={i} className="text-white w-6 h-6 md:w-8 md:h-8" />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="relative z-20 py-20 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-medium text-poboy-black mb-4 uppercase tracking-wide">Select Your Location</h2>
          <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">Please select the location you visited so we can ensure your feedback reaches the right team. We appreciate your time!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Alexandria Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex"
          >
            <a 
              href="https://order.toasttab.com/online/po-boy-express-alexandria-1305-windsor-pl"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden bg-white hover:bg-poboy-yellow border-4 border-white hover:border-poboy-yellow text-poboy-black font-display font-normal px-10 py-16 rounded-xl transition-all shadow-xl hover:shadow-2xl w-full flex flex-col items-center justify-center text-center gap-4 transform hover:-translate-y-1 h-full"
            >
              <MapPin size={48} className="text-poboy-red group-hover:text-poboy-black transition-colors mb-2" />
              <h2 className="text-4xl md:text-5xl uppercase tracking-tighter">Alexandria</h2>
              <p className="text-gray-500 group-hover:text-gray-800 font-sans font-medium text-lg leading-relaxed mt-2 mb-4 transition-colors">
                123 MacArthur Drive<br />
                Alexandria, LA 71301
              </p>
              <div className="flex items-center gap-2 text-sm font-sans tracking-widest text-white bg-poboy-red group-hover:bg-poboy-black px-6 py-3 rounded-full transition-colors uppercase font-bold mt-auto shadow-md">
                Write Review <ExternalLink size={16} />
              </div>
            </a>
          </motion.div>

          {/* Pineville Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex"
          >
            <a 
              href="https://order.toasttab.com/online/po-boy-express-pineville-1323-military-hwy"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden bg-white hover:bg-poboy-yellow border-4 border-white hover:border-poboy-yellow text-poboy-black font-display font-normal px-10 py-16 rounded-xl transition-all shadow-xl hover:shadow-2xl w-full flex flex-col items-center justify-center text-center gap-4 transform hover:-translate-y-1 h-full"
            >
              <MapPin size={48} className="text-poboy-red group-hover:text-poboy-black transition-colors mb-2" />
              <h2 className="text-4xl md:text-5xl uppercase tracking-tighter">Pineville</h2>
              <p className="text-gray-500 group-hover:text-gray-800 font-sans font-medium text-lg leading-relaxed mt-2 mb-4 transition-colors">
                456 Military Hwy<br />
                Pineville, LA 71360
              </p>
              <div className="flex items-center gap-2 text-sm font-sans tracking-widest text-white bg-poboy-red group-hover:bg-poboy-black px-6 py-3 rounded-full transition-colors uppercase font-bold mt-auto shadow-md">
                Write Review <ExternalLink size={16} />
              </div>
            </a>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
