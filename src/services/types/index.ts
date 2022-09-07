export interface Article {
  id: string;
  authors: string[];
  types: string[] | [];
  title: string;
  description: string;
  fulltextIdentifier?: string;
  downloadUrl?: string;
}
