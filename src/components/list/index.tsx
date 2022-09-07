import { useFavorites } from '../../services/hooks/useFavorites';
import { Article } from '../../services/types';
import {
  ArticleAuthors,
  ArticleContainer,
  ArticleDescription,
  ArticleLinks,
  ArticleTitle,
  ArticleTypes,
  Container,
  FavoriteBtn,
} from './styles';

interface ListProps {
  articles: Article[];
}

export const List = ({ articles }: ListProps) => {
  const { toggleFavoriteArticle, checkedArticles } = useFavorites();

  return (
    <Container>
      {articles.map((article) => (
        <ArticleContainer key={article.id}>
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleAuthors>{article.authors}</ArticleAuthors>
          <ArticleTypes>{article.types.join(', ')}</ArticleTypes>
          <ArticleDescription>{`${article.description.substring(
            0,
            185
          )}...`}</ArticleDescription>
          <ArticleLinks>
            <span>
              <a href={article.downloadUrl}>Download</a>
            </span>
            {article.fulltextIdentifier && (
              <span>
                <a href={article.fulltextIdentifier}>Texto completo</a>
              </span>
            )}
            <FavoriteBtn
              onClick={(e) => toggleFavoriteArticle(article)}
              isFavorite={checkedArticles.includes(article)}
            >
              Favoritar
            </FavoriteBtn>
          </ArticleLinks>
        </ArticleContainer>
      ))}
    </Container>
  );
};
