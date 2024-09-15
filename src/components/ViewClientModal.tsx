import React, { useState } from 'react';
import { ClientDetails } from '../interfaces/Client';
import './ViewClientModal.scss';

interface ViewClientModalProps {
  client: ClientDetails;
  closeModal: () => void;
  deleteClient: (clientId: number) => void;
  updateClient: (clientId: number, updatedClient: ClientDetails) => void;
}

const ViewClientModal: React.FC<ViewClientModalProps> = ({ client, closeModal, deleteClient, updateClient }) => {
  const [isEditing, setIsEditing] = useState(false); // Track if we're in edit mode
  const [editedClient, setEditedClient] = useState<ClientDetails>(client); // Store the editable client details
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  // Handle input changes in the form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedClient(prevClient => ({
      ...prevClient,
      [name]: value,
    }));
  };

  // Handle Save (PUT request)
  const handleSave = async () => {
    setIsLoading(true); // Set loading state while saving
    try {
      const response = await fetch(`https://localhost:7053/api/Clients/${editedClient.clientid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedClient), // Send the updated client details
      });

      if (!response.ok) {
        throw new Error(`Failed to update client: ${response.statusText}`);
      }

      // Update client in parent component
      updateClient(editedClient.clientid, editedClient);

      // Close the modal after saving
      closeModal();
    } catch (error) {
      console.error('Error updating client:', error);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  // Handle delete client
  const handleDelete = () => {
    deleteClient(client.clientid);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{isEditing ? 'Edit Client Details' : 'Client Details'}</h2>

        {!isEditing ? (
          <>
            {/* View Mode */}
            <div className="client-detail">
              <strong>Client ID:</strong>
              <p>{client.clientid}</p>
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
              <button className="edit-button" onClick={() => setIsEditing(true)}>
                Edit
              </button>
              <button className="delete-button" onClick={handleDelete}>
                Delete
              </button>
              <button className="close-button" onClick={closeModal}>
                X
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Edit Mode */}
            <div className="client-detail">
              <strong>Client ID:</strong>
              <p>{editedClient.clientid}</p>
            </div>
            <div className="client-detail">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={editedClient.name ?? ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="client-detail">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={editedClient.email ?? ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="client-detail">
              <label>Phone:</label>
              <input
                type="text"
                name="phone"
                value={editedClient.phone ?? ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="client-detail">
              <label>Tags:</label>
              <input
                type="text"
                name="tags"
                value={editedClient.tags ?? ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="client-detail">
              <label>Notes:</label>
              <textarea
                name="notes"
                value={editedClient.notes ?? ''}
                onChange={handleInputChange}
              />
            </div>

            <div className="modal-actions">
              <button className="save-button" onClick={handleSave} disabled={isLoading}>
                {isLoading ? 'Saving...' : 'Save'}
              </button>
              <button className="cancel-button" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ViewClientModal;
