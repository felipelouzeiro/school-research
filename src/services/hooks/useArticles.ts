import { useEffect, useState } from 'react';
import { data } from '../data/index';
import { Article } from '../types';

export function useArticles() {
  const [articlesList, setArticlesList] = useState<Article[]>([]);

  useEffect(() => setArticlesList(data.articles), []);

  return {
    articlesList,
  };
}

//OBS: O projeto não está fazendo requisições a api externa no momento
