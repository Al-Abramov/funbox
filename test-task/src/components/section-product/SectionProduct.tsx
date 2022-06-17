import { Item } from './item/Item';
import style from './SectionProduct.module.scss';
import { Title } from './title/Title';

export const SectionProduct = () => {
  const numberOfItems = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <section className={style.products}>
      <div className={style.container}>
        <Title />
        <div className={style.cardsWrapper}>
          {numberOfItems.map((elem) => (
            <Item key={elem.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
