declare interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: ParentPlatform }[];
  metacritic: number;
  released: string;
  rating: number;
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
  searchText?: string;
  genre?: string | null;
  platform?: string | null;
  sortOrder?: string;
}
