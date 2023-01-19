import React from 'react';
import { ItemsProps } from '../../../section-product/components/item/interface/ItemsProps';
import style from '../../Card.module.scss';

export const ProductWeight: React.FC<Partial<ItemsProps>> = (props) => {
  return (
    <div className={style.circle}>
      <span className={style.weight}>{props.weight}</span>
      <span>кг</span>
    </div>
  );
};

export default React.memo(ProductWeight);
