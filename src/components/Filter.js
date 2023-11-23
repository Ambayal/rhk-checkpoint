import React from 'react';

const Filter = ({ onTitleChange, onRateChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        onChange={(e) => onRateChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;
