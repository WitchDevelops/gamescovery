import { HStack, List, ListItem, Text, Image, Button } from "@chakra-ui/react";

import { useGenres } from "@/lib/hooks/useGenres";
import { getCroppedImgUrl } from "@/lib/services/imageResized";
import { GenreItemSkeleton } from "@/components/sideBar/GenreItemSkeleton";

interface GenreListProps {
  onGenreSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export const GenreList: React.FC<GenreListProps> = ({
  onGenreSelect,
  selectedGenre,
}) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <List>
      {error && null}

      {isLoading &&
        skeletons.map((skeleton) => <GenreItemSkeleton key={skeleton} />)}

      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={1}>
          <Button
            onClick={() => {
              onGenreSelect(genre);
            }}
            variant={"link"}
            width={"100%"}
            display={"flex"}
            justifyContent={"left"}
            fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
            padding={2}
            borderRadius={8}
            gap={1}
            cursor="pointer"
            _hover={{ backgroundColor: "purple.200", color: "gray.900" }}
            _active={{ backgroundColor: "purple.300", color: "gray.900" }}
            background={
              genre.id === selectedGenre?.id ? "purple.700" : "transparent"
            }
          >
            <HStack>
              <Image
                src={getCroppedImgUrl(genre.image_background)}
                alt={genre.name}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Text
                fontSize={"lg"}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                {genre.name}
              </Text>
            </HStack>
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
