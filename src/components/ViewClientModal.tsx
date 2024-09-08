import React from 'react';
import {ClientDetails} from '../interfaces/Client.tsx'
import './ViewClientModal.scss';

interface ViewClientModalProps {
  client: ClientDetails;
  closeModal: () => void;
  deleteClient: (clientId: number) => void;
}

const ViewClientModal: React.FC<ViewClientModalProps> = ({ client, closeModal, deleteClient }) => {
  const handleDelete = () => {
    deleteClient(client.clientid); // Call deleteClient function passed as a prop
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Client Details</h2>

        <div className="client-detail">
          <strong>Client ID</strong>
          <p>{client.clientid || 'N/A'}</p>
        </div>
        <div className="client-detail">
          <strong>Name:</strong>
          <p>{client.name || 'N/A'}</p>
        </div>
        <div className="client-detail">
          <strong>Email:</strong>
          <p>{client.email || 'N/A'}</p>
        </div>
        <div className="client-detail">
          <strong>Phone:</strong>
          <p>{client.phone || 'N/A'}</p>
        </div>
        <div className="client-detail">
          <strong>Tags:</strong>
          <p>{client.tags || 'N/A'}</p>
        </div>
        <div className="client-detail">
          <strong>Notes:</strong>
          <p>{client.notes || 'N/A'}</p>
        </div>

        <div className="modal-actions">
          <button className="delete-button" onClick={handleDelete}>Delete</button>
          <button className="close-button" onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ViewClientModal;
