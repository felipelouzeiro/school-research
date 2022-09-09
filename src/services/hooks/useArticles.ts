import axios from 'axios';
import { useState } from 'react';
import { Article } from '../types';
// import { Environments } from '../../environments';

export function useArticles(pageLimit: number) {
  const [data, setData] = useState<Article[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [totalPages, setTotalPages] = useState(0);

  const fetchData = async (page: number, queryText = '') => {
    await axios
      .get(
        `https://core.ac.uk:443/api-v2/articles/search/${queryText}?page=${page}&pageSize=${pageLimit}&metadata=true&fulltext=false&citations=false&similar=false&duplicate=false&urls=false&faithfulMetadata=false&apiKey=QRPprmutJwl8OfYFxZaXV9CneGHSI6qk`
      )
      .then((response) => {
        setData(response.data.data);
        setTotalPages(response.data.totalHits);
      })
      .catch((err) => {
        setError(err);
      });
  };

  return {
    fetchData,
    data,
    error,
    totalPages,
  };
}
