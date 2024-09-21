import React, { useState } from 'react';
import './ClientList.scss';
import Tag from '../components/Tag';
import AddButton from '../components/AddButton';
import ViewClientModal from '../components/ViewClientModal';
import { ClientDetails } from '../interfaces/Client';
import { useFetchClients } from '../hooks/useFetchClient'; // Hook for fetching clients
import { useDeleteClient } from '../hooks/useDeleteClient'; // Hook for deleting clients

// Define your available tags
const availableTags = [
  'New Customer',
  'Missed Payment',
  'Late',
  'Friendly',
  'Special Accommodations',
  'Confrontational',
  'Banned',
  'Allergies',
];

const ClientList: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]); // State for selected tags
  const { clients, loading, error, refreshClients } = useFetchClients(selectedTags);
  const { deleteClient, loading: deleteLoading, error: deleteError } = useDeleteClient();
  const [selectedClient, setSelectedClient] = useState<ClientDetails | null>(null);
  const [showViewModal, setShowViewModal] = useState(false);

  // Open the view/edit modal with selected client
  const handleViewClient = (client: ClientDetails) => {
    setSelectedClient(client);
    setShowViewModal(true);
  };

  // Close modal and reset state
  const closeModal = () => {
    setSelectedClient(null);
    setShowViewModal(false);
  };

  // Handle deleting a client
  const handleDeleteClient = async (clientId: number) => {
    const success = await deleteClient(clientId);
    if (success) {
      refreshClients(); // Refresh clients after deletion
      closeModal();
    }
  };

  // Handle updating a client
  const handleUpdateClient = () => {
    refreshClients(); // Refresh clients after updating
    closeModal();
  };

  // Render loading or error states
  if (loading) return <div className='card-loading'><h1 className='card-title'>Loading...</h1></div>;
  if (error) return <div className='card-error'><h1 className='card-title'>Error: {error}</h1></div>;

  return (
    <div className="client-log">
      <AddButton refreshClients={refreshClients} />
      
      {/* Checkbox for filtering by tags */}
      <div className="tag-filter">
        <label>Filter by Tags:</label>
        <div className="checkbox-group">
          {availableTags.map(tag => (
            <label key={tag}>
              <input
                type="checkbox"
                value={tag}
                checked={selectedTags.includes(tag)}
                onChange={(e) => {
                  const tagValue = e.target.value;
                  if (e.target.checked) {
                    setSelectedTags([...selectedTags, tagValue]);
                  } else {
                    setSelectedTags(selectedTags.filter(t => t !== tagValue));
                  }
                }}
              />
              {tag}
            </label>
          ))}
        </div>
      </div>

      <div className="table-header">
        <div className="header-cell">Name</div>
        <div className="header-cell">Email</div>
        <div className="header-cell">Phone</div>
        <div className="header-cell">Tags</div>
        <div className="header-cell">Actions</div>
      </div>

      {/* Render the list of clients */}
      {clients.length > 0 ? (
        clients.map(client => (
          <div key={client.clientid} className="client-row">
            <div className="client-cell">{client.name || 'N/A'}</div>
            <div className="client-cell">{client.email || 'N/A'}</div>
            <div className="client-cell">{client.phone || 'N/A'}</div>
            <div className="client-cell client-tags">
              {client.tags ? <Tag text={client.tags} backgroundColor="#22bbdd" /> : 'No Tags'}
            </div>
            <div className="client-cell client-actions">
              <button className="edit-action" onClick={() => handleViewClient(client)}>View</button>
            </div>
          </div>
        ))
      ) : (
        <div>No clients available</div>
      )}

      {/* Conditionally render the modal if a client is selected */}
      {showViewModal && selectedClient && (
        <ViewClientModal 
          client={selectedClient}
          closeModal={closeModal}
          deleteClient={handleDeleteClient}
          updateClient={handleUpdateClient}
        />
      )}

      {deleteLoading && <div>Deleting client...</div>}
      {deleteError && <div>Error: {deleteError}</div>}
    </div>
  );
};

export default ClientList;
