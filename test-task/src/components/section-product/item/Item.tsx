import { useState } from 'react';
import { Card } from './card/Card';
import { ItemsProps } from './interface/ItemsProps';
import { EndSubtitle } from './item-subttitle/EndedSubtitle';
import { ItemSubtitle } from './item-subttitle/ItemSubtitle';
import style from './Item.module.scss';

export const Item: React.FC<ItemsProps> = (props) => {
  const [stateItem, setStateItem] = useState(false);

  const toggleChoose = () => {
    setStateItem(!stateItem);
  };

  return (
    <div className={style.item}>
      <Card
        weight={props.weight}
        count={props.count}
        portionCount={props.portionCount}
        promo={props.promo}
        filling={props.filling}
        toggleChoose={toggleChoose}
        stateItem={stateItem}
      />
      {props.count ? (
        <ItemSubtitle
          toggleChoose={toggleChoose}
          stateItem={stateItem}
          activeDescr={props.activeDescr}
        />
      ) : (
        <EndSubtitle filling={props.filling} />
      )}
    </div>
  );
};
