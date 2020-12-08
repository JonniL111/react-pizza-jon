export const addToCart = (newItem) => ({
  type: 'ADD_TO_CART',
  payload: newItem,
});

export const decItemInCart = (id, nId) => ({
  type: 'UPDATE_ITEM_IN_CART',
  payload: { id, nId, incDec: -1 },
});

export const incItemInCart = (id, nId) => ({
  type: 'UPDATE_ITEM_IN_CART',
  payload: { id, nId, incDec: 1 },
});

export const removeItemFromCart = (id, nId) => ({
  type: 'REMOVE_ITEM_FROM_CART',
  payload: { id, nId },
});

export const cleanAll = () => ({
  type: 'CLEAN_ALL',
});
