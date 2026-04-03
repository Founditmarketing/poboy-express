import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if they've seen it this session to avoid spamming
    const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      // Small delay so it pops up smoothly after initial site load
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenPopup', 'true');
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const onClose = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay hidden intentionally outside modal, click to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[300]"
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[310] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden pointer-events-auto relative flex flex-col border border-gray-100"
            >
              {/* Close Button Overlaying Top Section */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-md border border-white/20 hover:bg-white/30 transition-colors shadow-sm rounded-full flex items-center justify-center z-20 group"
              >
                <X size={20} className="text-white group-hover:scale-110 transition-transform" />
              </button>

              {/* Top Half : Call Now */}
              <div className="bg-poboy-red pt-12 pb-10 px-6 sm:px-10 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(/checkeredbackground.png)', backgroundSize: '800px', backgroundPosition: 'center' }}></div>
                <div className="relative z-10 flex flex-col items-center w-full">
                  <h3 className="text-white font-display text-3xl md:text-4xl mb-2 drop-shadow-md">CALL TO PLACE ORDER NOW!</h3>
                  <p className="text-red-100 mb-6 font-medium text-sm drop-shadow-sm">Tap your nearest location below to dial our kitchen directly.</p>

                  <div className="flex flex-col gap-3 w-full justify-center">
                    <a href="tel:+13185550123" onClick={onClose} className="w-full bg-white hover:bg-poboy-yellow text-poboy-black font-bold uppercase tracking-widest h-16 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg text-sm group">
                      <PhoneCall size={18} className="text-poboy-red group-hover:text-poboy-black transition-colors" />
                      ALEXANDRIA
                    </a>
                    <a href="tel:+13185550124" onClick={onClose} className="w-full bg-white hover:bg-poboy-yellow text-poboy-black font-bold uppercase tracking-widest h-16 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg text-sm group">
                      <PhoneCall size={18} className="text-poboy-red group-hover:text-poboy-black transition-colors" />
                      PINEVILLE
                    </a>
                  </div>
                </div>
              </div>

              {/* "OR" separator */}
              <div className="relative h-px bg-gray-200 z-[50]">
                <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-8 h-8 bg-white border-2 border-poboy-yellow shadow-sm rounded-full flex items-center justify-center text-xs font-bold text-poboy-yellow">
                  OR
                </div>
              </div>

              {/* Bottom Half : View Menu */}
              <div className="bg-poboy-cream pt-8 pb-10 px-8 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'url(/2checkeredflags.png)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                <h3 className="text-poboy-black font-display text-2xl mb-2 relative z-10">NOT READY YET?</h3>
                <p className="text-gray-600 mb-6 text-sm relative z-10">View our menu and plan your order before calling.</p>
                <Link
                  to="/menu"
                  onClick={onClose}
                  className="bg-poboy-black hover:bg-gray-800 text-white w-full font-bold uppercase tracking-widest h-14 rounded-xl flex items-center justify-center transition-all shadow-md text-sm relative z-10"
                >
                  VIEW OUR MENU
                </Link>
              </div>

            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
