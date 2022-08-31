export interface Article {
  authors: string[];
  type: string;
  title: string;
  description: string;
  urls: string[];
}

export interface RequestData {
  articles: Article[];
}
