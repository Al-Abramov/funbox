import React from 'react';
import { ItemsProps } from '../interface/ItemsProps';
import style from './ItemSubtitle.module.scss';

const ItemSubtitle: React.FC<Partial<ItemsProps>> = (props) => {
  return props.stateItem ? (
    <p className={style.subttl}>{props.activeDescr}</p>
  ) : (
    <p className={style.subttl}>
      Чего сидишь? Порадуй котэ,{' '}
      <span className={style.buyTxt} onClick={props.toggleChoose}>
        купи.
      </span>
    </p>
  );
};

export default React.memo(ItemSubtitle);
