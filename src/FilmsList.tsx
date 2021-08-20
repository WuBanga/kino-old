import { useFilms } from './useFilms';
import { FilmPreview } from './FilmPreview';
import { useConfiguration } from './useConfiguration';

export const FilmsList = () => {
  const { isLoading: isFilmsLoading, data, isError: isFilmsError } = useFilms();
  const {
    isLoading: isConfigurationLoading,
    configuration,
    isError: isConfigurationError,
  } = useConfiguration();

  if (isFilmsError || isConfigurationError || configuration === undefined) {
    return (
      <h1 className="text-3xl font-extrabold text-red-500">
        Something goes wrong
      </h1>
    );
  }

  if (isFilmsLoading || isConfigurationLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="lg:mx-44 mx-5 md:mx-24 xl:mx-56 my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {data.results.map((film) => (
        <FilmPreview
          id={film.id}
          key={film.id}
          title={film.title}
          description={film.overview}
          posterLink={
            film.poster_path
              ? `${configuration.images.base_url}w500${film.poster_path}`
              : null
          }
        />
      ))}
    </div>
  );
};
