declare interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: ParentPlatform }[];
  metacritic: number;
}

declare interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

declare interface Platform {
  id: number;
  name: string;
  slug: string;
}

declare interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}
