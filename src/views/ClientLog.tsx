import React from 'react';
import './ClientLog.scss'

const ClientLog: React.FC = () => {
  return (
    <div className='clientlog'>
      <h1 className='title'>Client Log Page</h1>
      <p className='text'>This is where client logs will be displayed.</p>
      <div className='items'>
        <div>hi</div>
        <div>this</div>
        <div>is</div>
        <div>row</div>
      </div>
    </div>
  );
};

export default ClientLog;
