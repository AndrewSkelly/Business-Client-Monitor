import React, { useEffect, useState } from 'react';
import './ClientList.scss';
import Tag from '../components/Tag';
import AddButton from '../components/AddButton';

interface Client {
    clientid: number;
    name: string | null;
    email: string | null;
    phone: string | null;
    tags: string | null;
    notes: string | null;
}

const ClientList: React.FC = () => {
    const [clients, setClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await fetch('https://localhost:7053/api/Clients');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data: Client[] = await response.json();
                setClients(data);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'Unknown error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchClients();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
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

            {/* Render Client Rows */}
            {clients.length > 0 ? (
                clients.map(client => (
                    <div key={client.clientid} className="client-row">
                        <div className="client-cell">{client.name || 'N/A'}</div>
                        <div className="client-cell">{client.email || 'N/A'}</div>
                        <div className="client-cell">{client.phone || 'N/A'}</div>
                        <div className="client-cell client-tags">
                        {client.tags ? <Tag text={client.tags} /> : 'No Tags'}
                        </div>
                        <div className="client-cell client-actions">
                            <button className="edit-action">View</button>
                            <button className="delete-action">Delete</button>
                        </div>
                    </div>
                ))
            ) : (
                <div>No clients available</div>
            )}
        </div>
    );
};

export default ClientList;
