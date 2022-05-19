import styled from "styled-components";

const size = {
  size: ''
}

const changeContainerSize = (size) => {
  switch (size) {
    case 'sm':
      return `
        max-width: 1440px
      `
      case 'mm':
        return `
          max-width: 1200px
        `
    default:
      return `
        max-width: 1530px
      `
  }
}

export const StyledMainContainer = styled.main`
  min-height: 100vh;
  width: 100%;
  padding: ${({auth}) => auth ? '125px 25px 25px' : '15px'};
  background-color: #F5F4FA;
  flex-grow: 1;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 992px) {
    padding: ${({auth}) => auth ? '125px 20px 20px 91px' : '15px'};
  }
  @media screen and (max-width: 599px) {
    padding: ${({auth}) => auth ? '80px 15px 15px 15px' : '15px'};
  }
`;

export const StyledContainer = styled("div", size)`
  ${({ size }) => changeContainerSize(size)};
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  ${({ wrapper }) => wrapper !== "content" && `min-height: calc(100vh - 85px)`};
  @media screen and (max-width: 992px) {
    ${({ wrapper }) => wrapper !== "content" && `height: auto`};
    ${({ wrapper }) => wrapper !== "content" && `padding-bottom: 50px`};
  }
`;

export const StyledContentWrapper = styled.div`
  min-height: ${({height}) => height === 'auto' ? 'auto' : 'calc(100vh - 105px)'};
  margin-top: 20px;
  padding: 20px;
  background-color: #FFFFFF;
  /* border-radius: 15px;
  box-shadow: 0 3px 12px rgba(113, 122, 134, 0.3); */
  @media screen and (max-width: 599px) {
    margin-top: 15px;
    padding: 15px;
  }
`;
