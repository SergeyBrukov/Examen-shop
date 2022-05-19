import styled from 'styled-components';

export const StyledSideBarWrapper = styled.div `
    .baground-sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    transition: all 0.8s, text-shadow 0.8s;
}
`

export const StyledContentContainer = styled.div`
  background-color: white;
  color: black;
  position: fixed;
  height: 100%;
  top: 0px;
  width: 420px;
  right: ${props => props.sidebar ? '-20px' : '-100%'};
  transition: all 0.8s, text-shadow 0.8s;
  animation: showSidebar .4s;
  z-index: 1000;
  overflow-y: scroll;
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 420px;
    }
  }
`;
