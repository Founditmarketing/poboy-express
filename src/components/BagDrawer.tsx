import React from 'react';
import { X, Minus, Plus, ShoppingBag, PhoneCall } from 'lucide-react';
import { useBag } from '../context/BagContext';
import { BagItem } from '../types/Menu';
import { motion, AnimatePresence } from 'motion/react';

export const BagDrawer = () => {
  const { state, dispatch } = useBag();

  return (
    <AnimatePresence>
      {state.isDrawerOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200]"
            onClick={() => dispatch({ type: 'TOGGLE_DRAWER' })}
          />
          
          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-[210] flex flex-col"
          >
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-3xl font-display font-medium text-poboy-black flex items-center gap-3">
            <img src="/orderbag.png" className="w-8 h-8 object-contain" alt="" />
            Your Bag
          </h2>
          <button 
            onClick={() => dispatch({ type: 'TOGGLE_DRAWER' })}
            className="w-10 h-10 hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="bg-yellow-50 px-6 py-4 flex flex-col gap-2 shrink-0 border-b border-yellow-100">
          <p className="text-sm font-medium text-poboy-black leading-snug">
            📌 <strong className="font-bold">Not Online Ordering:</strong> This bag helps you calculate and organize your order before calling us directly.
          </p>
          <a 
            href="https://order.toasttab.com/online/po-boy-express-alexandria-1305-windsor-pl"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-poboy-red font-bold hover:underline"
          >
            Looking to pay ahead or get delivery? Order online here »
          </a>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {state.items.length === 0 ? (
            <div className="flex flex-col flex-1 items-center justify-center text-gray-400">
              <img src="/orderbag.png" className="w-16 h-16 object-contain mb-4 opacity-50" alt="" />
              <p className="text-xl font-display uppercase tracking-widest text-center">Your bag is empty</p>
              <p className="text-sm mt-2 text-center text-gray-400">Go explore the menu and add some Cajun flavor!</p>
            </div>
          ) : (
            state.items.map((item: BagItem) => (
              <div key={item.cartItemId} className="flex flex-col border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl text-poboy-black flex-1 pr-4">{item.product.name}</h3>
                  <span className="font-semibold">${item.itemTotal.toFixed(2)}</span>
                </div>
                
                {item.selectedDressing && (
                  <p className="text-sm text-gray-500 mb-1">
                    <span className="text-poboy-red font-medium">Dressing:</span> {item.selectedDressing}
                  </p>
                )}
                
                {item.selectedAddons.map(addon => (
                  <p key={addon.modifierId} className="text-sm text-gray-500 mb-1">
                    + {addon.name} <span className="text-xs">(${addon.price.toFixed(2)})</span>
                  </p>
                ))}

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center border rounded-full h-9 bg-gray-50">
                    <button 
                      onClick={() => {
                        if (item.quantity > 1) {
                          dispatch({ 
                            type: 'UPDATE_QUANTITY', 
                            payload: { cartItemId: item.cartItemId, quantity: item.quantity - 1 } 
                          });
                        } else {
                          dispatch({ type: 'REMOVE_ITEM', payload: item.cartItemId });
                        }
                      }}
                      className="w-10 h-full flex items-center justify-center hover:bg-gray-200 rounded-l-full"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-8 text-center font-medium font-display leading-[1] pb-1">{item.quantity}</span>
                    <button 
                      onClick={() => {
                        dispatch({ 
                          type: 'UPDATE_QUANTITY', 
                          payload: { cartItemId: item.cartItemId, quantity: item.quantity + 1 } 
                        });
                      }}
                      className="w-10 h-full flex items-center justify-center hover:bg-gray-200 rounded-r-full"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.cartItemId })}
                    className="text-xs text-red-500 hover:text-red-700 underline underline-offset-2 uppercase tracking-wide font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t p-6 bg-gray-50 shadow-[0_-10px_20px_rgba(0,0,0,0.03)] shrink-0">
          {state.items.length > 0 && (
            <div className="flex justify-between items-center mb-6">
               <div className="flex flex-col">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Estimated</span>
                  <span className="text-xl font-display uppercase tracking-widest text-poboy-black leading-none">Subtotal</span>
               </div>
              <span className="text-2xl font-bold">${state.subtotal.toFixed(2)}</span>
            </div>
          )}
          
          <div className="w-full flex flex-col items-center">
            <span className="text-poboy-black text-sm font-bold uppercase tracking-widest font-display mb-2 drop-shadow-sm">CALL ORDER IN!</span>
            <div className="flex gap-3 w-full">
              <a 
                href="tel:+13185550123"
                className="flex-1 bg-poboy-yellow hover:bg-yellow-400 text-poboy-black h-14 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md text-sm font-bold tracking-widest group"
              >
                <PhoneCall size={16} className="group-hover:scale-110 transition-transform" />
                ALEXANDRIA
              </a>
              <a 
                href="tel:+13185550124"
                className="flex-1 bg-poboy-yellow hover:bg-yellow-400 text-poboy-black h-14 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md text-sm font-bold tracking-widest group"
              >
                <PhoneCall size={16} className="group-hover:scale-110 transition-transform" />
                PINEVILLE
              </a>
            </div>
          </div>

          <a 
            href="https://order.toasttab.com/online/po-boy-express-alexandria-1305-windsor-pl"
            target="_blank"
            rel="noreferrer"
            className="w-full mt-4 bg-white border-2 border-gray-200 hover:border-poboy-yellow hover:bg-yellow-50 text-poboy-black p-2 rounded-xl flex flex-col items-center justify-center font-sans transition-all text-xs group text-center"
          >
            <span className="font-bold mb-0.5">Want to pay ahead or use delivery?</span>
            <span className="text-gray-500 uppercase tracking-widest text-[10px] group-hover:text-poboy-black transition-colors">Order online via ToastTab here!</span>
          </a>
        </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
