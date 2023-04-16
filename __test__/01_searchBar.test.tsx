import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Categories, Websites } from '@/enums';
import { SearchBar } from '@/components/SearchBar';
import { Select } from '@/components/Select';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

describe('SearchBar Component', () => {
  beforeEach(() =>
    render(
      <SearchBar>
        <Select
          options={[Websites.MELI, Websites.BUSCAPE]}
          type="website"
          handleChange={() => {}}
        />
        <Select
          options={[
            Categories.REFRIGERATOR,
            Categories.TV,
            Categories.CELLPHONE,
          ]}
          type="category"
          handleChange={() => {}}
          hasSearchTerm={false}
        />

        <Input value="ps5" handleChange={() => {}} />

        <Button text="Buscar" type="submit" disabled={true} isLoading={false} />
      </SearchBar>
    )
  );

  it('Should be two selects', () => {
    const selects = screen.getAllByTestId('select');

    expect(selects[0]).toBeInTheDocument();
    expect(selects[1]).toBeInTheDocument();
  });

  it('Should be the correct options for the selects', () => {
    const options = screen.getAllByRole('option');
    const optionList = [
      'Website',
      'Mercado Livre',
      'Buscapé',
      'Categorias',
      'Geladeira',
      'TV',
      'Celular',
    ];

    expect(options.length).toBe(7);

    options.forEach((option, index) => {
      expect(option.textContent).toBe(optionList[index]);
    });
  });

  it('Should be a text input', () => {
    const input = screen.getByPlaceholderText('Busque por um produto');

    expect(input).toBeInTheDocument();
  });

  it('Should be a button', () => {
    const searchButton = screen.getByRole('button');

    expect(searchButton).toBeInTheDocument();
  });
});
