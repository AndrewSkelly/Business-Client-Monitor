// src/hooks/useFetchServiceHistory.ts
import { useState, useEffect } from 'react';
import { ServiceHistoryDetails } from '../interfaces/ServiceHistory';

export const useFetchServiceHistory = () => {
  const [serviceHistory, setServiceHistory] = useState<ServiceHistoryDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServiceHistory = async () => {
      try {
        const response = await fetch('https://localhost:7053/api/ServiceDetails');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: ServiceHistoryDetails[] = await response.json();
        setServiceHistory(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchServiceHistory();
  }, []);

  return { serviceHistory, loading, error };
};
