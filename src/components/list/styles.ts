import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  list-style: none;
`;

export const ArticleContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const ArticleTitle = styled.h3`
  margin: 5px 0;
  font-size: 1.3rem;
  color: #000;
`;

export const ArticleAuthors = styled.p`
  margin: 0;
  font-size: 12px;
  text-transform: uppercase;
  color: #2f8580;
`;

export const ArticleTypes = styled.p`
  margin: 0;
  font-size: 10px;
  color: #2f8580;
`;

export const ArticleDescription = styled.p`
  text-align: left;
  margin: 5px 0;
  font-size: 16px;
`;

export const ArticleLinks = styled.div`
  display: inline-block;
  font-size: 14px;

  a {
    text-decoration: none;
    color: blue;
    margin-right: 20px;
  }

  a:hover {
    text-decoration: underline;
    color: #d14a38;
  }
`;

export const FavoriteBtn = styled.span<{ isFavorite: boolean }>`
  svg {
    color: ${(props) => (props.isFavorite ? 'blue' : 'gray')};
  }
  font-weight: ${(props) => (props.isFavorite ? 'bold' : 'normal')};
  cursor: pointer;
`;
