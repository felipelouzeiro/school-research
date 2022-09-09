import { useEffect, useState } from 'react';
import { Article } from '../types';

function getStorageValue(key: string) {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved as string);
  return initial || [];
}

export function useFavorites() {
  const [checkedArticles, setCheckedArticles] = useState<Article[]>(() => {
    return getStorageValue('checkedArticles');
  });

  useEffect(() => {
    localStorage.setItem('checkedArticles', JSON.stringify(checkedArticles));
  }, [checkedArticles]);

  const checkArticles = (article: Article) => {
    let updateListCheckedArticles = [...checkedArticles, article];

    setCheckedArticles(updateListCheckedArticles);
  };

  const uncheckArticles = (article: Article) => {
    let updateListCheckedArticles = checkedArticles.filter(
      (item: Article) => item['id'] !== article['id']
    );

    setCheckedArticles(updateListCheckedArticles);
  };

  const toggleFavoriteArticle = (article: Article) => {
    let articleExists = checkedArticles.some(
      (item: Article) => item['id'] === article['id']
    );

    if (articleExists) {
      uncheckArticles(article);
    } else {
      checkArticles(article);
    }
  };

  return {
    checkedArticles,
    toggleFavoriteArticle,
  };
}
