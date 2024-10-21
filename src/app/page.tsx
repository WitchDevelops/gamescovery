"use client";

import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Navbar } from "@/components/Navbar";
import { GameGrid } from "@/components/GameGrid";
import { GenreList } from "@/components/GenreList";
import { Genre } from "@/types/genreTypes";

export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //1024px breakpoint
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList onGenreSelect={(genre) => setSelectedGenre(genre)} />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </div>
  );
}
