import { genreData } from "@/data/genreData";

export const useGenres = () => {
  return { data: genreData, isLoading: false, error: null };
};
