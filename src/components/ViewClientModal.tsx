import React, { useState } from 'react';
import { ClientDetails } from '../interfaces/Client';
import { ViewClientModalProps } from '../interfaces/ViewClientModalProps';
import './ViewClientModal.scss';
import Button from './Buttons/Button';

const ViewClientModal: React.FC<ViewClientModalProps> = ({ client, closeModal, deleteClient, updateClient }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedClient, setEditedClient] = useState<ClientDetails>(client);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedClient((prevClient: ClientDetails) => ({
      ...prevClient,
      [name]: value,
    }));
  };


  const handleSave = async () => {
    setIsLoading(true);
    try {
      // https://localhost:7053/api/Clients/${editedClient.clientid} 
      const response = await fetch(`https://business-client-monitor-api-e6d3axb9bzhwbhef.ukwest-01.azurewebsites.net/api/Clients/${editedClient.clientid} `, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedClient),
      });

      if (!response.ok) {
        throw new Error(`Failed to update client: ${response.statusText}`);
      }

      updateClient(editedClient.clientid, editedClient);
      closeModal();
    } catch (error) {
      console.error('Error updating client:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = () => {
    deleteClient(client.clientid);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{isEditing ? 'Edit Client Details' : 'Client Details'}</h2>

        <div className="client-detail">
          <div className="detail-item">
            <strong>Client ID:</strong>
            <p>{client.clientid}</p>
          </div>
          <div className="detail-item">
            <strong>Name:</strong>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={editedClient.name || ''}
                onChange={handleInputChange}
              />
            ) : (
              <p>{client.name || 'N/A'}</p>
            )}
          </div>
          <div className="detail-item">
            <strong>Email:</strong>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={editedClient.email || ''}
                onChange={handleInputChange}
              />
            ) : (
              <p>{client.email || 'N/A'}</p>
            )}
          </div>
          <div className="detail-item">
            <strong>Phone:</strong>
            {isEditing ? (
              <input
                type="tel"
                name="phone"
                value={editedClient.phone || ''}
                onChange={handleInputChange}
              />
            ) : (
              <p>{client.phone || 'N/A'}</p>
            )}
          </div>
          <div className="detail-item">
            <strong>Tags:</strong>
            {isEditing ? (
              <input
                name="tags"
                value={editedClient.tags || ''}
                onChange={handleInputChange}
              />
            ) : (
              <p>{client.tags || 'N/A'}</p>
            )}
          </div>
          <div className="detail-item">
            <strong>Notes:</strong>
            {isEditing ? (
              <input
                name="notes"
                value={editedClient.notes || ''}
                onChange={handleInputChange}
              />
            ) : (
              <p>{client.notes || 'N/A'}</p>
            )}
          </div>
        </div>

        <div className="modal-actions">
          {!isEditing ? (
            <>
              <Button variant={'primary'} label={'Edit'} onClick={() => setIsEditing(true)}></Button>
              <Button variant={'delete'} label={'Delete'} onClick={handleDelete}></Button>
              <Button variant={'delete'} label={'X'} onClick={closeModal}></Button>
            </>
          ) : (
            <>
              <Button variant={'primary'} label={isLoading ? 'Saving...' : 'Save'} onClick={handleSave} disabled={isLoading}></Button>
              <Button variant={'delete'} label={'Cancel'} onClick={() => setIsEditing(false)}></Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewClientModal;
