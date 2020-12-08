import axios from 'axios';

export const ApiAllPizzas = () => (dispatch) => {
  axios.get('http://localhost:3001/pizzas/').then(({ data }) => {
    return data;
  });
};
