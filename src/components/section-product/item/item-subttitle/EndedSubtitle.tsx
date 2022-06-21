import { ItemsProps } from '../interface/ItemsProps';
import style from './ItemSubtitle.module.scss';

export const EndSubtitle: React.FC<Partial<ItemsProps>> = (props) => {
  return <p className={style.endedText}>Печалька, {props.filling} закончился.</p>;
};
