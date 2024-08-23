import React from 'react';
import './ClientList.scss'

const ClientList: React.FC = () => {
  return (
    // <div className='clientlog'>
    //   <h1 className='title'>Client Log Page</h1>
    //   <p className='text'>name, email, pillnote and edit or delete</p>
    //   <div className='container'>
    //     <div>hi</div>
    //     <div>this</div>
    //     <div>is</div>
    //     <div>row</div>
    //   </div>
    // </div>

    <div className="client-log">
    <div className="client-row">
        <div className="client-info">
            <h3>Lauren Dorrington</h3>
            <p>Email: lauren457@gmail.com</p>
            <p>Phone: 085 1387536</p>
        </div>
        <div className="client-actions">
        <button className='edit-action'>Edit</button>
        <button className='delete-action'>Delete</button>
        </div>
    </div>

    <div className="client-row">
        <div className="client-info">
            <h3>Andrew Skelly</h3>
            <p>Email: andrews2001@hotmail.com</p>
            <p>Phone: 0851372265</p>
        </div>
        <div className="client-actions">
            <button className='edit-action'>Edit</button>
            <button className='delete-action'>Delete</button>
        </div>
    </div>
    
    {/* More client rows */}
</div>

  );
};

export default ClientList;
