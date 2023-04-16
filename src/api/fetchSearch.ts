import { ISearchByCategory, ISearchByTerm } from '@/interfaces';
import axios from 'axios';

export const searchByCategory = async (search: ISearchByCategory) => {
  try {
    const { data } = await axios.post(
      'https://productfinder.up.railway.app/api/product-category',
      { website: search.website, category: search.category }
    );

    return data;
  } catch (e: any) {
    window.alert(e.message);
  }
};

export const searchBySearchTerm = async (search: ISearchByTerm) => {
  try {
    const { data } = await axios.post(
      'https://productfinder.up.railway.app/api/search',
      { website: search.website, searchTerm: search.searchTerm }
    );

    return data;
  } catch (e: any) {
    window.alert(e.message);
  }
};
