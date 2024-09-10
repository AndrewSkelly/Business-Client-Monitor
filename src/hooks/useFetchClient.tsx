import { useEffect, useState } from "react";
import { ClientDetails } from "../interfaces/Client";

export const useFetchClients = () => {
  const [clients, setClients] = useState<ClientDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch clients, now reusable
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

  // Fetch clients on component mount
  useEffect(() => {
    fetchClients();
  }, []);

  // Return the clients, setClients, loading, error, and a function to refresh clients
  return { clients, setClients, loading, error, refreshClients: fetchClients };
};
