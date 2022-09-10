import { List } from '../../components/list';
import { Container, EmptyPage, PaginationContainer } from './styles';
import { useFavorites } from '../../services/hooks/useFavorites';
import { useEffect, useState } from 'react';
import { Article } from '../../services/types';
import { Pagination } from '@mui/material';

export const Favorites = () => {
  const { checkedArticles } = useFavorites();
  const [favoriteArticles, setFavoriteArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (checkedArticles && checkedArticles.length > 0) {
      setFavoriteArticles(checkedArticles);
    }
  }, [checkedArticles]);

  return (
    <Container>
      {favoriteArticles.length < 1 && (
        <EmptyPage id="favorite-empty-message">
          Nenhum artigo marcado.
        </EmptyPage>
      )}
      <List articles={favoriteArticles} />
      {favoriteArticles && favoriteArticles.length >= 9 && (
        <PaginationContainer>
          <Pagination
            page={1}
            count={Math.ceil(favoriteArticles.length / 10)}
          />
        </PaginationContainer>
      )}
    </Container>
  );
};
