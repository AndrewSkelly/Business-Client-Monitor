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

  const handleViewClient = (client: ClientDetails) => {
    setSelectedClient(client);
    setShowViewModal(true);
  };

  const closeModal = () => {
    setSelectedClient(null);
    setShowViewModal(false);
  };

  const handleDeleteClient = async (clientId: number) => {
    const success = await deleteClient(clientId); // Call the deleteClient hook
    if (success) {
      setClients(clients.filter(client => client.clientid !== clientId)); // Update clients after deletion
      closeModal(); // Close the modal after successful deletion
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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

      {showViewModal && selectedClient && (
        <ViewClientModal 
          client={selectedClient} 
          closeModal={closeModal} 
          deleteClient={handleDeleteClient}
        />
      )}

      {deleteLoading && <div>Deleting client...</div>}
      {deleteError && <div>Error: {deleteError}</div>}
    </div>
  );
};

export default ClientList;
