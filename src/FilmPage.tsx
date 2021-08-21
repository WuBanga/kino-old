import { useRouteMatch } from 'react-router-dom';
import { Genre } from './types/MovieInfo';
import { useConfiguration } from './useConfiguration';
import { useMovie } from './useMovie';

export const FilmPage = () => {
  const {
    params: { id },
  } = useRouteMatch<{ id: string }>();
  const {
    isLoading: isMovieLoading,
    movie,
    isError: isMovieError,
  } = useMovie(parseInt(id));
  const {
    isLoading: isConfigurationLoading,
    configuration,
    isError: isConfigurationError,
  } = useConfiguration();

  if (isMovieLoading || isConfigurationLoading) {
    return <h1>Loading...</h1>;
  }

  if (
    isMovieError ||
    isConfigurationError ||
    configuration === undefined ||
    movie === undefined
  ) {
    return (
      <h1 className="text-3xl font-extrabold text-red-500">
        Something goes wrong
      </h1>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="">
        <p className="rounded bg-green-400 w-24 text-center text-lg font-medium p-1">
          {movie.status}
        </p>
        <div className="flex flex-wrap">
          <h1 className="text-5xl">{movie.title}</h1>
          <p className="text-gray-400">{movie.release_date}</p>
        </div>

        {movie.tagline && <h2 className="text-xl">{movie.tagline}</h2>}
        <p>{movie.vote_count}</p>
        <p>
          Language:{' '}
          {movie.spoken_languages.map((lang) => lang.english_name).join(', ')}
        </p>
        <p>
          Country:{' '}
          {movie.production_countries
            .map((country) => country.iso_3166_1)
            .join(', ')}
        </p>
        <p>Budget: {movie.budget}$</p>
        <p>Revenue: {movie.revenue}$</p>
        <p>
          Genres:{' '}
          {movie.genres
            .map((genre) => {
              return genre.name;
            })
            .join(', ')}
        </p>
        <p>Runtime: {movie.runtime}</p>
        {movie.homepage && (
          <p>
            Page: <a href={movie.homepage}>{movie.homepage}</a>
          </p>
        )}
        {movie.overview && <p>{movie.overview}</p>}
      </div>
    </div>
  );
};
