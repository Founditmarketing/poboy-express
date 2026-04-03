import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { BagItem } from '../types/Menu';

type BagState = {
  items: BagItem[];
  subtotal: number;
  isDrawerOpen: boolean;
};

type BagAction =
  | { type: 'ADD_ITEM'; payload: BagItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { cartItemId: string; quantity: number } }
  | { type: 'TOGGLE_DRAWER' };

const initialState: BagState = {
  items: [],
  subtotal: 0,
  isDrawerOpen: false,
};

function calculateSubtotal(items: BagItem[]): number {
  return items.reduce((total, item) => total + item.itemTotal, 0);
}

function bagReducer(state: BagState, action: BagAction): BagState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newItems = [...state.items, action.payload];
      return {
        ...state,
        items: newItems,
        subtotal: calculateSubtotal(newItems),
      };
    }
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.cartItemId !== action.payload);
      return {
        ...state,
        items: newItems,
        subtotal: calculateSubtotal(newItems),
      };
    }
    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item => {
        if (item.cartItemId === action.payload.cartItemId) {
          const newQty = action.payload.quantity;
          const basePrice = item.product.price + item.selectedAddons.reduce((sum, addon) => sum + addon.price, 0);
          return {
            ...item,
            quantity: newQty,
            itemTotal: basePrice * newQty,
          };
        }
        return item;
      });
      return {
        ...state,
        items: newItems,
        subtotal: calculateSubtotal(newItems),
      };
    }
    case 'TOGGLE_DRAWER':
      return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen,
      };
    default:
      return state;
  }
}

const BagContext = createContext<{
  state: BagState;
  dispatch: React.Dispatch<BagAction>;
} | undefined>(undefined);

export const BagProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(bagReducer, initialState);

  return (
    <BagContext.Provider value={{ state, dispatch }}>
      {children}
    </BagContext.Provider>
  );
};

export const useBag = () => {
  const context = useContext(BagContext);
  if (context === undefined) {
    throw new Error('useBag must be used within a BagProvider');
  }
  return context;
};
