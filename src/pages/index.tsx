import { type NextPage } from 'next';
import { useEffect, useState } from 'react';

import { CategoryTypes, IProduct, WebsiteTypes } from '@/interfaces';
import { Websites, Categories } from '@/enums';

import { searchByCategory, searchBySearchTerm } from '@/api/fetchSearch';

import { SearchBar } from '@/components/SearchBar';
import { Input } from '@/components/Input';
import { Select } from '@/components/Select';
import { Button } from '@/components/Button';
import { Loader } from '@/components/Loader';

const Home: NextPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [category, setCategory] = useState<CategoryTypes | string>('');
  const [website, setWebsite] = useState<WebsiteTypes | string>('');
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchProducts = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const searchBody = searchTerm
        ? { website, searchTerm }
        : { website, category };

      const products = searchTerm
        ? await searchBySearchTerm(searchBody)
        : await searchByCategory(searchBody);

      setProducts(products);
    } catch (e: any) {
      console.error(e);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
    setSearchTerm('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onChangeOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.name === 'website') setWebsite(e.target.value);
    if (e.target.name === 'category') setCategory(e.target.value);
  };

  useEffect(() => {
    if (!!searchTerm) setCategory('');

    if ((website && searchTerm) || (website && category)) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [searchTerm, website, category]);

  return (
    <div className="flex flex-col items-center w-screen h-screen bg-neutral-200">
      <SearchBar>
        <form
          className="flex justify-center gap-2 items-center w-[1024px] h-[75px]"
          onSubmit={searchProducts}
        >
          <Select
            options={[Websites.MELI, Websites.BUSCAPE]}
            type="website"
            handleChange={onChangeOption}
          />
          <Select
            options={[
              Categories.REFRIGERATOR,
              Categories.TV,
              Categories.CELLPHONE,
            ]}
            type="category"
            handleChange={onChangeOption}
            hasSearchTerm={!!searchTerm}
          />
          <Input value={searchTerm} handleChange={handleChange} />

          <Button
            text="Search"
            disabled={isButtonDisabled}
            isLoading={isLoading}
          />
        </form>
      </SearchBar>

      {isLoading && <Loader classes="w-[50px] h-[50px]" />}
    </div>
  );
};

export default Home;
