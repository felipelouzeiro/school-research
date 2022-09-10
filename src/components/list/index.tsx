import { useFavorites } from '../../services/hooks/useFavorites';
import { Article } from '../../services/types';
import {
  BsBookmarkStarFill,
  BsDownload,
  BsFillFileTextFill,
} from 'react-icons/bs';
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
        <ArticleContainer key={article.id} id="article">
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleAuthors>
            {stringFormat(article.authors.join(), 185)}
          </ArticleAuthors>
          <ArticleTypes>{article.types.join(', ')}</ArticleTypes>
          {article.description && (
            <ArticleDescription>
              {stringFormat(article.description, 350)}
            </ArticleDescription>
          )}
          <ArticleLinks>
            <span>
              <a href={article.downloadUrl} target="_blank" rel="noreferrer">
                <BsDownload color="gray" />
              </a>
            </span>
            {article.fulltextIdentifier && (
              <span>
                <a
                  href={article.fulltextIdentifier}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFillFileTextFill color="gray" />
                </a>
              </span>
            )}
            <FavoriteBtn
              id="favorite-toggle-button"
              onClick={(e) => toggleFavoriteArticle(article)}
              isFavorite={checkedArticles.includes(article)}
            >
              <BsBookmarkStarFill />
            </FavoriteBtn>
          </ArticleLinks>
        </ArticleContainer>
      ))}
    </Container>
  );
};
