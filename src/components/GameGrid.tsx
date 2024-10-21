import React from "react";
import { useGames } from "@/lib/hooks/useGames";
import { GameCard } from "@/components/GameCard";
import { SimpleGrid } from "@chakra-ui/react";
import { GameCardContainer } from "@/components/GameCardContainer";
import { GameCardSkeleton } from "@/components/GameCardSkeleton";
import { Genre } from "@/types/genreTypes";

interface GameGridProps {
  selectedGenre: Genre | null;
}

export const GameGrid: React.FC<GameGridProps> = ({ selectedGenre }) => {
  const { data: games, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <p>{error}</p>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        paddingX={10}
        spacing={3}
      >
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
    </>
  );
};
