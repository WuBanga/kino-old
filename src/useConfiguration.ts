import { useEffect, useState } from 'react';
import { requestConfiguration } from './lib/api';
import { ConfigurationInfo } from './types/ConfigurationInfo';

export const useConfiguration = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [configuration, setConfiguration] = useState<ConfigurationInfo>();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    requestConfiguration()
      .then((result) => {
        setConfiguration(result);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return { isLoading, configuration, isError };
};
