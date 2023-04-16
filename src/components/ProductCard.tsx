import { IProduct } from '@/interfaces';
import React from 'react';
import { Button } from './Button';

export const ProductCard: React.FC<IProduct> = ({
  description,
  imageUrl,
  price,
  category,
  website,
}) => {
  return (
    <div className="flex justify-around bg-white border border-gray-300 rounded-lg">
      <div className="max-w-[175px] min-h-[175px] min-w-[175px] p-2">
        {imageUrl.startsWith('http') ? (
          <img src={imageUrl} alt={description} />
        ) : (
          <img
            src="https://i.zst.com.br/thumbs/51/indsp.gif"
            alt={description}
          />
        )}
      </div>

      <div className="flex flex-col justify-around w-2/4">
        <h2 className="text-xl font-bold">{description}</h2>
        <p>{category}</p>
        <p className="text-xl font-bold">{price}</p>
      </div>

      <div className="flex items-center">
        <Button text="Ver no site" type="redirect" url={website} />
      </div>
    </div>
  );
};
