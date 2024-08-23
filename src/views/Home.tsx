import React from 'react';
import './Home.scss'

const Home: React.FC = () => {
  return (
    <div className='home'>
      <h1 className='title'>Home Page</h1>
      <p className='text'>Welcome to the home page!</p>
      <div className='items'>
        <div>hi</div>
        <div>this</div>
        <div>is</div>
        <div>row</div>
      </div>
    </div>
  );
};

export default Home;