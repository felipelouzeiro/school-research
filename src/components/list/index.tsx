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

const stringFormat = (string: string, limit: number) => {
  if (string.length > limit) {
    return `${string.substring(0, limit)}...`;
  }

  return string;
};

export const List = ({ articles }: ListProps) => {
  const { toggleFavoriteArticle, checkedArticles } = useFavorites();

  return (
    <Container>
      {articles.map((article) => (
        <ArticleContainer key={article.id}>
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleAuthors>
            {stringFormat(article.authors.join(), 185)}
          </ArticleAuthors>
          <ArticleTypes>{article.types.join(', ')}</ArticleTypes>
          {article.description && (
            <ArticleDescription>
              {stringFormat(article.description, 185)}
            </ArticleDescription>
          )}
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
