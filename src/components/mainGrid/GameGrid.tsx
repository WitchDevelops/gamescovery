import React from "react";
import { useGames } from "@/lib/hooks/useGames";
import { GameCard } from "@/components/mainGrid/GameCard";
import { SimpleGrid } from "@chakra-ui/react";
import { GameCardContainer } from "@/components/mainGrid/GameCardContainer";
import { GameCardSkeleton } from "@/components/mainGrid/GameCardSkeleton";
import { Genre } from "@/types/genreTypes";
import { Platform } from "@/types/platformTypes";

interface GameGridProps {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

export const GameGrid: React.FC<GameGridProps> = ({
  selectedGenre,
  selectedPlatform,
}) => {
  const {
    data: games,
    error,
    isLoading,
  } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {error && <p>{error}</p>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={3}>
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
