import React from 'react';
import { TitleProps } from './Title.interface';
import style from './Title.module.scss';

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <div className={style.titleContainer}>
      <h2 className={style.title}>{text}</h2>
    </div>
  );
};

export default React.memo(Title);
