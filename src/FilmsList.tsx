import { useFilms } from './useFilms';
import { FilmPreview } from './FilmPreview';

export const FilmsList = () => {
  const { isLoading, data } = useFilms();
  const films = data?.results.map((film) => {
    return {
      id: film.id,
      title: film.title,
      description: film.overview,
      posterLink: film.poster_path,
    };
  });

  console.log(isLoading);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="w-1/2 grid grid-cols1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
      {films?.map((film) => (
        <FilmPreview
          id={film.id}
          key={film.id}
          title={film.title}
          description={film.description}
          posterLink={film.posterLink}
        />
      ))}
    </div>
  );
};
