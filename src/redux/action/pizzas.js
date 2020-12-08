import { getPizzas } from './request';

export const fetchPizzasRequest = (data) => ({
  type: 'FETCH_PIZZAS_REQUEST',
  payload: data,
});

const chanjIsLoadded = {
  type: 'CHANJE_IS_LOADDED',
};

export const fetchAllPizzas = (activeCatId, sortOption) => (dispatch) => {
  dispatch(chanjIsLoadded);
  return getPizzas(activeCatId, sortOption).then((data) => dispatch(fetchPizzasRequest(data)));
};
