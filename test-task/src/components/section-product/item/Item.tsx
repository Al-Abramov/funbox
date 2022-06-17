import { Card } from './card/Carrd';
import { ItemSubtitle } from './item-subttitle/ItemSubtitle';
import style from './Item.module.scss';

export const Item = () => {
  return (
    <div className={style.item}>
      <Card />
      <ItemSubtitle />
    </div>
  );
};
