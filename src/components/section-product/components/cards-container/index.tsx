import React from 'react';
import LayoutFlex from '../../../layout-flex';
import { Item } from '../item/Item';
import { CardsContainerProps } from './cardsContainer.interface';
import style from './CardsContainer.module.scss';

const CardsContainer: React.FC<CardsContainerProps> = ({ data }) => {
  return (
    <LayoutFlex flex="between" class={style.container}>
      {data.map((card) => (
        <Item
          key={card.id}
          weight={card.weight}
          count={card.count}
          portionCount={card.portionCount}
          promo={card.promo}
          filling={card.filling}
          activeDescr={card.activeDescription}
        />
      ))}
    </LayoutFlex>
  );
};

export default React.memo(CardsContainer);
