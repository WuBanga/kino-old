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
    const backdropLink = `${configuration.images.base_url}w1280${movie.backdrop_path}`;
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

  const posterLink = movie.poster_path
    ? `${configuration.images.base_url}w500${movie.poster_path}`
    : null;

  return (
    <div ref={mainDivRef} className="bg-no-repeat bg-center bg-cover flex-grow">
      <div className="p-12 lg:mx-44 mx-5 md:mx-24 xl:mx-60 grid grid-cols-3 grid-rows-mysize h-full bg-gray-100 backdrop-filter backdrop-blur-md bg-opacity-50">
        {posterLink === null ? (
          <div className="bg-gray-200">Kᴉno</div>
        ) : (
          <img
            className="col-span-1"
            src={posterLink}
            alt={`Poster of ${movie.title} film`}
            crossOrigin="anonymous"
            loading="lazy"
            width="500"
            height="750"
          />
        )}
        <div className="px-5 col-span-2">
          <p className="rounded bg-green-400 w-24 text-center text-xl font-medium p-1">
            {movie.status}
          </p>
          <div className="py-1 flex flex-wrap gap-1">
            <h1 className="lg:text-5xl text-3xl md:text-4xl xl:text-6xl font-medium">
              {movie.title}
            </h1>
            <p className="text-gray-700 text-xl">{movie.release_date}</p>
          </div>

          {movie.tagline && (
            <h2 className="py-1 text-xl italic">{movie.tagline}</h2>
          )}
          <p className="lg:text-xl text-sm md:text-lg xl:text-2xl text-gray-600 font-medium">
            {movie.vote_count}
          </p>
          <p className="lg:text-xl text-sm md:text-lg xl:text-2xl font-normal">
            Language:{' '}
            {movie.spoken_languages.map((lang) => lang.english_name).join(', ')}
          </p>
          <p className="lg:text-xl text-sm md:text-lg xl:text-2xl font-normal">
            Country:{' '}
            {movie.production_countries
              .map((country) => country.iso_3166_1)
              .join(', ')}
          </p>
          <p className="lg:text-xl text-sm md:text-lg xl:text-2xl font-normal">
            Budget: {movie.budget}$
          </p>
          <p className="lg:text-xl text-sm md:text-lg xl:text-2xl font-normal">
            Revenue: {movie.revenue}$
          </p>
          <p className="lg:text-xl text-sm md:text-lg xl:text-2xl font-normal">
            Genres:{' '}
            {movie.genres
              .map((genre) => {
                return genre.name;
              })
              .join(', ')}
          </p>
          <p className="lg:text-xl text-sm md:text-lg xl:text-2xl font-normal">
            Runtime: {movie.runtime}
          </p>
          {movie.homepage && (
            <p className="lg:text-xl text-sm md:text-lg xl:text-2xl font-normal">
              Page:{' '}
              <a
                href={movie.homepage}
                className="lg:text-xl text-sm md:text-lg xl:text-2xl font-normal text-blue-600"
              >
                {movie.homepage}
              </a>
            </p>
          )}
        </div>
        {movie.overview && (
          <p className="py-2 col-span-full lg:text-xl text-lg xl:text-2xl font-normal">
            {movie.overview}
          </p>
        )}
      </div>
    </div>
  );
};
