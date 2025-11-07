import { useEffect, useState } from "react";

export default function useFetch<T>(
  fetchFunction: () => Promise<T>,
  autoFetch = true
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  async function fetchData() {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchFunction();
      setData(result);
    } catch (error) {
      setError(
        error instanceof Error
          ? error
          : new Error("An unexpected error occured")
      );
    } finally {
      setLoading(false);
    }
  }
  function reset() {
    useEffect(() => {
      if (autoFetch) {
        fetchData();
      }
    }, []);
  }
  return { data, loading, error, refetch: fetchData, reset };
}
