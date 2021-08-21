import { useRef, useEffect } from 'react';
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
  const mainDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !movie ||
      !configuration ||
      !mainDivRef.current ||
      !movie.backdrop_path
    ) {
      return;
    }
    const backdropLink = `${configuration.images.base_url}original${movie.backdrop_path}`;
    void fetch(backdropLink)
      .then((res) => res.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);

        mainDivRef.current!.style.backgroundImage = `url(${url})`;
      });
  }, [movie, configuration]);

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
    <div ref={mainDivRef} className="flex justify-center">
      <div className="bg-gray-100 backdrop-filter backdrop-blur-md bg-opacity-50">
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
            Page:{' '}
            <a href={movie.homepage} className="text-blue-300">
              {movie.homepage}
            </a>
          </p>
        )}
        {movie.overview && <p>{movie.overview}</p>}
      </div>
    </div>
  );
};
