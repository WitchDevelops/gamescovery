import { useData } from "@/lib/hooks/useData";
import { Game } from "@/types/cardTypes";

export const useGames = () => {
  return useData<Game>("/games");
};
