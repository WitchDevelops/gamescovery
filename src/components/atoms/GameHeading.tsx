import { Heading } from "@chakra-ui/react";

interface GameHeadingProps {
  title: GameQuery;
}

export const GameHeading: React.FC<GameHeadingProps> = ({ title }) => {
  const search = title.searchText || "";
  const genre = title.genre?.name || "";
  const platform = title.platform ? `for ${title.platform.name}` : "";

  const heading = `${search} ${genre} Games ${platform}`.trim();

  return (
    <Heading as={"h1"} fontSize={"5xl"} marginBottom={3}>
      {heading}
    </Heading>
  );
};
