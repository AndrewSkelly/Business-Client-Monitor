import { useEffect, useState } from "react";
import { ClientDetails } from "../interfaces/Client";

export const useFetchClients = (tags: string[] = []) => {
  const [clients, setClients] = useState<ClientDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch clients with optional tags as query parameters
  const fetchClients = async () => {
    setLoading(true); // Start loading state
    try {
      // Construct the query string if there are selected tags
      const query = tags.length > 0 ? `?tags=${tags.join(",")}` : '';
      const response = await fetch(`https://business-client-monitor-api-e6d3axb9bzhwbhef.ukwest-01.azurewebsites.net/api/Clients${query}`);

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

  // Fetch clients on component mount or when tags change
  useEffect(() => {
    fetchClients();
  }, [tags]); // Trigger fetchClients whenever the tags change

  // Return the clients, setClients, loading, error, and a function to refresh clients
  return { clients, setClients, loading, error, refreshClients: fetchClients };
};
