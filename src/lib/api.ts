import { ConfigurationInfo } from '../types/ConfigurationInfo';
import { Page } from '../types/FilmInfo';
import { MovieInfo } from '../types/MovieInfo';

const apiKey = process.env.API_KEY;

export async function requestPopularFilms(): Promise<Page> {
  if (!apiKey) {
    throw new Error("API key isn't provided");
  }

  const path = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

  const res = await fetch(path);
  const data = (await res.json()) as Page;

  return data;
}

export async function requestConfiguration(): Promise<ConfigurationInfo> {
  if (!apiKey) {
    throw new Error("API key isn't provided");
  }

  const path = `https://api.themoviedb.org/3/configuration?api_key=${apiKey}`;

  const res = await fetch(path);
  const data = (await res.json()) as ConfigurationInfo;

  return data;
}

export async function requestMovie(movieId: number): Promise<MovieInfo> {
  if (!apiKey) {
    throw new Error("API key isn't provided");
  }

  const path = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

  const res = await fetch(path);
  const data = (await res.json()) as MovieInfo;

  return data;
}
