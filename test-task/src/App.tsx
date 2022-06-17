import React from 'react';
import style from './App.module.scss';
import { SectionProduct } from './components/section-product/SectionProduct';

function App() {
  return (
    <main className={style.main}>
      <SectionProduct />
    </main>
  );
}

export default App;
