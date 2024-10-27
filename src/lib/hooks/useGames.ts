import { useData } from "@/lib/hooks/useData";
import { usePlatforms } from "@/lib/hooks/usePlatforms";
import { useGenres } from "@/lib/hooks/useGenres";

export const useGames = (searchParams: GameQuery) => {
  const { data: platforms } = usePlatforms();
  const { data: genres } = useGenres();
  const platform = platforms.find((p) => p.slug === searchParams.platform);
  const genre = genres.find((g) => g.slug === searchParams.genre);

  return useData<Game>(
    "/games",
    {
      params: {
        search: searchParams.searchText,
        genres: genre?.id,
        platforms: platform?.id,
        ordering: searchParams.sortOrder,
      },
    },
    [searchParams]
  );
};
