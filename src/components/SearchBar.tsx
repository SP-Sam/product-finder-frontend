import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const SearchBar: React.FC<Props> = ({ children }) => {
  return (
    <header className="flex justify-center gap-2 items-center w-[1024px] h-[75px]">
      {children}
    </header>
  );
};
