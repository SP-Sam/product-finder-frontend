import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { productsMock } from './mocks/productsMock';
import { ProductCard } from '@/components/ProductCard';

describe('Product list', () => {
  beforeEach(() =>
    render(
      <div>
        {productsMock.map((product, index) => {
          return (
            <ProductCard
              key={`product-${index}`}
              category={product.category}
              description={product.description}
              imageUrl={product.imageUrl}
              price={product.price}
              website={product.website}
            />
          );
        })}
      </div>
    )
  );

  it('Must be the right amount of product cards', () => {
    const products = screen.getAllByTestId('product-card');

    expect(products.length).toBe(3);
  });

  it('Each card must contain the correct title', () => {
    const productImages = screen.getAllByTestId('product-image');

    productImages.forEach((image, index) => {
      expect(image.getAttribute('src')).toBe(productsMock[index].imageUrl);
    });
  });

  it('Each card must contain the correct title', () => {
    const productTitles = screen.getAllByRole('heading');

    productTitles.forEach((title, index) => {
      expect(title.textContent).toBe(productsMock[index].description);
    });
  });

  it('Each card must contain the correct category', () => {
    const productCategories = screen.getAllByTestId('product-category');

    productCategories.forEach((category, index) => {
      expect(category.textContent).toBe(productsMock[index].category);
    });
  });

  it('Each card must contain the correct title', () => {
    const productPrice = screen.getAllByTestId('product-price');

    productPrice.forEach((price, index) => {
      expect(price.textContent).toBe(productsMock[index].price);
    });
  });
});
