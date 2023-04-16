import React from 'react';

interface Props {
  text: string;
  handleClick: () => void;
}

export const Button: React.FC<Props> = ({ text, handleClick }) => {
  return (
    <button
      className="bg-primary-blue text-white rounded-lg rounded-lg w-28 py-2 hover:bg-primary-blue-dark transition-all"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
