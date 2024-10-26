import { useData } from "@/lib/hooks/useData";

export const useGames = (searchParams: GameQuery) => {
  return useData<Game>(
    "/games",
    {
      params: {
        genres: searchParams.genre?.id,
        platforms: searchParams.platform?.id,
        ordering: searchParams.sortOrder,
      },
    },
    [searchParams]
  );
};
