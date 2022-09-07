import { List } from '../../components/list';
import { Container, EmptyPage, PaginationContainer } from './styles';
import { useFavorites } from '../../services/hooks/useFavorites';

export const Favorites = () => {
  const { checkedArticles } = useFavorites();

  return (
    <Container>
      {checkedArticles.length < 1 && (
        <EmptyPage>Nenhum artigo marcado.</EmptyPage>
      )}
      <List articles={checkedArticles} />
      <PaginationContainer>pagination</PaginationContainer>
    </Container>
  );
};
