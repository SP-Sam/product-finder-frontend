import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const SearchBar: React.FC<Props> = ({ children }) => {
  return <header className="">{children}</header>;
};
