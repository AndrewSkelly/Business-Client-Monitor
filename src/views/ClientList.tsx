import React, { useState } from 'react';
import './ClientList.scss';
import Tag from '../components/Tag';
import AddButton from '../components/AddButton';
import ViewClientModal from '../components/ViewClientModal';
import { ClientDetails } from '../interfaces/Client';
import { useFetchClients } from '../hooks/useFetchClient'; // Hook for fetching clients
import { useDeleteClient } from '../hooks/useDeleteClient'; // Hook for deleting clients

const ClientList: React.FC = () => {
  const { clients, setClients, loading, error, refreshClients } = useFetchClients(); // Now includes refreshClients
  const { deleteClient, loading: deleteLoading, error: deleteError } = useDeleteClient(); // Use the delete hook
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
    const success = await deleteClient(clientId); // Call the deleteClient hook
    if (success) {
      setClients(clients.filter(client => client.clientid !== clientId)); // Update clients after deletion
      closeModal(); // Close the modal after successful deletion
    }
  };

  // Handle updating a client
  const handleUpdateClient = (clientId: number, updatedClient: ClientDetails) => {
    // Update the client in the state after successful update
    setClients(clients.map(client => (client.clientid === clientId ? updatedClient : client)));
    closeModal(); // Close the modal after updating the client
  };

  // Render loading or error states
  if (loading) return <div className='card-loading'><h1 className='card-title'>Loading...</h1></div>;
  if (error) return <div className='card-error'><h1 className='card-title'>Error: {error}</h1></div>;

  return (
    <div className="client-log">
      {/* Pass refreshClients to AddButton */}
      <AddButton refreshClients={refreshClients} />
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
          updateClient={handleUpdateClient} // Pass the update client handler
        />
      )}

      {deleteLoading && <div>Deleting client...</div>}
      {deleteError && <div>Error: {deleteError}</div>}
    </div>
  );
};

export default ClientList;
