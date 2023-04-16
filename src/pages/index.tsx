import { SearchBar } from '@/components/SearchBar';
import { Input } from '@/components/Input';
import { Select } from '@/components/Select';
import { Button } from '@/components/Button';
import { type NextPage } from 'next';

const Home: NextPage = () => {
  const searchProducts = () => {
    console.log('Search');
  };

  const handleChange = () => {
    console.log('Change');
  };

  return (
    <div className="flex flex-col items-center w-screen h-screen bg-neutral-200">
      <SearchBar>
        <Select options={['Mercado Livre', 'Buscapé']} />
        <Select options={['Geladeira', 'TV', 'Celular']} />
        <Input value="" handleChange={handleChange} />
        <Button text="Search" handleClick={searchProducts} />
      </SearchBar>
    </div>
  );
};

export default Home;
