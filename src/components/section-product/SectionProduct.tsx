import { data } from '../../data';
import { normalizeData } from '../../utils/normalizeData';
import style from './SectionProduct.module.scss';
import Title from '../title/Title';
import CardsContainer from './components/cards-container';
import LayoutFlex from '../layout-flex';
import { useEffect, useState } from 'react';
import { DataInterface } from '../../data/data.interface';

export const SectionProduct = () => {
  const [cards, setCards] = useState<DataInterface[]>([]);

  useEffect(() => {
    setCards(normalizeData(data));
  }, []);

  return (
    <LayoutFlex flex="center" class={style.products}>
      <LayoutFlex flex="start" class={style.wrapper}>
        <Title text="Ты сегодня покормил кота?" />
        <CardsContainer data={cards} />
      </LayoutFlex>
    </LayoutFlex>
  );
};
