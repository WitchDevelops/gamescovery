import { useData } from "@/lib/hooks/useData";
import { Game } from "@/types/cardTypes";
import { Genre } from "@/types/genreTypes";
import { Platform } from "@/types/platformTypes";

export const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => {
  return useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre, selectedPlatform]
  );
};
