export interface Article {
  id: number;
  authors: string[];
  types: string[];
  title: string;
  description: string;
  fulltextIdentifier: string;
  downloadUrl: string;
}
