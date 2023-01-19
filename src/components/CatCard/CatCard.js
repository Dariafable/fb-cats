import React from 'react';

import './CatCardStyles.css';

const CatCard = ({ food }) => {
  const [isSelected, setIsSelected] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(false);

  const selectHandler = () => {
    setIsSelected(!isSelected);
  };
  const hoverHandler = () => {
    setIsHovered(!isHovered);
  };
  const disableHandler = () => {
    setIsDisabled(!isDisabled);
  };

  const catStatus =
    (isDisabled ? ' disabled' : '') ||
    (isSelected && isHovered ? ' selected-hover' : '') ||
    (isSelected ? ' selected' : '') ||
    (isHovered ? ' hover' : '');

  const getPortionText = (portion) => {
    switch (true) {
      case portion > 4 || portion === 0:
        return ' порций';
      case portion > 1:
        return ' порции';
      default:
        return ' порция';
    }
  };

  const getGiftText = (gift) => {
    switch (true) {
      case gift > 4 || gift === 0:
        return ' мышей';
      case gift > 1:
        return ' мыши';
      default:
        return ' мышь';
    }
  };

  return (
    <div className='cat-card'>
      <div className={'cat-box' + catStatus}>
        <div
          className={isDisabled ? 'cat-block cat-disabled' : 'cat-block'}
          onClick={selectHandler}
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
          onDoubleClick={disableHandler}
        >
          <div className='cat-content'>
            <p
              className={isHovered && isSelected && !isDisabled ? 'cat-desc cat-hover' : 'cat-desc'}
            >
              {isHovered && isSelected && !isDisabled ? 'Котэ не одобряет?' : food.description}
            </p>
            <div className='cat-head'>
              <h3 className='cat-title'>{food.title}</h3>
              <h5 className='cat-type'>{food.type}</h5>
            </div>
            <div className='cat-gift'>
              <p className='cat-portion'>
                {food.portions}
                {getPortionText(food.portions)}
              </p>
              <p className='cat-mouse'>
                {food.gift === 1 ? (
                  <span>мышь в подарок</span>
                ) : (
                  <span>
                    <span>{food.gift}</span>
                    {getGiftText(food.gift)} в подарок
                  </span>
                )}
                <p>{food.gift > 4 ? <span>Заказчик доволен</span> : ''}</p>
              </p>
            </div>
          </div>
          <div className={'cat-weight' + catStatus}>
            <div className='cat-numbers'>
              <p className='cat-count'>{food.weight}</p>
              <p className='cat-val'>кг</p>
            </div>
          </div>
        </div>
      </div>
      {(isDisabled && <p className='cat-buy text-disabled'>Печалька, {food.type} закончился</p>) ||
        (isSelected ? (
          <p className='cat-buy'>{food.selected}</p>
        ) : (
          <p className='cat-buy'>
            Чего сидишь? Порадуй котэ,{' '}
            <span className='cat-action' onClick={selectHandler}>
              купи.
            </span>
          </p>
        ))}
    </div>
  );
};

export default CatCard;
