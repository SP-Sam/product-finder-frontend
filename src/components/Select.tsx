import React from 'react';

interface Props {
  options: string[];
}

export const Select: React.FC<Props> = ({ options }) => {
  return (
    <div className="custom-select">
      <select>
        {options.map((option) => (
          <option value={option} key={option} className="">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
