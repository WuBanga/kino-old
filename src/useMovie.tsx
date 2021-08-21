import { useEffect, useState } from 'react';
import { requestMovie } from './lib/api';
import { MovieInfo } from './types/MovieInfo';

export const useMovie = (id: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setData] = useState<MovieInfo>();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    requestMovie(id)
      .then((result) => {
        setData(result);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
        setIsLoading(false);
      });
  }, [id]);

  return { isLoading, movie, isError };
};
