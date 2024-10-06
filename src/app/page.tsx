"use client";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Navbar } from "@/components/Navbar";
import { GameGrid } from "@/components/GameGrid";

export default function Home() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //1024px breakpoint
        }}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} bg="yellow">
            Aside
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GameGrid />
        </GridItem>
      </Grid>
    </div>
  );
}
