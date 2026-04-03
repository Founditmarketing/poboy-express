import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight, Search } from 'lucide-react';
import { MENU_CATALOG } from '../data/menuData';
import { Category, Product } from '../types/Menu';
import { ProductModal } from '../components/ProductModal';

const getCategoryIcon = (category: string) => {
  const lower = category.toLowerCase();
  if (lower.includes('basket') || lower.includes('family')) return 'basket.png';
  if (lower.includes('po-boy')) return 'sandwich.png';
  if (lower.includes('burger') || lower.includes('kid')) return 'burger.png';
  if (lower.includes('salad')) return 'salad.png';
  if (lower.includes('fries')) return 'fries.png';
  if (lower.includes('side')) return 'sides.png';
  if (lower.includes('dessert')) return 'dessert.png';
  return 'basket.png';
};

export const MenuPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);
  
  // Group products by category
  const productsByCategory = MENU_CATALOG.filter(product => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return product.name.toLowerCase().includes(q) || product.description?.toLowerCase().includes(q) || product.category.toLowerCase().includes(q);
  }).reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<Category, Product[]>);

  const categories: Category[] = [
    "SEAFOOD BASKETS",
    "CHICKEN BASKETS",
    "HOT PO-BOY'S",
    "COLD PO-BOY'S",
    "BURGERS",
    "SALADS",
    "CAJUN SMOTHERED FRIES",
    "SIDES",
    "FAMILY MEALS & TRAYS",
    "KID'S MEALS",
    "DESSERTS"
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-36 md:pt-40 pb-32 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl font-display font-medium text-poboy-black tracking-tight mb-4 uppercase">
            Full Menu
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl content-relaxed mb-6">
            From classic Po'Boys built on genuine French bread to golden fried baskets, find your perfect meal. Add items to your bag to calculate your total before calling us!
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 max-w-3xl flex flex-col md:flex-row gap-4 md:items-center">
            <div className="flex-1">
              <h3 className="font-bold text-poboy-red mb-1">📌 This is NOT an online checkout!</h3>
              <p className="text-sm text-gray-700">
                Our digital menu lets you organize your thoughts and see a price estimate before you dial our number. 
              </p>
            </div>
            <a 
              href="https://order.toasttab.com/online/po-boy-express-alexandria-1305-windsor-pl"
              target="_blank"
              rel="noreferrer"
              className="bg-white border-2 border-gray-200 hover:border-poboy-yellow text-poboy-black px-5 py-3 rounded-md font-sans text-sm font-bold text-center transition-colors shrink-0 shadow-sm"
            >
              Order Online / Delivery Here
            </a>
          </div>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              setSearchQuery(inputValue);
            }}
            className="mt-8 max-w-2xl flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-11 pr-16 py-4 border-2 border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-poboy-yellow focus:border-poboy-yellow transition-all sm:text-sm font-medium shadow-sm"
                placeholder="Search for po'boys, baskets, kids meals..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              {inputValue && (
                <button
                  type="button"
                  onClick={() => { setInputValue(''); setSearchQuery(''); }}
                  className="absolute inset-y-0 right-0 pr-4 pl-2 flex items-center text-sm font-semibold text-gray-400 hover:text-poboy-red transition-colors touch-manipulation"
                >
                  Clear
                </button>
              )}
            </div>
            <button
              type="submit"
              className="bg-poboy-red hover:bg-red-700 text-white px-8 py-4 rounded-xl font-display font-medium tracking-wide shadow-md hover:shadow-lg transition-all shrink-0"
            >
              Search Menu
            </button>
          </form>
        </div>

        {Object.keys(productsByCategory).length === 0 && searchQuery && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-display text-gray-400 mb-2">No items found</h3>
            <p className="text-gray-500">We couldn't find anything matching "{searchQuery}". Try a different keyword!</p>
          </div>
        )}

        {categories.map(category => {
          const items = productsByCategory[category];
          if (!items || items.length === 0) return null;

          return (
            <div key={category} className="mb-16 scroll-mt-24" id={category.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}>
              <h2 className="text-4xl font-display font-normal text-poboy-red border-b-2 border-gray-200 pb-3 mb-8 uppercase">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map(product => (
                  <div 
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col group border border-gray-100"
                  >
                    {product.imageUrl && (
                      <div className="h-56 w-full overflow-hidden">
                        <img 
                          src={product.imageUrl} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-3 gap-4">
                        <h3 className="text-2xl font-display text-poboy-black group-hover:text-poboy-red transition-colors flex items-start gap-3 flex-1">
                          <img src={`/${getCategoryIcon(product.category)}`} alt="" className="w-7 h-7 object-contain shrink-0 mt-0.5" />
                          <span>{product.name}</span>
                        </h3>
                        <span className="font-semibold text-lg shrink-0 text-right">
                          {product.price > 0 ? (
                            `$${product.price.toFixed(2)}`
                          ) : (
                            product.sizes && product.sizes.length > 0 
                              ? <span className="text-sm font-normal text-gray-500">From <br/><span className="text-lg font-semibold text-poboy-black">${Math.min(...product.sizes.map(s => s.price)).toFixed(2)}</span></span>
                              : '$0.00'
                          )}
                        </span>
                      </div>
                      <p className="text-gray-500 line-clamp-3 mb-6 flex-1 text-sm leading-relaxed">
                        {product.description}
                      </p>
                      <button className="flex items-center text-poboy-red font-display uppercase tracking-widest text-sm font-semibold mt-auto group-hover:gap-2 transition-all">
                        Customize & Add <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <ProductModal 
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};
