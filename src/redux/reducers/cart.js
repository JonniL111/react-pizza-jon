import produce from 'immer';

const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
};

const _findIdForAdd = (draft, action) => {
  return draft.items[action.payload.id].findIndex(
    (item) =>
      item.id === action.payload.id &&
      item.activeType === action.payload.activeType &&
      item.activeSize === action.payload.activeSize,
  );
};
const _addItemToCart = (draft, action) => {
  const productId = action.payload.id;
  let newItem = {};

  if (draft.items[productId]) {
    const idForUpdate = _findIdForAdd(draft, action);
    if (idForUpdate >= 0) {
      draft.items[productId][idForUpdate].count += 1;
      draft.items[productId][idForUpdate].allPrice += action.payload.price;
    } else {
      const length = draft.items[productId].length;
      newItem = { ...action.payload, nId: action.payload.id * 100 + length };
      draft.items[productId].push(newItem);
    }
  } else {
    newItem = { ...action.payload, nId: action.payload.id * 100 };
    draft.items[productId] = [newItem];
  }
};

const _updateTotal = (draft, incDec, price) => {
  draft.totalCount += incDec;
  draft.totalPrice += price * incDec;
};

const cart = produce((draft, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      _updateTotal(draft, 1, action.payload.price);
      _addItemToCart(draft, action);
      break;
    }

    case 'UPDATE_ITEM_IN_CART': {
      const incDec = action.payload.incDec;
      const groupId = action.payload.id;
      const activeId = draft.items[groupId].findIndex((item) => item.nId === action.payload.nId);
      const price = draft.items[groupId][activeId].price;
      _updateTotal(draft, incDec, price);
      draft.items[groupId][activeId].count += incDec;
      draft.items[groupId][activeId].allPrice += price * incDec;
      if (draft.items[groupId][activeId].count < 1) draft.items[groupId].splice(activeId, 1);
      break;
    }

    case 'REMOVE_ITEM_FROM_CART': {
      const groupId = action.payload.id;
      const totalCount = draft.totalCount;
      const totalPrice = draft.totalPrice;
      const activeId = draft.items[groupId].findIndex((item) => item.nId === action.payload.nId);
      draft.totalCount = totalCount - draft.items[groupId][activeId].count;
      draft.totalPrice = totalPrice - draft.items[groupId][activeId].allPrice;
      draft.items[groupId].splice(activeId, 1);
      break;
    }

    case 'CLEAN_ALL': {
      draft.items = {};
      draft.totalCount = 0;
      draft.totalPrice = 0;
      break;
    }

    default:
      return draft;
  }
}, initialState);

export default cart;
