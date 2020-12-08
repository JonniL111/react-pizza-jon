import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { options } from '../assets/options';
import { addToCart } from '../redux/action/cart';
import { fetchAllPizzas } from '../redux/action/pizzas';
import { setActiveCatId, setActiveSort } from '../redux/action/filters';
import { TopMenu, SortPopup, PizzaCard } from '../containers/';
import SkeletonLoader from '../containers/SkeletonLoader';

function Home() {
  const dispatch = useDispatch();

  const pizzaList = useSelector(({ pizzas: { items } }) => items);
  const isLoaded = useSelector(({ pizzas: { isLoaded } }) => isLoaded);
  const { activeCatId, sortOption } = useSelector(({ filters }) => filters);
  const orderList = useSelector(({ cart: { items } }) => items);

  React.useEffect(() => {
    dispatch(fetchAllPizzas(activeCatId, sortOption));
  }, [activeCatId, sortOption]);

  const onClickCategory = React.useCallback((id) => {
    dispatch(setActiveCatId(id));
  }, []);
  const onClickSort = React.useCallback((field) => {
    dispatch(setActiveSort(field));
  }, []);

  const onClickCardButton = (item, activeType, activeSize) => {
    const newItem = {
      id: item.id,
      name: item.name,
      imageUrl: item.imageUrl,
      activeType: options.cake[activeType],
      activeSize: activeSize,
      price: item.price,
      allPrice: item.price,
      count: 1,
    };

    return dispatch(addToCart(newItem));
  };

  return (
    <div className="container">
      <div className="content__top">
        <TopMenu
          categoryList={options.categoryList}
          activeCatId={activeCatId}
          onClickCategory={onClickCategory}
        />
        <SortPopup sortOption={sortOption} onClickSort={onClickSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? pizzaList.map((item) => (
              <PizzaCard
                key={item.id}
                item={item}
                options={options}
                onClickCardButton={onClickCardButton}
                orderList={orderList}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, idx) => <SkeletonLoader key={idx} />)}
      </div>
    </div>
  );
}

export default Home;
