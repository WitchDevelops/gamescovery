import { useData } from "@/lib/hooks/useData";

export const usePlatforms = () => {
  return useData<Platform>("/platforms/lists/parents");
};
