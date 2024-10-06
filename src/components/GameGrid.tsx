import React from "react";
import { useGames } from "@/lib/hooks/useGames";
import { GameCard } from "@/components/GameCard";
import { SimpleGrid } from "@chakra-ui/react";
export const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding={10} spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};
