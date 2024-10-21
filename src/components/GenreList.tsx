import React from "react";
import { useGenres } from "@/lib/hooks/useGenres";

export const GenreList = () => {
  const { data: genres } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};
