import styled from "styled-components";
import { StyledContainer } from "../components/styles/styledContainer";

export const SkateboardWrapper = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  .search-block {
    margin: 50px 0;
    justify-content: right;
    display: flex;
    align-items: center;
    &__input {
      margin-bottom: 0;
      margin-right: 15px;
    }
  }
  .content-wrapper {
    min-height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 300px));
    justify-content: center;
  }
`;
