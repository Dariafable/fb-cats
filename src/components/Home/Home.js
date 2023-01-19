import React from 'react';
import CatCard from '../CatCard/CatCard';

import './HomeStyles.css';

const Home = ({ catFood }) => {
  return (
    <section className='home'>
      <h1 className='home-title'>Ты сегодня покормил кота?</h1>
      <div className='home-cats'>
        {catFood.map((food) => (
          <CatCard key={food.id} food={food} />
        ))}
      </div>
    </section>
  );
};

export default Home;
