"use client";

import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";

import { Navbar } from "@/components/navigation/Navbar";
import { GameGrid } from "@/components/mainGrid/GameGrid";
import { GenreList } from "@/components/sideBar/GenreList";
import { PlatformSelector } from "@/components/sortingDropdown/PlatformSelector";

export default function Home() {
  const [searchParams, setSearchParams] = useState<GameQuery>({} as GameQuery);

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //1024px breakpoint
        }}
        templateColumns={{
          base: "1fr",
          lg: "265px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingStart={5}>
            <GenreList
              onGenreSelect={(genre) =>
                setSearchParams({ ...searchParams, genre })
              }
              selectedGenre={searchParams.genre}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"} paddingX={6}>
          <PlatformSelector
            selectedPlatform={searchParams.platform}
            onSelectPlatform={(platform) =>
              setSearchParams({ ...searchParams, platform })
            }
          />
          <GameGrid searchParams={searchParams} />
        </GridItem>
      </Grid>
    </div>
  );
}
