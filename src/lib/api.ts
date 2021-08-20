import { Page } from '../types/FilmInfo';

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
