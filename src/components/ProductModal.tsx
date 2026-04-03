import React, { useState, useEffect } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { Product, SelectedAddon, ItemSize } from '../types/Menu';
import { GLOBAL_ADDONS, SALAD_DRESSINGS } from '../data/menuData';
import { useBag } from '../context/BagContext';

type ProductModalProps = {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
};

export const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const { dispatch } = useBag();
  const [quantity, setQuantity] = useState(1);
  const [selectedDressing, setSelectedDressing] = useState<string>('');
  const [selectedAddons, setSelectedAddons] = useState<SelectedAddon[]>([]);
  const [selectedSize, setSelectedSize] = useState<ItemSize | null>(null);
  const [selectedDropdowns, setSelectedDropdowns] = useState<Record<string, string>>({});

  // Reset state when a new product is opened
  useEffect(() => {
    if (isOpen && product) {
      setQuantity(1);
      setSelectedDressing('');
      setSelectedAddons([]);
      setSelectedSize(product.sizes ? product.sizes[0] : null); // default to first size if available
      
      const initialDropdowns: Record<string, string> = {};
      if (product.dropdowns) {
        product.dropdowns.forEach(d => {
          initialDropdowns[d.name] = d.options[0]; // default to first option
        });
      }
      setSelectedDropdowns(initialDropdowns);
    }
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  const handleToggleGlobalAddon = (addonTemplate: typeof GLOBAL_ADDONS[0]) => {
    const isSelected = selectedAddons.some(a => a.modifierId === addonTemplate.id);
    if (isSelected) {
      setSelectedAddons(selectedAddons.filter(a => a.modifierId !== addonTemplate.id));
    } else {
      setSelectedAddons([
        ...selectedAddons,
        { modifierId: addonTemplate.id, name: addonTemplate.name, price: addonTemplate.price }
      ]);
    }
  };

  const handleToggleItemAddon = (modId: string, name: string, price: number) => {
    const isSelected = selectedAddons.some(a => a.modifierId === modId);
    if (isSelected) {
      setSelectedAddons(selectedAddons.filter(a => a.modifierId !== modId));
    } else {
      setSelectedAddons([
        ...selectedAddons,
        { modifierId: modId, name, price }
      ]);
    }
  };

  const handleAddToBag = () => {
    const baseItemPrice = selectedSize ? selectedSize.price : product.price;
    const basePrice = baseItemPrice + selectedAddons.reduce((sum, a) => sum + a.price, 0);
    const itemTotal = basePrice * quantity;

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        cartItemId: Math.random().toString(36).substr(2, 9),
        product,
        quantity,
        selectedAddons,
        selectedDressing: product.requiresDressing ? selectedDressing : undefined,
        selectedSize: selectedSize || undefined,
        selectedDropdowns,
        itemTotal
      }
    });
    
    dispatch({ type: 'TOGGLE_DRAWER' });
    onClose();
  };

  const isDressingMissing = product.requiresDressing && !selectedDressing;
  const isSizeMissing = product.sizes && !selectedSize;
  const isAddDisabled = isDressingMissing || isSizeMissing;

  const currentBasePrice = selectedSize ? selectedSize.price : product.price;
  const currentTotal = (currentBasePrice + selectedAddons.reduce((sum, a) => sum + a.price, 0)) * quantity;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors"
        >
          <X size={20} />
        </button>

        {product.imageUrl && (
          <div className="h-64 sm:h-72 w-full shrink-0">
            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="p-6 overflow-y-auto">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-3xl font-display font-medium text-poboy-black">{product.name}</h2>
          </div>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Sizes Dropdown */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-6">
              <h3 className="font-display text-xl mb-3 flex items-center justify-between">
                Select Size <span className="text-poboy-red text-sm font-sans font-bold flex bg-red-100 px-2 py-1 rounded">REQUIRED</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.sizes.map(sizeObj => (
                  <label key={sizeObj.name} className={`border rounded-lg p-3 flex justify-between items-center cursor-pointer transition-colors ${selectedSize?.name === sizeObj.name ? 'border-poboy-red bg-red-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        name="size" 
                        value={sizeObj.name}
                        checked={selectedSize?.name === sizeObj.name}
                        onChange={() => setSelectedSize(sizeObj)}
                        className="mr-3 text-poboy-red focus:ring-poboy-red accent-poboy-red"
                      />
                      <span className="select-none font-medium text-poboy-black">{sizeObj.name}</span>
                    </div>
                    <span className="text-gray-500 font-semibold">${sizeObj.price.toFixed(2)}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Custom Dropdowns */}
          {product.dropdowns && product.dropdowns.length > 0 && (
            <div className="mb-6 space-y-4">
              {product.dropdowns.map((dropdown, idx) => (
                <div key={idx}>
                   <h3 className="font-display text-xl mb-3 flex items-center justify-between">
                    {dropdown.name} <span className="text-gray-500 text-sm font-sans font-medium flex bg-gray-100 px-2 py-1 rounded">REQUIRED</span>
                  </h3>
                  <select 
                    value={selectedDropdowns[dropdown.name] || ''}
                    onChange={(e) => setSelectedDropdowns({...selectedDropdowns, [dropdown.name]: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-poboy-red focus:border-transparent bg-white appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                  >
                    {dropdown.options.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          )}

          {/* Salad Dressing */}
          {product.requiresDressing && (
            <div className="mb-6">
              <h3 className="font-display text-xl mb-3 flex items-center justify-between">
                Choose Dressing
                <span className="text-poboy-red text-sm font-sans font-bold flex bg-red-100 px-2 py-1 rounded">REQUIRED</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SALAD_DRESSINGS.map(dressing => (
                  <label key={dressing} className={`border rounded-lg p-3 flex items-center cursor-pointer transition-colors ${selectedDressing === dressing ? 'border-poboy-red bg-red-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <input 
                      type="radio" 
                      name="dressing" 
                      value={dressing}
                      checked={selectedDressing === dressing}
                      onChange={() => setSelectedDressing(dressing)}
                      className="mr-3 text-poboy-red focus:ring-poboy-red accent-poboy-red"
                    />
                    <span className="select-none">{dressing}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Local Item Modifiers */}
          {product.itemModifiers && product.itemModifiers.length > 0 && (
            <div className="mb-6">
              <h3 className="font-display text-xl mb-3 -mt-2">Special Requests</h3>
              <div className="space-y-3">
                {product.itemModifiers.map(mod => {
                  const isChecked = selectedAddons.some(a => a.modifierId === mod.id);
                  return (
                    <label key={mod.id} className="flex items-center justify-between cursor-pointer border border-gray-100 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center">
                        <input 
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleToggleItemAddon(mod.id, mod.name, mod.price)}
                          className="mr-3 w-5 h-5 text-poboy-red rounded border-gray-300 focus:ring-poboy-red accent-poboy-red"
                        />
                        <span className="select-none">{mod.name}</span>
                      </div>
                      <span className="text-gray-500">{mod.price > 0 ? `+$${mod.price.toFixed(2)}` : 'Free'}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {/* Global Modifiers */}
          {product.allowsAddons && (
            <div className="mb-6">
              <h3 className="font-display text-xl mb-3 -mt-2">Customize (Optional)</h3>
              <div className="space-y-3">
                {GLOBAL_ADDONS.map(addon => {
                  const isChecked = selectedAddons.some(a => a.modifierId === addon.id);
                  return (
                    <label key={addon.id} className="flex items-center justify-between cursor-pointer border border-gray-100 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center">
                        <input 
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleToggleGlobalAddon(addon)}
                          className="mr-3 w-5 h-5 text-poboy-red rounded border-gray-300 focus:ring-poboy-red accent-poboy-red"
                        />
                        <span className="select-none">{addon.name}</span>
                      </div>
                      <span className="text-gray-500">+${addon.price.toFixed(2)}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-gray-50 border-t flex flex-col sm:flex-row items-center gap-4 shrink-0">
          <div className="flex items-center bg-white border border-gray-200 rounded-full overflow-hidden w-full sm:w-auto h-14 shrink-0">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="flex-1 sm:w-16 h-full flex items-center justify-center hover:bg-gray-100 text-poboy-black transition-colors"
            >
              <Minus size={20} />
            </button>
            <span className="w-12 text-center font-display text-2xl pb-1">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="flex-1 sm:w-16 h-full flex items-center justify-center hover:bg-gray-100 text-poboy-black transition-colors"
            >
              <Plus size={20} />
            </button>
          </div>
          
          <button 
            disabled={isAddDisabled}
            onClick={handleAddToBag}
            className={`flex-1 w-full h-14 rounded-full font-display text-xl transition-all uppercase flex justify-between items-center px-6 ${
              isAddDisabled 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-poboy-red hover:bg-red-700 text-white shadow-lg hover:shadow-red-900/20'
            }`}
          >
            <span>Add to Bag</span>
            <span>${currentTotal.toFixed(2)}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
