import React from 'react';
import './ClientList.scss';
import Tag from '../components/Tag';
import AddButton from '../components/AddButton';

const ClientList: React.FC = () => {
    return (
        <>
            <div className="client-log">
                <AddButton />
                {/* Table Header */}
                <div className="table-header">
                    <div className="header-cell">Name</div>
                    <div className="header-cell">Email</div>
                    <div className="header-cell">Phone</div>
                    <div className="header-cell">Tags</div>
                    <div className="header-cell">Actions</div>
                </div>

                {/* Client Rows */}
                <div className="client-row">
                    <div className="client-cell">Lauren Dorrington</div>
                    <div className="client-cell">lauren457@gmail.com</div>
                    <div className="client-cell">085 1387536</div>
                    <div className="client-cell client-tags"><Tag text='Banned' backgroundColor='#ff1736' /></div>
                    <div className="client-cell client-actions">
                        <button className='edit-action'>Edit</button>
                        <button className='delete-action'>Delete</button>
                    </div>
                </div>

                <div className="client-row">
                    <div className="client-cell">Andrew Skelly</div>
                    <div className="client-cell">andrews2001@hotmail.com</div>
                    <div className="client-cell">0851372265</div>
                    <div className="client-cell client-tags"><Tag text='Missed Payment' backgroundColor='#bb22dd' /></div>
                    <div className="client-cell client-actions">
                        <button className='edit-action'>Edit</button>
                        <button className='delete-action'>Delete</button>
                    </div>
                </div>


                <div className="client-row">
                    <div className="client-cell">Hannah Skelly</div>
                    <div className="client-cell">hannahskelly@gmail.com</div>
                    <div className="client-cell">0851329847</div>
                    <div className="client-cell client-tags"><Tag text='New' backgroundColor='#22bbdd' /></div>
                    <div className="client-cell client-actions">
                        <button className='edit-action'>Edit</button>
                        <button className='delete-action'>Delete</button>
                    </div>
                </div>

                <div className="client-row">
                    <div className="client-cell">Niall Fitzpatrick</div>
                    <div className="client-cell">niallfitz95@outlook.com</div>
                    <div className="client-cell">0851345896</div>
                    <div className="client-cell client-tags"><Tag text='Friendly' backgroundColor='#22ddbb' /></div>
                    <div className="client-cell client-actions">
                        <button className='edit-action'>Edit</button>
                        <button className='delete-action'>Delete</button>
                    </div>
                </div>

                <div className="client-row">
                    <div className="client-cell">Aoife Byrne</div>
                    <div className="client-cell">aoifeb1994@yahoo.com</div>
                    <div className="client-cell">0851375568</div>
                    <div className="client-cell client-tags"><Tag text='Confrontational' backgroundColor='#ff8855' /></div>
                    <div className="client-cell client-actions">
                        <button className='edit-action'>Edit</button>
                        <button className='delete-action'>Delete</button>
                    </div>
                </div>

                <div className="client-row">
                    <div className="client-cell">Eoghan McCarthy</div>
                    <div className="client-cell">eoghanmc22@live.com</div>
                    <div className="client-cell">0851336942</div>
                    <div className="client-cell client-tags"><Tag text='Late' backgroundColor='#ffaa22' /></div>
                    <div className="client-cell client-actions">
                        <button className='edit-action'>Edit</button>
                        <button className='delete-action'>Delete</button>
                    </div>
                </div>

                <div className="client-row">
                    <div className="client-cell">Sinead Gallagher</div>
                    <div className="client-cell">sinead.gal@gmail.com</div>
                    <div className="client-cell">0851394726</div>
                    <div className="client-cell client-tags"><Tag text='Allergies' backgroundColor='#55aaff' /></div>
                    <div className="client-cell client-actions">
                        <button className='edit-action'>Edit</button>
                        <button className='delete-action'>Delete</button>
                    </div>
                </div>

                <div className="client-row">
                    <div className="client-cell">Padraig O'Shea</div>
                    <div className="client-cell">poshea01@hotmail.com</div>
                    <div className="client-cell">0851357729</div>
                    <div className="client-cell client-tags"><Tag text='Special Accommodations' backgroundColor='#22aabb' /></div>
                    <div className="client-cell client-actions">
                        <button className='edit-action'>Edit</button>
                        <button className='delete-action'>Delete</button>
                    </div>
                </div>
                {/* More client rows */}
            </div>
        </>
    );
};

export default ClientList;
