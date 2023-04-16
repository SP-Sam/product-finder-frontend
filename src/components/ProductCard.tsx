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
    <div className="flex flex-col justify-between max-w-[250px] laptop:max-w-[850px] items-center laptop:items-stretch laptop:flex-row laptop:justify-around bg-white border border-gray-300 rounded-lg ">
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

      <div className="flex flex-col gap-2 my-2 items-center laptop:items-start justify-around laptop:w-2/4">
        <h2 className="laptop:text-xl font-bold text-center laptop:text-start">
          {description}
        </h2>
        <p className="text-sm laptop:text-base">{category}</p>
        <p className="laptop:text-xl font-bold">{price}</p>
      </div>

      <div className="flex justify-center laptop:items-center pb-2 w-full laptop:w-auto">
        <Button text="Ver no site" type="redirect" url={website} />
      </div>
    </div>
  );
};
