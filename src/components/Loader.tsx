import React from 'react';

interface Props {
  classes: string;
}

export const Loader: React.FC<Props> = ({ classes }) => {
  return <div className={`loader ${classes}`}></div>;
};
