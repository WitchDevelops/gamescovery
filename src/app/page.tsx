"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Grid,
  GridItem,
  Stack,
  HStack,
  Show,
  Box,
  Button,
} from "@chakra-ui/react";

import { Navbar } from "@/components/navigation/Navbar";
import { GameGrid } from "@/components/mainGrid/GameGrid";
import { GenreList } from "@/components/sideBar/GenreList";
import { PlatformSelector } from "@/components/sortingDropdown/PlatformSelector";
import { SortSelector } from "@/components/sortingDropdown/SortSelector";
import { GameHeading } from "@/components/atoms/GameHeading";

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const setSearchParams = (params: GameQuery) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(params)) {
      if (value) {
        newSearchParams.set(key, value);
      } else {
        newSearchParams.delete(key);
      }
    }
    router.push(`?${newSearchParams.toString()}`);
  };

  const searchParamsObj = Object.fromEntries(searchParams.entries());

  const clearFilters = () => {
    setSearchParams({
      searchText: "",
      genre: null,
      platform: null,
      sortOrder: "",
    });
  };

  return (
    <Suspense>
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
          <Navbar
            onSearch={(searchText) =>
              setSearchParams({ ...searchParamsObj, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingStart={5}>
            <GenreList
              onGenreSelect={(genre) =>
                setSearchParams({
                  ...searchParamsObj,
                  genre,
                })
              }
              selectedGenre={searchParamsObj.genre ?? null}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"} paddingX={6}>
          <GameHeading title={searchParamsObj} />
          <Stack
            marginBottom={6}
            width={"100%"}
            direction={{ base: "column", md: "row" }}
            justifyContent={"space-between"}
          >
            <Stack direction={{ base: "column", md: "row" }}>
              <PlatformSelector
                selectedPlatform={searchParamsObj.platform ?? null}
                onSelectPlatform={(platform) =>
                  setSearchParams({ ...searchParamsObj, platform })
                }
              />
              <SortSelector
                onSelectSort={(sortOrder) =>
                  setSearchParams({ ...searchParams, sortOrder })
                }
                sortOrder={searchParamsObj.sortOrder}
              />
            </Stack>
            <Button variant="solid" onClick={clearFilters}>
              Clear filters
            </Button>
          </Stack>
          <GameGrid searchParams={searchParamsObj} />
        </GridItem>
      </Grid>
    </Suspense>
  );
}
