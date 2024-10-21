import React from "react";
import { useGenres } from "@/lib/hooks/useGenres";
import { HStack, Text, List, ListItem, Image } from "@chakra-ui/react";
import { getCroppedImgUrl } from "@/lib/services/imageResized";

export const GenreList = () => {
  const { data: genres } = useGenres();
  return (
    <List>
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
