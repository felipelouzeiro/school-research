import { List } from '../../components/list';
import { Container, EmptyPage, PaginationContainer } from './styles';
import { useFavorites } from '../../services/hooks/useFavorites';
import { useEffect, useState } from 'react';
import { Article } from '../../services/types';

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
        <EmptyPage>Nenhum artigo marcado.</EmptyPage>
      )}
      <List articles={favoriteArticles} />
      <PaginationContainer>pagination</PaginationContainer>
    </Container>
  );
};
