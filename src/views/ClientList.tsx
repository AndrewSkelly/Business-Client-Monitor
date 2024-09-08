import React, { useEffect, useState } from 'react';
import './ClientList.scss';
import Tag from '../components/Tag';
import AddButton from '../components/AddButton';
import ViewClientModal from '../components/ViewClientModal'; // Import the new modal component
import {ClientDetails} from '../interfaces/Client.tsx'


const ClientList: React.FC = () => {
  const [clients, setClients] = useState<ClientDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedClient, setSelectedClient] = useState<ClientDetails | null>(null); // State for the selected client
  const [showViewModal, setShowViewModal] = useState(false); // State for modal visibility

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch('https://localhost:7053/api/Clients');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: ClientDetails[] = await response.json();
        setClients(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  const handleViewClient = (client: ClientDetails) => {
    setSelectedClient(client);
    setShowViewModal(true); // Show the modal when "View" is clicked
  };

  const closeModal = () => {
    setSelectedClient(null);
    setShowViewModal(false); // Hide the modal when closed
  };

  const handleDeleteClient = async (clientId: number) => {
    try {
      const response = await fetch(`https://localhost:7053/api/Clients/${clientId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Update the clients state by filtering out the deleted client
        setClients(clients.filter(client => client.clientid !== clientId));
        closeModal(); // Close the modal after deletion
      } else {
        console.error('Failed to delete client.');
      }
    } catch (error) {
      console.error('Error deleting client:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="client-log">
      <AddButton />
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

      {/* View Client Modal */}
      {showViewModal && selectedClient && (
        <ViewClientModal 
          client={selectedClient} 
          closeModal={closeModal} 
          deleteClient={handleDeleteClient} // Pass the delete client function
        />
      )}
    </div>
  );
};

export default ClientList;
