import { Genre } from './types/MovieInfo';
import { useConfiguration } from './useConfiguration';
import { useMovie } from './useMovie';

export interface FilmPageProps {
  id: number;
  status: string;
  title: string;
  releaseDate: string;
  tagline: string | null;
  voteAverage: number;
  voteCount: number;
  languages: string[];
  country: string;
  budget: number;
  revenue: number;
  genres: Genre[];
  runtime: number | null;
  page: string | null;
  overview: string | null;
  posterLink: string | null;
  backgroundLink: string | null;
}

export const FilmPage = (props: FilmPageProps) => {
  const {
    isLoading: isMovieLoading,
    movie,
    isError: isMovieError,
  } = useMovie(props.id);
  const {
    isLoading: isConfigurationLoading,
    configuration,
    isError: isConfigurationError,
  } = useConfiguration();

  if (
    isMovieError ||
    isConfigurationError ||
    (isConfigurationLoading === false && configuration === undefined)
  ) {
    return (
      <h1 className="text-3xl font-extrabold text-red-500">
        Something goes wrong
      </h1>
    );
  }

  if (isMovieLoading || isConfigurationLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex justify-center">
      <div className="">
        <p className="rounded bg-green-400 w-24 text-center text-lg font-medium p-1">
          {props.status}
        </p>
        <div className="flex flex-wrap">
          <h1 className="text-5xl">{props.title}</h1>
          <p className="text-gray-400">{props.releaseDate}</p>
        </div>
        <h2 className="text-xl">{props.tagline}</h2>
        <p>{props.voteCount}</p>
        <p>Language: {props.languages.join(', ')}</p>
        <p>Country: {props.country}</p>
        <p>Budget: {`${props.budget}$`}</p>
        <p>Revenue: {`${props.revenue}$`}</p>
        <p>
          Genres:{' '}
          {props.genres
            .map((genre) => {
              return genre.name;
            })
            .join(', ')}
        </p>
        <p>Runtime: {props.runtime}</p>
        <p>Page: {props.page}</p>
        <p>{props.overview}</p>
      </div>
    </div>
  );
};
