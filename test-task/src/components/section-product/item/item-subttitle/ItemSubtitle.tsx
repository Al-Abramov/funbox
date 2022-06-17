import style from './ItemSubtitle.module.scss';

export const ItemSubtitle = () => {
  return (
    <p className={style.subttl}>
      Чего сидишь? Порадуй котэ, <span className={style.buyTxt}>купи.</span>
    </p>
  );
};
