const initialState = {
  activeCatId: null,
  sortOption: 'name',
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_CAT_ID':
      return {
        ...state,
        activeCatId: action.payload,
      };
    case 'SET_ACTIVE_SORT':
      return {
        ...state,
        sortOption: action.payload,
      };

    default:
      return state;
  }
};

export default filters;
