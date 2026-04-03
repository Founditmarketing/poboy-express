export type Modifier = {
  id: string;
  name: string;
  price: number;
};

export type ItemSize = {
  name: string;
  price: number;
};

export type ItemOption = {
  name: string;
};

export type CategoryDrop = {
  name: string; // e.g. "Choice of Sauce"
  options: string[];
};

export type Category = 
  | 'SEAFOOD BASKETS' 
  | 'CHICKEN BASKETS' 
  | 'HOT PO-BOY\'S' 
  | 'COLD PO-BOY\'S' 
  | 'BURGERS' 
  | 'SALADS' 
  | 'CAJUN SMOTHERED FRIES' 
  | 'SIDES' 
  | 'FAMILY MEALS & TRAYS' 
  | 'KID\'S MEALS' 
  | 'DESSERTS';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number; // For item with sizes, this could be the default/minimum price, or 0 if user must pick
  category: Category;
  imageUrl?: string;
  requiresDressing?: boolean;
  allowsAddons?: boolean;
  sizes?: ItemSize[];         // e.g. [ {name: '15 Piece', price: 34.99}, ... ]
  dropdowns?: CategoryDrop[]; // e.g. [ {name: 'Choice of Sauce', options: ['BBQ', 'buffalo']} ]
  itemModifiers?: Modifier[]; // e.g. [ {id: 'tartar', name: 'Tartar sauce on request', price: 0} ]
};

export type SelectedAddon = {
  modifierId: string;
  name: string;
  price: number;
};

export type BagItem = {
  cartItemId: string; // unique
  product: Product;
  quantity: number;
  selectedAddons: SelectedAddon[];
  selectedDressing?: string;
  selectedSize?: ItemSize;
  selectedDropdowns?: Record<string, string>; // mapping generic dropdown name to choice
  itemTotal: number;
};
