import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChartBar, faCog } from '@fortawesome/free-solid-svg-icons';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <div className='home'>

      {/* Big Card */}
      <div className='big-card'>
        <h1 className='title'>Home Page</h1>
      </div>

      {/* Card Row */}
      <div className='card-row'>
        <div className='card'>
          <FontAwesomeIcon className="card-icon" icon={faUsers} />
          <h3 className='card-title'>Manage Clients</h3>
          <p className='card-text'>Easily manage your clients with a user-friendly interface.</p>
        </div>
        <div className='card'>
          <FontAwesomeIcon className="card-icon" icon={faChartBar} />
          <h3 className='card-title'>Track Analytics</h3>
          <p className='card-text'>Keep an eye on important data and analytics in real-time.</p>
        </div>
        <div className='card'>
          <FontAwesomeIcon className="card-icon" icon={faCog} />
          <h3 className='card-title'>Settings & Customization</h3>
          <p className='card-text'>Fully customize your experience with advanced settings.</p>
        </div>
      </div>

      {/* Big Card */}
      <div className='big-card'>
        Big Card Below
      </div>
    </div>
  );
};

export default Home;
