// src/components/ServiceHistory.tsx
import React from 'react';
import './ServiceHistory.scss';
// import { ServiceHistoryDetails } from '../interfaces/ServiceHistory';
import { useFetchServiceHistory } from '../hooks/useFetchServiceHistory'; // Hook for fetching service history

const ServiceHistory: React.FC = () => {
  const { serviceHistory, loading, error } = useFetchServiceHistory(); // Fetch service history data

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="service-history">
      <div className="table-header">
        <div className="header-cell">Client ID</div>
        <div className="header-cell">Staff ID</div>
        <div className="header-cell">Service Type</div>
        <div className="header-cell">Service Date</div>
      </div>

      {serviceHistory.length > 0 ? (
        serviceHistory.map(record => (
          <div key={`${record.clientid}-${record.servicedate}`} className="service-row">
            <div className="service-cell">{record.clientid}</div>
            <div className="service-cell">{record.staffid}</div>
            <div className="service-cell">{record.servicetype}</div>
            <div className="service-cell"><span className='service-date'>{new Date(record.servicedate).toLocaleString()}</span></div>
          </div>
        ))
      ) : (
        <div>No service history available</div>
      )}
    </div>
  );
};

export default ServiceHistory;
