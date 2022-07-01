import { ItemsProps } from '../interface/ItemsProps';
import style from './Card.module.scss';
import { CardDescription } from './CardDescription/CardDescription';
import { ProductWeight } from './ProductWeight/ProductWeight';

export const Card: React.FC<ItemsProps> = (props) => {
  const changeStyle = () => {
    if (!props.stateItem) {
      return `${style.card} ${!props.count && style.endProduct}`;
    }
    return `${style.card} ${style.active}`;
  };

  return (
    <>
      {!props.count && <div className={style.cover}></div>}
      <div className={changeStyle()} onClick={props.toggleChoose} tabIndex={1}>
        <div className={style.cardInner}>
          <CardDescription
            filling={props.filling}
            portionCount={props.portionCount}
            promo={props.promo}
          />

          <ProductWeight weight={props.weight} />
        </div>
      </div>
    </>
  );
};
