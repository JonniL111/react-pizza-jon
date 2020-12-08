import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';
import { CardButton } from '../containers/';

const PizzaCard = React.memo(function PizzaCard({ item, options, onClickCardButton, orderList }) {
  const { imageUrl, name, types, sizes, price } = item;
  const { cake, listSize } = options;
  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(sizes[0]);

  function _getType(val) {
    setActiveType(val);
  }
  function _getSize(val) {
    setActiveSize(val);
  }

  function _count(orderList, id) {
    if (orderList[id]) {
      return <i>{orderList[id].reduce((sum, item) => sum + item.count, 0)}</i>;
    } else {
      return '';
    }
  }

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {cake.map((item, idx) => (
            <li
              className={classNames({
                active: activeType === idx,
                disabled: !types.includes(idx),
              })}
              onClick={() => _getType(idx)}
              key={idx}>
              {item}
            </li>
          ))}
        </ul>
        <ul>
          {listSize.map((item, idx) => (
            <li
              className={classNames({
                active: activeSize === item,
                disabled: !sizes.includes(item),
              })}
              onClick={() => _getSize(item)}
              key={idx}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <CardButton
          activeType={activeType}
          activeSize={activeSize}
          item={item}
          onClickCardButton={onClickCardButton}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {_count(orderList, item.id)}
        </CardButton>
      </div>
    </div>
  );
});

PizzaCard.propTypes = {
  id: PropTypes.number,
  price: PropTypes.number,
  rating: PropTypes.number,
  category: PropTypes.number,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  sizes: PropTypes.array,
  types: PropTypes.array,
};

export default PizzaCard;
