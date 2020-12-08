const initialState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PIZZAS_REQUEST':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case 'CHANJE_IS_LOADDED':
      return {
        ...state,
        isLoaded: false,
      };
    default:
      return state;
  }
};

export default pizzas;
