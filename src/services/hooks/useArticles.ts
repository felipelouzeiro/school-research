import axios from 'axios';
import { useState } from 'react';
// import { Environments } from '../../environments';

export function useArticles<T = unknown>(pageLimit: number) {
  const [data, setData] = useState<T | []>([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = () => {
    // const virtualPage =
    //   (page - 1) * pageLimit <= 0 ? 0 : (page - 1) * pageLimit;

    axios
      .get(
        `https://core.ac.uk:443/api-v2/articles/search/banana?page=1&pageSize=10&metadata=true&fulltext=false&citations=false&similar=false&duplicate=false&urls=false&faithfulMetadata=false&apiKey=QRPprmutJwl8OfYFxZaXV9CneGHSI6qk`
      )
      .then((response) => {
        setData(response.data.data);
        console.log('data--', data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  return {
    fetchData,
    data,
    isFetching,
    error,
  };
}
