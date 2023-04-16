import React from 'react';
import { Loader } from './Loader';

interface Props {
  text: string;
  type: 'submit' | 'redirect';
  disabled?: boolean;
  isLoading?: boolean;
  url?: string;
}

export const Button: React.FC<Props> = ({
  text,
  disabled,
  isLoading,
  type,
  url,
}) => {
  return (
    <>
      {type === 'submit' ? (
        <button
          type="submit"
          disabled={disabled}
          className="bg-primary-blue text-white rounded-lg rounded-lg w-28 py-2 hover:bg-primary-blue-dark transition-all disabled:cursor-not-allowed disabled:bg-primary-blue flex justify-center items-center max-h-10"
        >
          {isLoading ? <Loader classes="w-[25px] h-[25px]" /> : text}
        </button>
      ) : (
        <a
          href={url}
          target="_blank"
          className="bg-primary-blue text-white rounded-lg rounded-lg w-11/12 laptop:w-28 py-2 hover:bg-primary-blue-dark transition-all disabled:cursor-not-allowed disabled:bg-primary-blue flex justify-center items-center max-h-10"
        >
          {text}
        </a>
      )}
    </>
  );
};
