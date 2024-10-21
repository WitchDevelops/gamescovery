import React from "react";
import { useGenres } from "@/lib/hooks/useGenres";
import { HStack, List, ListItem, Image, Button } from "@chakra-ui/react";
import { getCroppedImgUrl } from "@/lib/services/imageResized";
import { GenreItemSkeleton } from "@/components/GenreItemSkeleton";
import { Genre } from "@/types/genreTypes";

interface GenreListProps {
  onGenreSelect: (genre: Genre) => void;
}

export const GenreList: React.FC<GenreListProps> = ({ onGenreSelect }) => {
  const { data: genres, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <List>
      {error && null}

      {isLoading &&
        skeletons.map((skeleton) => <GenreItemSkeleton key={skeleton} />)}

      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack>
            <Image
              src={getCroppedImgUrl(genre.image_background)}
              alt={genre.name}
              boxSize="32px"
              borderRadius={8}
              objectFit="cover"
            />
            <Button
              onClick={() => {
                onGenreSelect(genre);
              }}
              fontSize={"lg"}
              variant={"link"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
