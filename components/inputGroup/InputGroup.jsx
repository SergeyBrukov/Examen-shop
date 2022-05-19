import { useState } from "react";

import {
  StyledError,
  StyledInput,
  StyledInputGroup,
  StyledInputWrapper,
  StyledLabel,
  StyledPasswordEye,
} from "../../styles/styleInputGroup";

const InputGroup = ({
  id,
  label,
  type,
  className,
  handleChange,
  name,
  maxLength,
  autocomplete,
  error,
  ...otherProps
}) => {
  const [typePassword, setTypePassword] = useState("password");

  const changeType = () => {
    setTypePassword(typePassword === "password" ? "text" : "password");
  };

  return (
    <StyledInputGroup className={`input-group ${className}`} type={type}>
      {label && <StyledLabel htmlFor={id}>{label}:</StyledLabel>}
      <StyledInputWrapper error={error}>
        <StyledInput
          type={type === "password" ? typePassword : type}
          id={id}
          name={name}
          autoComplete={autocomplete}
          maxLength={maxLength}
          onChange={handleChange}
          {...otherProps}
        />
        {type === "password" && (
          <StyledPasswordEye
            className={
              typePassword === "password" ? "icon-eye-crossed" : "icon-eye"
            }
            type="button"
            onClick={changeType}
          />
        )}
      </StyledInputWrapper>
      {error && <StyledError>{error}</StyledError>}
    </StyledInputGroup>
  );
};

export default InputGroup;
