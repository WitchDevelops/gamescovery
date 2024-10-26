import { useData } from "@/lib/hooks/useData";

export const useGenres = () => {
  return useData<Genre>("/genres");
};
