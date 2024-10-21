import React from "react";
import { useGenres } from "@/lib/hooks/useGenres";
import { HStack, Text, List, ListItem, Image } from "@chakra-ui/react";
import { getCroppedImgUrl } from "@/lib/services/imageResized";
import { GenreItemSkeleton } from "@/components/GenreItemSkeleton";

export const GenreList = () => {
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
            <Text fontWeight="bold">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
