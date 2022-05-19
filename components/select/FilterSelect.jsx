import React from "react";
import { StyledSelect, StyledSelectLabel } from "../styles/styledSelect";

const FilterSelect = ({ options, onChange, label, defaultValue, value }) => {
  return (
    <select
      className="custom-select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value={defaultValue} disabled>
        <div className="option-select-item">{defaultValue}</div>
      </option>
      {options.map(({ value, name }) => {
        return (
          <option value={value}>
            <div className="option-select-item">{name}</div>
          </option>
        );
      })}
    </select>
  );
};

export default FilterSelect;
