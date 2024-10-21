import { useData } from "@/lib/hooks/useData";
import { Game } from "@/types/cardTypes";
import { Genre } from "@/types/genreTypes";

export const useGames = (selectedGenre: Genre | null) => {
  return useData<Game>("/games", {
    params: {
      genres: selectedGenre?.id,
    },
  }, [selectedGenre]);
};
