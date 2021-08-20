import { useEffect, useState } from 'react';
import { requestPopularFilms } from './lib/api';
import { Page } from './types/FilmInfo';

export const useFilms = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Page>({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    requestPopularFilms()
      .then((result) => {
        setData(result);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return { isLoading, data, isError };
};
