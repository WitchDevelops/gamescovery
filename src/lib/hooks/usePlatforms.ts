import { platformData } from "@/data/platformData";

export const usePlatforms = () => {
  return { data: platformData, isLoading: false, error: null };
};
