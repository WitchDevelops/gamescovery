import { useEffect, useState } from "react";
import apiClient from "@/lib/services/apiClient";
import { CanceledError } from "axios";

export const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  interface FetchDataResponse<T> {
    count: number;
    results: T[];
  }

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchDataResponse<T>>(endpoint, { signal: controller.signal })
      .then((response) => {
        setData(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return { data, error, isLoading };
};
