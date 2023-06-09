import React from 'react';

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Input: React.FC<Props> = ({ handleChange, value }) => {
  return (
    <input
      type="text"
      placeholder="Busque por um produto"
      className="p-2 focus:outline-none rounded-lg w-full"
      onChange={handleChange}
      value={value}
    />
  );
};
