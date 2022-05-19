import React from "react";

import {
  StyledError,
  StyledInputGroup,
  StyledInputWrapper,
  StyledLabel,
  StyledTextarea,
} from "../../styles/styleInputGroup";

const TextareaGroup = ({
  id,
  label,
  className,
  handleChange,
  name,
  placeholder,
  value,
  required,
  readonly,
  maxLength,
  error,
  defaultValue,
}) => {
  return (
    <StyledInputGroup className={`input-group ${className}`}>
      {label && <StyledLabel htmlFor={id}>{label}:</StyledLabel>}
      <StyledInputWrapper error={error}>
        <StyledTextarea
          id={id}
          name={name}
          onChange={handleChange}
          value={value}
          defaultValue={defaultValue}
          required={required}
          placeholder={placeholder}
          maxLength={maxLength}
          readOnly={readonly}
        />
      </StyledInputWrapper>
      {error && <StyledError>{error}</StyledError>}
    </StyledInputGroup>
  );
};

export default TextareaGroup;
