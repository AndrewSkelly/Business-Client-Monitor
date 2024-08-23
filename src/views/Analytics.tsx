import React from 'react';
import './Analytics.scss'

const Analytics: React.FC = () => {
  return (
    <div className='clientlog'>
      <h1 className='title'>Analytics Page</h1>
      <p className='text'>This is where analytics data will be displayed.</p>
      <div className='items'>
        <div>hi</div>
        <div>this</div>
        <div>is</div>
        <div>row</div>
      </div>
    </div>
  );
};

export default Analytics;