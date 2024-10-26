import { useData } from "@/lib/hooks/useData";
import { Platform } from "@/types/platformTypes";

export const usePlatforms = () => {
  return useData<Platform>("/platforms/lists/parents");
};
