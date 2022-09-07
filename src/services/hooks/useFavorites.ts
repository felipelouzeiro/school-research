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
    console.log('adicionou', article.id);
    let updateListCheckedArticles = [...checkedArticles, article];

    setCheckedArticles(updateListCheckedArticles);
  };

  const uncheckArticles = (article: Article) => {
    console.log('removeu', article.id);
    let updateListCheckedArticles = checkedArticles.filter(
      (item: Article) => item['id'] !== article['id']
    );

    setCheckedArticles(updateListCheckedArticles);
  };

  const toggleFavoriteArticle = (article: Article) => {
    let articleExists = checkedArticles.some(
      (item: Article) => item['id'] === article['id']
    );
    console.log('event', articleExists);

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
