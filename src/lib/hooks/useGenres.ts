import { useData } from "@/lib/hooks/useData";

export interface Genre {
  id: number;
  name: string;
}

export const useGenres = () => {
  return useData<Genre>("/genres");
};
