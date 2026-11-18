import { createSlice } from '@reduxjs/toolkit';

const loadCartFromStorage = () => {
  try {
    const saved = localStorage.getItem('dialed_cart');
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
};

const saveCartToStorage = (items) => {
  try {
    localStorage.setItem('dialed_cart', JSON.stringify(items));
  } catch (e) {
    console.error("Could not save cart", e);
  }
};

const initialState = {
  items: loadCartFromStorage(),
  isOpen: false,
  notification: null,
  promoCode: '',
  discountPercent: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity = 1, isSubscription = false } = action.payload;
      const unitPrice = isSubscription ? product.detail_price * 0.85 : product.detail_price;
      const cartItemId = `${product.id}-${isSubscription ? 'sub' : 'one'}`;

      const existingIndex = state.items.findIndex(item => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        state.items[existingIndex].quantity += quantity;
      } else {
        state.items.push({
          cartItemId,
          id: product.id,
          name: product.name,
          slug: product.slug,
          price: Number(unitPrice.toFixed(2)),
          regularPrice: product.listing_price,
          isSubscription,
          image: product.main_image,
          pack_size: product.pack_size,
          quantity,
        });
      }

      state.isOpen = true;
      state.notification = `Added ${product.name} to cart`;
      saveCartToStorage(state.items);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.cartItemId !== action.payload);
      saveCartToStorage(state.items);
    },
    updateQuantity: (state, action) => {
      const { cartItemId, quantity } = action.payload;
      if (quantity <= 0) {
        state.items = state.items.filter(item => item.cartItemId !== cartItemId);
      } else {
        const item = state.items.find(i => i.cartItemId === cartItemId);
        if (item) {
          item.quantity = quantity;
        }
      }
      saveCartToStorage(state.items);
    },
    toggleCart: (state, action) => {
      state.isOpen = action.payload !== undefined ? action.payload : !state.isOpen;
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToStorage([]);
    },
    clearNotification: (state) => {
      state.notification = null;
    },
    applyPromoCode: (state, action) => {
      const code = action.payload.trim().toUpperCase();
      state.promoCode = code;
      if (code === 'DIALED10' || code === 'FOCUS10') {
        state.discountPercent = 10;
        state.notification = 'Promo code DIALED10 applied: 10% off!';
      } else if (code === 'PERFORMANCE15') {
        state.discountPercent = 15;
        state.notification = 'Promo code applied: 15% off!';
      } else {
        state.discountPercent = 0;
        state.notification = 'Invalid promo code';
      }
    }
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  toggleCart,
  clearCart,
  clearNotification,
  applyPromoCode
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartIsOpen = (state) => state.cart.isOpen;
export const selectCartTotalCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartSubtotal = (state) =>
  state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
export const selectDiscountPercent = (state) => state.cart.discountPercent;
export const selectPromoCode = (state) => state.cart.promoCode;
export const selectCartNotification = (state) => state.cart.notification;

export default cartSlice.reducer;
