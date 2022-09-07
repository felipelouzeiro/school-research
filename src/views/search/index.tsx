import { FormEvent, useEffect, useState } from 'react';
import { List } from '../../components/list';
import { Loading } from '../../components/loading';
import { useArticles } from '../../services/hooks/useArticles';
import { Article } from '../../services/types';
import { Container, PaginationContainer, SearchBar } from './styles';

export const Search = () => {
  const { data, fetchData, loading } = useArticles<Article[]>(10);

  const [listArticles, setListArticles] = useState<Article[]>([]);
  const [text, setText] = useState('');

  useEffect(() => {
    if (data.length > 0) {
      setListArticles(data);
    } else {
      console.log(data);
    }
  }, [data]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await fetchData();
  };

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit}>
        <label htmlFor="text">
          <input
            type="text"
            id="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Pesquise por.."
          />
        </label>
        <button type="submit">buscar</button>
      </SearchBar>

      {loading && <Loading />}

      <List articles={listArticles} />
      <PaginationContainer>pagination</PaginationContainer>
    </Container>
  );
};
