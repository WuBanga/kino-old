import { useEffect, useState } from 'react';
import { requestPopularFilms } from './lib/api';
import { Page } from './types/FilmInfo';

export const useFilms = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Page>();

  useEffect(() => {
    requestPopularFilms()
      .then((result) => {
        setData(result);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return { isLoading, data };
};
