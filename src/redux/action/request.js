import axios from 'axios';

export const getPizzas = (activeCatId, sortOption) => {
  const activeSort = sortOption !== null ? '?_sort=' + sortOption + '&order = ask' : '';
  const catId = activeCatId !== null ? '&category=' + activeCatId : '';
  return axios.get(`/pizzas/${activeSort}${catId}`).then((pizzas) => pizzas.data);
};
