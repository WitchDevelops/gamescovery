import { useData } from "@/lib/hooks/useData";

export const useGames = (searchParams: GameQuery) => {
  return useData<Game>(
    "/games",
    {
      params: {
        search: searchParams.searchText,
        genres: searchParams.genre?.id,
        platforms: searchParams.platform?.id,
        ordering: searchParams.sortOrder,
      },
    },
    [searchParams]
  );
};
