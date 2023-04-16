import React from 'react';

interface Props {
  type: 'website' | 'category';
  options: string[];
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  hasSearchTerm?: boolean;
}

export const Select: React.FC<Props> = ({
  options,
  type,
  handleChange,
  hasSearchTerm,
}) => {
  return (
    <div className={`custom-select ${hasSearchTerm && 'hover:bg-[#001b45]'}`}>
      <select
        onChange={handleChange}
        name={type}
        disabled={hasSearchTerm}
        className="disabled:cursor-not-allowed disabled:hover:bg-[#001b45]"
      >
        <option value="" disabled selected>
          {type === 'website' ? 'Website' : 'Categorias'}
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
