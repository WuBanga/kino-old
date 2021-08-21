export interface Genre {
  id: number;
  name: string;
}

export interface MovieInfo {
  backdrop_path: string | null;
  budget: number;
  genres: Genre[];
  homepage: string | null;
  id: number;
  overview: string | null;
  poster_path: string | null;
  production_countries: [
    {
      iso_3166_1: string;
    }
  ];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [
    {
      english_name: string;
    }
  ];
  status: string;
  tagline: string | null;
  title: string;
  vote_average: number;
  vote_count: number;
}
