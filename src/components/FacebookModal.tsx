import React from 'react';
import { X, MapPin, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type FacebookModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const FacebookModal = ({ isOpen, onClose }: FacebookModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      ></motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 text-center"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
        >
          <X size={18} />
        </button>
        
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1877F2]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </div>
        
        <h2 className="text-2xl font-display font-medium text-poboy-black mb-2">Choose Location</h2>
        <p className="text-gray-500 mb-8 font-medium">Which Facebook page would you like to visit?</p>

        <div className="flex flex-col gap-4">
          <a 
            href="https://www.facebook.com/Poboyexpress2" 
            target="_blank" 
            rel="noreferrer"
            onClick={onClose}
            className="w-full flex items-center p-4 rounded-xl border-2 border-gray-100 hover:border-[#1877F2] hover:bg-blue-50 transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-white flex items-center justify-center shrink-0 text-[#1877F2] group-hover:shadow-sm transition-all">
              <MapPin size={20} />
            </div>
            <div className="text-left ml-4 flex-1">
              <span className="block font-bold text-poboy-black group-hover:text-[#1877F2] transition-colors">Alexandria Facebook</span>
            </div>
            <ExternalLink size={18} className="text-gray-300 group-hover:text-[#1877F2]" />
          </a>
          
          <a 
            href="https://www.facebook.com/pinevillepoboys" 
            target="_blank" 
            rel="noreferrer"
            onClick={onClose}
            className="w-full flex items-center p-4 rounded-xl border-2 border-gray-100 hover:border-[#1877F2] hover:bg-blue-50 transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-white flex items-center justify-center shrink-0 text-[#1877F2] group-hover:shadow-sm transition-all">
              <MapPin size={20} />
            </div>
            <div className="text-left ml-4 flex-1">
              <span className="block font-bold text-poboy-black group-hover:text-[#1877F2] transition-colors">Pineville Facebook</span>
            </div>
            <ExternalLink size={18} className="text-gray-300 group-hover:text-[#1877F2]" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};
