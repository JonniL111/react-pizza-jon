import React from 'react';

function CardButton({ item, activeType, activeSize, onClickCardButton, children }) {
  return (
    <div
      className="button button--outline button--add"
      onClick={() => onClickCardButton(item, activeType, activeSize)}>
      {children}
    </div>
  );
}

export default CardButton;
