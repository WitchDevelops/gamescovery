import React from "react";
import { useGames } from "@/lib/hooks/useGames";

export const GameGrid = () => {
  const { games, error } = useGames();
  
  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};
