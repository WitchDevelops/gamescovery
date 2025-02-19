import React from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";

import { useGames } from "@/lib/hooks/useGames";

import { GameCard } from "@/components/mainGrid/GameCard";
import { GameCardContainer } from "@/components/mainGrid/GameCardContainer";
import { GameCardSkeleton } from "@/components/mainGrid/GameCardSkeleton";

interface GameGridProps {
  searchParams: GameQuery;
}

export const GameGrid: React.FC<GameGridProps> = ({ searchParams }) => {
  const { data: games, error, isLoading } = useGames(searchParams);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (error) return <Text>{error}</Text>;

  if (!isLoading && games.length === 0) {
    return (
      <Text align={"left"}>
        No games were found. Try changing your filters.
      </Text>
    );
  }

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}

      {games.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};
