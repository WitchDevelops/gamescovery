import { Heading } from "@chakra-ui/react";
import { useGenres } from "@/lib/hooks/useGenres";

interface GameHeadingProps {
  title: GameQuery;
}

export const GameHeading: React.FC<GameHeadingProps> = ({ title }) => {
  const { data: genres } = useGenres();
  const search = title.searchText || "";
  const genre = genres.find((g) => g.slug === title.genre)?.name || "";
  const platform = title.platform ? `for ${title.platform}` : "";
  const sortOrder = title.sortOrder ? `sorted by ${title.sortOrder}` : "";

  const heading = `${search} ${genre} Games ${platform} ${sortOrder}`.trim();

  return (
    <Heading as={"h1"} fontSize={"5xl"} marginBottom={3} whiteSpace={"normal"}>
      {heading}
    </Heading>
  );
};
