import { Categories } from '@/enums';

export interface ISearchByCategory {
  website: 'Mercado Livre' | 'Buscapé';
  category: Categories;
}

export interface ISearchByTerm {
  website: 'Mercado Livre' | 'Buscapé';
  searchTerm: string;
}

export interface IProduct {
  description: string;
  imageUrl: string;
  price: string;
  website: string;
  category: string;
}
