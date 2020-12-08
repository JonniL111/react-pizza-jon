import React from 'react';

function _TopMenuList(categoryList, activeCatId, onClickCategory) {
  const categorys = categoryList.map((item, idx) => {
    return (
      <li
        className={activeCatId === idx ? 'active' : ''}
        onClick={() => onClickCategory(idx)}
        key={idx}>
        {item}
      </li>
    );
  });

  return (
    <ul>
      <li className={activeCatId === null ? 'active' : ''} onClick={() => onClickCategory(null)}>
        Все
      </li>
      {categorys}
    </ul>
  );
}

const TopMenu = React.memo(function TopMenu({
  categoryList,
  activeCatId = null,
  onClickCategory = null,
}) {
  return (
    <div className="categories">{_TopMenuList(categoryList, activeCatId, onClickCategory)}</div>
  );
});

export default TopMenu;
