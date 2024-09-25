import { useEffect, useState, useCallback } from "react";
import { ClientDetails } from "../interfaces/Client";

export const useFetchClients = (tags: string[] = []) => {
  const [clients, setClients] = useState<ClientDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Memoize fetchClients to avoid recreating it unnecessarily on each render
  const fetchClients = useCallback(async () => {
    setLoading(true); // Start loading state
    try {
      // Construct the query string if there are selected tags
      const query = tags.length > 0 ? `?${tags.map(tag => `tags=${encodeURIComponent(tag)}`).join("&")}` : '';
      const response = await fetch(`https://business-client-monitor-api-e6d3axb9bzhwbhef.ukwest-01.azurewebsites.net/api/Clients${query}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: ClientDetails[] = await response.json();
      setClients(data); // Update the state with fetched clients
    } catch (error) {
      // Handle errors and set error message
      setError((error instanceof Error) ? error.message : 'Unknown error occurred');
    } finally {
      setLoading(false); // Ensure loading is stopped even after an error
    }
  }, [tags]);

  // Fetch clients when component mounts or tags change
  useEffect(() => {
    fetchClients(); // Call the function on mount or tag change
  }, [fetchClients]);

  // Return the clients, loading, error, and a function to refresh clients
  return { clients, setClients, loading, error, refreshClients: fetchClients };
};
