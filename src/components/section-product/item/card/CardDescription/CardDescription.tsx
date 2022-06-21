import { ItemsProps } from '../../interface/ItemsProps';
import style from './CardDescription.module.scss';
import CardStyle from '../Card.module.scss';

export const CardDescription: React.FC<Partial<ItemsProps>> = (props) => {
  return (
    <div className={style.content}>
      <p className={CardStyle.contentDescr}>Сказочное заморское яство</p>
      <p className={CardStyle.notice}>Котэ не одобряет?</p>
      <div className={style.titleContainer}>
        <p className={style.title}>Нямушка</p>
        <p className={style.subtitle}>{props.filling}</p>
      </div>
      <div className={style.description}>
        <span>
          <span className={style.descriptionCount}>{props.portionCount}</span> порций
        </span>
        <span>{props.promo}</span>
      </div>
    </div>
  );
};
