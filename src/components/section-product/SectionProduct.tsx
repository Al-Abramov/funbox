import { data } from '../../data';
import { normalizeData } from '../../utils/normalizeData';
import { Item } from './item/Item';
import style from './SectionProduct.module.scss';
import { Title } from './title/Title';

export const SectionProduct = () => {
  normalizeData(data);
  return (
    <section className={style.products}>
      <div className={style.container}>
        <Title />
        <div className={style.cardsWrapper}>
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
        </div>
      </div>
    </section>
  );
};
