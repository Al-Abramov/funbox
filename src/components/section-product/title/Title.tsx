import style from './Title.module.scss';

export const Title = () => {
  return (
    <div className={style.titleContainer}>
      <h2 className={style.title}>Ты сегодня покормил кота?</h2>
    </div>
  );
};
