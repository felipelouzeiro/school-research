import { FormEvent, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { List } from '../../components/list';
import { Loading } from '../../components/loading';
import { useArticles } from '../../services/hooks/useArticles';
import { Article } from '../../services/types';
import { Container, PaginationContainer, SearchBar } from './styles';
import { Pagination } from '@mui/material';

export const Search = () => {
  const { data, fetchData, totalPages } = useArticles(10);

  const [searchParams, setSearchParams] = useSearchParams();
  const [listArticles, setListArticles] = useState<Article[]>([]);
  const [totalCountRows, setTotalCountRows] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  const pagina = useMemo(() => {
    return Number(searchParams.get('pagina') || '1');
  }, [searchParams]);

  const fetch = async () => {
    setIsLoading(true);
    await fetchData(pagina, busca);
    setIsLoading(false);
  };

  useEffect(() => {
    if (data && data.length > 1) {
      setListArticles(data);
      setTotalCountRows(totalPages);
    }
  }, [data, totalPages]);

  useEffect(() => {
    fetch();
  }, [pagina]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await fetch();
  };

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit}>
        <label htmlFor="search">
          <input
            type="text"
            id="search"
            value={busca}
            onChange={(event) =>
              setSearchParams({ busca: event.target.value, pagina: '1' })
            }
            placeholder="Pesquise por.."
            required
          />
        </label>
        <button type="submit">buscar</button>
      </SearchBar>

      {isLoading && <Loading />}

      {!isLoading && <List articles={listArticles} />}
      {totalPages > 0 && data.length >= 9 && !isLoading && (
        <PaginationContainer>
          <Pagination
            page={pagina}
            count={Math.ceil(totalCountRows / 10)}
            onChange={(e, newPage) =>
              setSearchParams({ busca, pagina: newPage.toString() })
            }
          />
        </PaginationContainer>
      )}
    </Container>
  );
};
