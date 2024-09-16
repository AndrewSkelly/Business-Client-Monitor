import { useState } from 'react';

export const useDeleteClient = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteClient = async (clientId: number): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      // https://localhost:7053/api/Clients/${clientId}
      const response = await fetch(`https://business-client-monitor-api-e6d3axb9bzhwbhef.ukwest-01.azurewebsites.net/api/Clients/${clientId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete client');
      }

      setLoading(false);
      return true;
    } catch (error) {
      setLoading(false);
      setError(error instanceof Error ? error.message : 'Unknown error occurred');
      return false;
    }
  };

  return { deleteClient, loading, error };
};
