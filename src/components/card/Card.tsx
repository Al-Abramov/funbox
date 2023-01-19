import LayoutFlex from '../layout-flex';
import { CardProps } from './Card.interface';
import style from './Card.module.scss';
import CardDescription from './components/CardDescription/CardDescription';
import { ProductWeight } from './components/ProductWeight/ProductWeight';

export const Card: React.FC<CardProps> = (props) => {
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
        <LayoutFlex flex="between" class={style.cardInner}>
          <CardDescription
            filling={props.filling}
            portionCount={props.portionCount}
            promo={props.promo}
          />

          <ProductWeight weight={props.weight} />
        </LayoutFlex>
      </div>
    </>
  );
};
