import { useEffect, useState } from "react";
import { CanceledError, AxiosRequestConfig } from "axios";

import apiClient from "@/lib/services/apiClient";

interface FetchDataResponse<T> {
  count: number;
  results: T[];
}

export const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: unknown[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setIsLoading(true);
      apiClient
        .get<FetchDataResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
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
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};
