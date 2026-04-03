import { Modifier, Product, Category } from '../types/Menu';

export const GLOBAL_ADDONS: Modifier[] = [
  { id: 'add-bacon', name: 'Add Bacon', price: 1.99 },
  { id: 'add-bbq', name: 'Add BBQ Sauce', price: 0.75 },
  { id: 'add-chili', name: 'Add Chili', price: 1.49 },
  { id: 'add-mushrooms', name: 'Add Sauteed Mushrooms', price: 1.49 }
];

export const SALAD_DRESSINGS = [
  'Thousand Island',
  'Ranch',
  'Fat-Free Ranch',
  'French',
  'Italian',
  'Oil & Vinegar',
  'Honey Mustard',
  'Raspberry Vinaigrette'
];

export const MENU_CATALOG: Product[] = [
  // SEAFOOD BASKETS
  {
    id: 'sb1',
    name: "Fried Catfish & Shrimp Basket",
    description: "4 fried shrimp, 3 strips of fried Mississippi Delta farm raised catfish, coleslaw, pickles, & onions, served with fries, boom boom sauce or tartar sauce.",
    price: 17.99,
    category: "SEAFOOD BASKETS",
    allowsAddons: true
  },
  {
    id: 'sb2',
    name: "Fried Catfish Basket",
    description: "7 strips of fried Mississippi Delta farm raised catfish, fries, hushpuppies, homemade coleslaw, pickles & onions served with boom boom sauce or tartar sauce.",
    price: 17.99,
    category: "SEAFOOD BASKETS",
    allowsAddons: true
  },
  {
    id: 'sb3',
    name: "Seafood Feast",
    description: "3 fried jumbo oysters, 3 fried jumbo shrimp, 3 fried catfish strips, fries, hushpuppies, homemade coleslaw, pickles, & onions, served with boom boom sauce or tartar sauce.",
    price: 18.99,
    category: "SEAFOOD BASKETS",
    allowsAddons: true
  },
  {
    id: 'sb4',
    name: "Fried Oyster Basket",
    description: "12 fried oysters, fries, homemade coleslaw, hushpuppies, pickles & onions served with boom boom sauce or tartar sauce.",
    price: 17.99,
    category: "SEAFOOD BASKETS",
    allowsAddons: true
  },
  {
    id: 'sb5',
    name: "Fried Shrimp Basket",
    description: "8 fried jumbo shrimp, fries, hushpuppies, homemade coleslaw, pickles, onions served with boom boom sauce or tartar sauce.",
    price: 17.99,
    category: "SEAFOOD BASKETS",
    allowsAddons: true
  },

  // CHICKEN BASKETS
  {
    id: 'cb1',
    name: "7 Piece Chicken Wing Basket w/ Fries",
    description: "7-piece wings and fries.",
    price: 13.99,
    category: "CHICKEN BASKETS",
    dropdowns: [{ name: "Choice of Sauce", options: ["BBQ", "Buffalo", "Sweet Red Chili", "Garlic Parmesan", "Teriyaki"] }],
    allowsAddons: true
  },
  {
    id: 'cb2',
    name: "10 Piece Chicken Wing Basket w/ Fries",
    description: "10-piece wings and fries.",
    price: 18.99,
    category: "CHICKEN BASKETS",
    dropdowns: [{ name: "Choice of Sauce", options: ["BBQ", "Buffalo", "Sweet Red Chili", "Garlic Parmesan", "Teriyaki"] }],
    allowsAddons: true
  },
  {
    id: 'cb3',
    name: "Chicken Strip Basket",
    description: "3 fried chicken strips, fries, homemade coleslaw, & pickles, served with boom boom sauce.",
    price: 14.99,
    category: "CHICKEN BASKETS",
    allowsAddons: true
  },

  // HOT PO-BOY'S (Wheat bread global note -> Item Modifier on all)
  {
    id: 'hb1',
    name: "Fried Shrimp Po'Boy",
    description: "Loaded with fried shrimp, dressed with mayo, lettuce, tomatoes & pickles.",
    price: 13.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }, { id: 'm1', name: 'Tartar sauce on request', price: 0 }]
  },
  {
    id: 'hb2',
    name: "Grilled Shrimp Po'Boy",
    description: "Loaded with grilled shrimp, dressed with sriracha mayo, lettuce, tomatoes & pickles.",
    price: 14.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }, { id: 'm2', name: 'Tartar sauce on request', price: 0 }]
  },
  {
    id: 'hb3',
    name: "Fried Catfish Po'Boy",
    description: "Loaded with Mississippi Delta farm raised catfish, dressed with mayo, lettuce, tomatoes & pickles.",
    price: 13.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }]
  },
  {
    id: 'hb4',
    name: "Fried Oyster Po'Boy",
    description: "Loaded with fried oysters, dressed with mayo, lettuce, tomatoes & pickles.",
    price: 12.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }]
  },
  {
    id: 'hb5',
    name: "Fried Catfish & Shrimp Po'Boy",
    description: "Mississippi Delta farm raised catfish and fried shrimp dressed with mayo, lettuce, tomatoes & pickles.",
    price: 13.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }]
  },
  {
    id: 'hb6',
    name: "Shrimp & Oyster Po'Boy",
    description: "Loaded with fried shrimp & oysters, dressed with mayo, lettuce, tomatoes & pickles.",
    price: 13.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }, { id: 'm3', name: 'Tartar sauce on request', price: 0 }]
  },
  {
    id: 'hb7',
    name: "Bang Bang Shrimp Po'Boy",
    description: "Loaded with fried shrimp tossed in our in-house special boom boom sauce, dressed with lettuce, tomatoes & pickles.",
    price: 13.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }]
  },
  {
    id: 'hb8',
    name: "Crabby Patti Po'Boy",
    description: "Two large crab cakes, dressed with lettuce, tomatoes, pickles & spicy sriracha mayo.",
    price: 12.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }]
  },
  {
    id: 'hb9',
    name: "Surf & Turf Po'Boy",
    description: "Roast Beef loaded with fried shrimp, dressed with lettuce, tomato, pickles and mayo.",
    price: 14.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }, { id: 'm4', name: 'Make it Grilled', price: 2.99 }]
  },
  {
    id: 'hb10',
    name: "Shrimp Bacon Ranch Po'Boy",
    description: "Loaded with fried shrimp & topped with bacon, dressed with ranch, lettuce, tomatoes & pickles.",
    price: 14.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }]
  },
  {
    id: 'hb11',
    name: "Rajun Cajun Po'Boy",
    description: "Louisiana's answer to the Philly Cheese Steak! Roast Beef dressed with cheese, sautéed onions, bell peppers, black olives, a touch of hot peppers & easy mayo.",
    price: 12.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }]
  },
  {
    id: 'hb12',
    name: "Roast Beef & Gravy Po'Boy",
    description: "Roast Beef, dressed with mayo, lettuce & tomatoes.",
    price: 12.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }]
  },
  {
    id: 'hb13',
    name: "Pulled BBQ Brisket Po'Boy",
    description: "Slow smoked beef brisket with BBQ sauce.",
    price: 11.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }]
  },
  {
    id: 'hb14',
    name: "Cajun Steak Po'Boy",
    description: "Thinly sliced Roast Beef with sautéed bell peppers & onions, dressed with mayo, lettuce & tomato.",
    price: 12.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }]
  },
  {
    id: 'hb15',
    name: "Cajun Dip Po'Boy",
    description: "Thinly sliced Roast Beef, smothered in melted cheese with Cajun gravy on the side.",
    price: 12.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }]
  },
  {
    id: 'hb16',
    name: "Meatball Po'Boy",
    description: "100% beef meatballs dressed with fresh marinara sauce, parmesan cheese, American cheese and garlic & herb seasoning.",
    price: 11.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }]
  },
  {
    id: 'hb17',
    name: "Cajun Clucker Po'Boy",
    description: "Grilled chicken breast with sautéed onions, bell peppers, black olives, hot peppers, lite mayo & tomatoes.",
    price: 12.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }]
  },
  {
    id: 'hb18',
    name: "Chicken Bacon Ranch Po'Boy",
    description: "Seasoned grilled chicken breast covered in ranch, topped with bacon & dressed with lettuce & tomatoes.",
    price: 12.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }]
  },
  {
    id: 'hb19',
    name: "Crispy Chicken Strip Po'Boy",
    description: "Fried chicken strips dressed with mayo, lettuce, tomatoes & pickles.",
    price: 12.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }]
  },
  {
    id: 'hb20',
    name: "Cajun Stomper Po'Boy",
    description: "Ham dressed with cheese, sautéed onions, bell peppers, black olives, a touch of hot peppers & easy mayo.",
    price: 12.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }]
  },
  {
    id: 'hb21',
    name: "Turkey Cajun Po'Boy",
    description: "Po-Boy Express' answer to a low-fat Rajun Cajun! Smoked turkey dressed with cheese, sautéed onions, bell peppers, black olives, a touch of hot peppers & easy mayo.",
    price: 12.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }]
  },
  {
    id: 'hb22',
    name: "Chicken Club Po'Boy",
    description: "Seasoned grilled chicken breast, topped with bacon & dressed with white American cheese, mayo, lettuce & tomatoes.",
    price: 12.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }]
  },
  {
    id: 'hb23',
    name: "Fiesta Chicken Po'Boy",
    description: "Cajun style chicken cordon blue, chunks of chicken, sliced ham & cheese, dressed with mayo, lettuce & tomatoes.",
    price: 12.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }]
  },
  {
    id: 'hb24',
    name: "The Missing Link Po'Boy",
    description: "Slow smoked sausage dressed with sautéed onions, bell peppers & easy mustard.",
    price: 12.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }]
  },
  {
    id: 'hb25',
    name: "Buffalo Chicken Ranch Po'Boy",
    description: "Grilled chicken tossed in buffalo sauce, cheese, lettuce, tomatoes, with ranch dressing.",
    price: 12.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }]
  },
  {
    id: 'hb26',
    name: "Chicken Parmesan Po'Boy",
    description: "Fried chicken topped with marinara, parmesan cheese, American cheese.",
    price: 12.99,
    category: "HOT PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }]
  },

  // COLD PO-BOY'S
  {
    id: 'cbL1',
    name: "Super Cajun Po'Boy",
    description: "Roast Beef, Smoked Turkey Breast & Ham dressed with cheese, mayo, lettuce, tomatoes, onions, dill pickles, bell peppers, black olives & seasonings.",
    price: 13.99,
    category: "COLD PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }, { id: 'req_jal', name: 'Jalapeno peppers, vinegar & oil, mushrooms & spicy mustard on request', price: 0 }]
  },
  {
    id: 'cbL2',
    name: "Cajun Bacon Club Po'Boy",
    description: "Smoked Turkey, Ham, topped with bacon & dressed with mayo, lettuce & tomatoes.",
    price: 13.99,
    category: "COLD PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }, { id: 'req_jal', name: 'Jalapeno peppers, vinegar & oil, mushrooms & spicy mustard on request', price: 0 }]
  },
  {
    id: 'cbL3',
    name: "Super Italian Po'Boy",
    description: "Pepperoni, Genoa Salami & Ham dressed with cheese, mayo, lettuce, tomatoes, onions, dill pickles, bell peppers, black olives & seasonings.",
    price: 13.99,
    category: "COLD PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }, { id: 'req_jal', name: 'Jalapeno peppers, vinegar & oil, mushrooms & spicy mustard on request', price: 0 }]
  },
  {
    id: 'cbL4',
    name: "Egg Salad Po'Boy",
    description: "Fresh made Egg Salad dressed with cheese, mayo, lettuce, tomatoes, onions, dill pickles, bell peppers, black olives & seasonings.",
    price: 11.99,
    category: "COLD PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }, { id: 'req_jal', name: 'Jalapeno peppers, vinegar & oil, mushrooms & spicy mustard on request', price: 0 }]
  },
  {
    id: 'cbL5',
    name: "Crab Salad Po'Boy",
    description: "Fresh made Crab Salad dressed with cheese, mayo, lettuce, tomatoes, onions, dill pickles, bell peppers, black olives & seasonings.",
    price: 11.99,
    category: "COLD PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }, { id: 'req_jal', name: 'Jalapeno peppers, vinegar & oil, mushrooms & spicy mustard on request', price: 0 }]
  },
  {
    id: 'cbL6',
    name: "Tuna Salad Po'Boy",
    description: "Fresh made Tuna Salad dressed with cheese, mayo, lettuce, tomatoes, onions, dill pickles, bell peppers, black olives & seasonings.",
    price: 11.99,
    category: "COLD PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }, { id: 'req_jal', name: 'Jalapeno peppers, vinegar & oil, mushrooms & spicy mustard on request', price: 0 }]
  },
  {
    id: 'cbL7',
    name: "Chicken Salad Po'Boy",
    description: "Fresh made Grilled Chicken Salad dressed with cheese, mayo, lettuce, tomatoes, onions, dill pickles, bell peppers, black olives & seasonings.",
    price: 11.99,
    category: "COLD PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }, { id: 'req_jal', name: 'Jalapeno peppers, vinegar & oil, mushrooms & spicy mustard on request', price: 0 }]
  },
  {
    id: 'cbL8',
    name: "Cajun Club Po'Boy",
    description: "Roast Beef, Smoked Turkey Breast, dressed with cheese, mayo, lettuce, tomatoes, onions, dill pickles, bell peppers, black olives & seasonings.",
    price: 12.99,
    category: "COLD PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }, { id: 'req_jal', name: 'Jalapeno peppers, vinegar & oil, mushrooms & spicy mustard on request', price: 0 }]
  },
  {
    id: 'cbL9',
    name: "Roast Beef Special Po'Boy",
    description: "Roast Beef & Ham dressed with cheese, mayo, lettuce, tomatoes, onions, dill pickles, bell peppers, black olives & seasonings.",
    price: 12.99,
    category: "COLD PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }, { id: 'req_jal', name: 'Jalapeno peppers, vinegar & oil, mushrooms & spicy mustard on request', price: 0 }]
  },
  {
    id: 'cbL10',
    name: "Turkey Special Po'Boy",
    description: "Smoked Turkey Breast & Ham dressed with cheese, mayo, lettuce, tomatoes, onions, dill pickles, bell peppers, black olives & seasonings.",
    price: 12.99,
    category: "COLD PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }, { id: 'req_jal', name: 'Jalapeno peppers, vinegar & oil, mushrooms & spicy mustard on request', price: 0 }]
  },
  {
    id: 'cbL11',
    name: "Smoked Turkey Breast Po'Boy",
    description: "Smoked Turkey Breast dressed with cheese, mayo, lettuce, tomatoes, onions, dill pickles, bell peppers, black olives & seasonings.",
    price: 12.99,
    category: "COLD PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }, { id: 'req_jal', name: 'Jalapeno peppers, vinegar & oil, mushrooms & spicy mustard on request', price: 0 }]
  },
  {
    id: 'cbL12',
    name: "Ham Po'Boy",
    description: "Ham, dressed with cheese, mayo, lettuce, tomatoes, onions, dill pickles, bell peppers, black olives & seasonings.",
    price: 12.99,
    category: "COLD PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }, { id: 'req_jal', name: 'Jalapeno peppers, vinegar & oil, mushrooms & spicy mustard on request', price: 0 }]
  },
  {
    id: 'cbL13',
    name: "Pepperoni Special Po'Boy",
    description: "Pepperoni & Ham dressed with cheese, mayo, lettuce, tomatoes, onions, dill pickles, bell peppers, black olives & seasonings.",
    price: 12.99,
    category: "COLD PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }, { id: 'req_jal', name: 'Jalapeno peppers, vinegar & oil, mushrooms & spicy mustard on request', price: 0 }]
  },
  {
    id: 'cbL14',
    name: "Roast Beef Po'Boy",
    description: "Roast Beef dressed with cheese, mayo, lettuce, tomatoes, onions, dill pickles, bell peppers, black olives & seasonings.",
    price: 12.99,
    category: "COLD PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }, { id: 'req_jal', name: 'Jalapeno peppers, vinegar & oil, mushrooms & spicy mustard on request', price: 0 }]
  },
  {
    id: 'cbL15',
    name: "B.L.T. Po'Boy",
    description: "Dressed with mayo, lettuce, & tomatoes.",
    price: 11.99,
    category: "COLD PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }, { id: 'req_jal', name: 'Jalapeno peppers, vinegar & oil, mushrooms & spicy mustard on request', price: 0 }, { id: 'm5', name: 'Add fried green tomatoes', price: 3.99 }]
  },
  {
    id: 'cbL16',
    name: "Genoa Special Po'Boy",
    description: "Genoa Salami & Ham dressed with cheese, mayo, lettuce, tomatoes, onions, dill pickles, bell peppers, black olives & seasonings.",
    price: 12.99,
    category: "COLD PO-BOY'S",
    allowsAddons: true,
    itemModifiers: [{ id: 'req_wheat', name: 'Wheat bread upon request', price: 0 }, { id: 'req_jal', name: 'Jalapeno peppers, vinegar & oil, mushrooms & spicy mustard on request', price: 0 }]
  },

  // BURGERS
  {
    id: 'bu1',
    name: "Cheddar Ranch Burger Po'Boy",
    description: "Two large old-fashion charbroiled steak burgers, smothered in cheddar cheese, dressed with ranch, lettuce & tomatoes.",
    price: 12.99,
    category: "BURGERS",
    allowsAddons: true
  },
  {
    id: 'bu2',
    name: "Bayou Burger Po'Boy",
    description: "Two large Old-Fashioned charbroiled steak burgers, dressed with mayo, mustard, cheese, lettuce, tomatoes, onions & pickles.",
    price: 12.99,
    category: "BURGERS",
    allowsAddons: true
  },

  // SALADS
  {
    id: 'sa1',
    name: "Grilled Shrimp & Chicken Salad",
    description: "Dressed with freshly farm grown lettuce, tomatoes, bell peppers, black olives, pickles, sliced eggs, shredded cheddar cheese, croutons, crackers. (Extra dressings are $.99 each)",
    price: 17.99,
    category: "SALADS",
    requiresDressing: true,
    allowsAddons: true
  },
  { id: 'sa2', name: "Grilled Shrimp Salad", description: "Dressed with fresh greens, tomatoes, cheese, eggs and croutons.", price: 16.99, category: "SALADS", requiresDressing: true, allowsAddons: true },
  { id: 'sa3', name: "Fried Shrimp Salad", description: "Dressed with fresh greens, tomatoes, cheese, eggs and croutons.", price: 14.99, category: "SALADS", requiresDressing: true, allowsAddons: true },
  { id: 'sa4', name: "Cajun Chef's Salad", description: "Ham, turkey, roast beef.", price: 13.99, category: "SALADS", requiresDressing: true, allowsAddons: true },
  { id: 'sa5', name: "Italian Chef's Salad", description: "Pepperoni, ham, Genoa salami.", price: 13.99, category: "SALADS", requiresDressing: true, allowsAddons: true },
  { id: 'sa6', name: "Grilled Chicken Salad", description: "Dressed with fresh greens, tomatoes, cheese, eggs and croutons.", price: 13.99, category: "SALADS", requiresDressing: true, allowsAddons: true },
  { id: 'sa7', name: "Crispy Chicken Salad", description: "Dressed with fresh greens, tomatoes, cheese, eggs and croutons.", price: 13.99, category: "SALADS", requiresDressing: true, allowsAddons: true },
  { id: 'sa8', name: "Oyster Salad", description: "Dressed with fresh greens, tomatoes, cheese, eggs and croutons.", price: 13.99, category: "SALADS", requiresDressing: true, allowsAddons: true },
  { id: 'sa9', name: "Tuna Salad, Salad", description: "Dressed with fresh greens, tomatoes, cheese, eggs and croutons.", price: 13.99, category: "SALADS", requiresDressing: true, allowsAddons: true },
  { id: 'sa10', name: "Crab Salad, Salad", description: "Dressed with fresh greens, tomatoes, cheese, eggs and croutons.", price: 13.99, category: "SALADS", requiresDressing: true, allowsAddons: true },
  { id: 'sa11', name: "Egg Salad, Salad", description: "Dressed with fresh greens, tomatoes, cheese, eggs and croutons.", price: 13.99, category: "SALADS", requiresDressing: true, allowsAddons: true },
  { id: 'sa12', name: "Chicken Salad, Salad", description: "Dressed with fresh greens, tomatoes, cheese, eggs and croutons.", price: 13.99, category: "SALADS", requiresDressing: true, allowsAddons: true },
  { id: 'sa13', name: "BBQ Chicken Ranch", description: "Dressed with fresh greens, tomatoes, cheese, eggs and croutons.", price: 13.99, category: "SALADS", requiresDressing: true, allowsAddons: true },
  { id: 'sa14', name: "Buffalo Chicken Ranch", description: "Dressed with fresh greens, tomatoes, cheese, eggs and croutons.", price: 13.99, category: "SALADS", requiresDressing: true, allowsAddons: true },
  { id: 'sa15', name: "Garden Salad", description: "Dressed with fresh greens, tomatoes, cheese, eggs and croutons.", price: 11.99, category: "SALADS", requiresDressing: true, allowsAddons: true },

  // CAJUN SMOTHERED FRIES
  {
    id: 'cs1',
    name: "Rajun Cajun Smothered Fries",
    description: "Our local favorite Rajun Cajun, cooked and dumped on a large bed of fries, topped with extra cheese and drizzled with your choice of gravy or sriracha mayo.",
    price: 13.99,
    category: "CAJUN SMOTHERED FRIES",
    dropdowns: [{ name: "Choice of drizzle", options: ["Gravy", "Sriracha Mayo"] }],
    allowsAddons: true
  },
  {
    id: 'cs2',
    name: "Cajun Clucker Smothered Fries",
    description: "Our local favorite Cajun Clucker cooked and dumped on a large bed of fries, topped with extra cheese and drizzled with your choice of gravy or sriracha mayo.",
    price: 13.99,
    category: "CAJUN SMOTHERED FRIES",
    dropdowns: [{ name: "Choice of drizzle", options: ["Gravy", "Sriracha Mayo"] }],
    allowsAddons: true
  },

  // SIDES
  { id: 'sd1', name: "Baked Beans", description: "", price: 0, category: "SIDES", sizes: [{ name: 'Individual', price: 2.99 }, { name: 'Pint', price: 4.99 }] },
  { id: 'sd2', name: "Coleslaw", description: "", price: 0, category: "SIDES", sizes: [{ name: 'Individual', price: 2.99 }, { name: 'Pint', price: 4.99 }] },
  { id: 'sd3', name: "Potato Salad", description: "", price: 0, category: "SIDES", sizes: [{ name: 'Individual', price: 2.99 }, { name: 'Pint', price: 4.99 }] },
  { id: 'sd4', name: "French Fries", description: "", price: 2.99, category: "SIDES" },
  { id: 'sd5', name: "Homemade Chips", description: "", price: 2.99, category: "SIDES" },
  { id: 'sd6', name: "Sweet Potato Fries", description: "", price: 4.99, category: "SIDES" },
  { id: 'sd7', name: "Fried Okra", description: "", price: 5.99, category: "SIDES" },
  { id: 'sd8', name: "Chili Cheese Fries", description: "", price: 5.99, category: "SIDES" },
  { id: 'sd9', name: "Mozzarella Cheese Sticks", description: "", price: 5.99, category: "SIDES" },
  { id: 'sd10', name: "Pepper-Jack Mac & Cheese Bites", description: "", price: 5.99, category: "SIDES" },
  { id: 'sd11', name: "Kicker Onion Petals", description: "", price: 5.99, category: "SIDES" },
  { id: 'sd12', name: "Country Fried Pickles", description: "", price: 5.99, category: "SIDES" },
  { id: 'sd13', name: "Fried Green Tomatoes", description: "", price: 5.99, category: "SIDES" },
  { id: 'sd14', name: "Potato Chips", description: "", price: 1.99, category: "SIDES" },
  { id: 'sd15', name: "Baked Lays", description: "", price: 1.99, category: "SIDES", dropdowns: [{ name: "Flavor", options: ["Plain", "BBQ"] }] },

  // FAMILY MEALS & TRAYS
  { id: 'fm1', name: "Fried Catfish", description: "We proudly serve Mississippi Delta Catfish!", price: 0, category: "FAMILY MEALS & TRAYS", sizes: [{ name: '15 Piece', price: 34.99 }, { name: '30 Piece', price: 59.99 }] },
  { id: 'fm2', name: "Fried/Grilled Shrimp", description: "", price: 0, category: "FAMILY MEALS & TRAYS", sizes: [{ name: '15 Piece', price: 29.99 }, { name: '30 Piece', price: 49.99 }] },
  { id: 'fm3', name: "Fried Oyster", description: "", price: 0, category: "FAMILY MEALS & TRAYS", sizes: [{ name: '15 Piece', price: 29.99 }, { name: '30 Piece', price: 49.99 }] },
  { id: 'fm4', name: "Seafood Combo Tray", description: "15 Piece Catfish, 15 Piece Shrimp, 15 Piece Oyster.", price: 79.99, category: "FAMILY MEALS & TRAYS" },
  { id: 'fm5', name: "Jumbo Wings", description: "", price: 0, category: "FAMILY MEALS & TRAYS", sizes: [{ name: '25 Piece', price: 39.99 }, { name: '50 Piece', price: 59.99 }] },
  { id: 'fm6', name: "Po Boys Party Tray", description: "Combo Ham, Turkey, & Roast Beef, all dressed with mayo, lettuce, tomato, pickle & cheese.", price: 0, category: "FAMILY MEALS & TRAYS", sizes: [{ name: 'Small Tray (28 Pieces)', price: 109.99 }, { name: 'Large Tray (40 Pieces)', price: 129.99 }] },
  { id: 'fm7', name: "Salad Tray", description: "Serves 14.", price: 99.99, category: "FAMILY MEALS & TRAYS" },
  { id: 'fm8', name: "Large Homemade Chips", description: "", price: 39.99, category: "FAMILY MEALS & TRAYS" },
  { id: 'fm9', name: "Large Fries", description: "", price: 39.99, category: "FAMILY MEALS & TRAYS" },

  // KID'S MEALS
  { id: 'km1', name: "Kid's Meal Combo", description: "Served with fries, a drink & cookie.", price: 7.99, category: "KID'S MEALS", dropdowns: [{ name: "Choice of main", options: ["Cheeseburger", "Chicken Nuggets"] }] },

  // DESSERTS
  { id: 'ds1', name: "Freshly Baked Cookies", description: "", price: 0.99, category: "DESSERTS" }
];
