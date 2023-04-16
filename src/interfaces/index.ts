export type CategoryTypes = 'Celular' | 'Geladeira' | 'TV';

export type WebsiteTypes = 'Mercado Livre' | 'Buscapé';

export interface ISearchByCategory {
  website: string;
  category?: string;
}

export interface ISearchByTerm {
  website: string;
  searchTerm?: string;
}

export interface IProduct {
  description: string;
  imageUrl: string;
  price: string;
  website: string;
  category: string;
}
