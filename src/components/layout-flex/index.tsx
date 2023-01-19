import React from 'react';
import { LayoutFlexProps } from './layoutFlex.interface';
import './style.scss';

const LayoutFlex: React.FC<LayoutFlexProps> = (props) => {
  return (
    <div className={`LayoutFlex LayoutFlex_${props.flex} ${props.class || ''}`}>
      {props.children}
    </div>
  );
};

export default React.memo(LayoutFlex);
