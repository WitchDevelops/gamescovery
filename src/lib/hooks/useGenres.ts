import { useData } from "@/lib/hooks/useData";
import { Genre } from "@/types/genreTypes";

export const useGenres = () => {
  return useData<Genre>("/genres");
};
