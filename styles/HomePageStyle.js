import styled from "styled-components";

export const StyledHomeWrapper = styled.div`
  min-height: ${({height}) => height === 'auto' ? 'auto' : 'calc(100vh - 105px)'};
  background-color: #FFFFFF;
`;