// import React, { useEffect, useState } from 'react';
// import ClientList from '../views/ClientList';

// interface Client {
//     clientid: number;
//     name: string | null;
//     email: string | null;
//     phone: string | null;
//     tags: string | null;
//     notes: string | null;
// }

// const ClientData: React.FC = () => {
//     const [clients, setClients] = useState<Client[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchClients = async () => {
//             try {
//                 const response = await fetch('https://localhost:7053/api/Clients');
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 const data: Client[] = await response.json();
//                 setClients(data);
//             } catch (error) {
//                 setError(error instanceof Error ? error.message : 'Unknown error occurred');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchClients();
//     }, []);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return <ClientList clients={clients} />;
// };

// export default ClientData;
