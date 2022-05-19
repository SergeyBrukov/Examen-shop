import styled from "styled-components";
import { StyledContainer } from "./../components/styles/styledContainer";

export const StyledVideoBlockWrapper = styled(StyledContainer)`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(150px, 540px));
    justify-content: space-around;
    @media screen and (max-width: 1100px) {
      iframe:first-child {
          margin-bottom: 20px;
      }
    }
`