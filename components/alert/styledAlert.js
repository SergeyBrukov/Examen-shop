import styled from 'styled-components';

const type = {
  type: ''
}

const changeType = (type, border) => {
  switch (type) {
    case 'error' :
      return `
        ${border &&  "border: 1px solid #FE6A74"};
        background-color: #FFD0D3;
        &:before {
          content: '\\e910';
          color: #FE6A74;
          background-color: #FFD0D3;
        }
      `;
    case 'success' :
      return `
        ${border &&  "border: 1px solid #4fba6e"};
        background-color: #DCF0D9;
        &:before {
          content: '\\e91a';
          color: #4fba6e;
          background-color: #DCF0D9;
        }
      `;
    case 'info' :
      return `
        ${border &&  "border: 1px solid #3286d9"};
        background-color: #D6EFFF;
        &:before {
          content: '\\e930';
          color: #3286d9;
          background-color: #D6EFFF;
        }
      `;
    case 'help' :
      return `
        ${border &&  "border: 1px solid #DFD5CA"};
        background-color: #F8F7EE;
        &:before {
          content: '\\e92f';
          color: #FEB967;
          background-color: #F8F7EE;
        }
      `;
    default :
      return `
        ${border &&  "border: 1px solid #FEB967"};
        background-color: #FEF2D5;
        &:before {
          content: '\\e957';
          color: #FEB967;
          background-color: #FEF2D5;
        }
      `;
  }
}

export const StyledAlertWrapper = styled('div', type)`
  ${({center}) => center && 'max-width: 1110px'};
  ${({ mt }) => mt && `margin-top: ${mt}px`};
  ${({ mb }) => mb && `margin-bottom: ${mb}px`};
  padding: 15px 15px 15px 55px;
  color: #262626;
  border-radius: 5px;
  position: relative;
  
  &:before {
    width: 25px;
    height: 25px;
    font-size: 20px;
    font-family: 'cryptomc-icons', serif;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    top: 14px;
    left: 15px;
  }
  ${({type, border}) => changeType(type, border)}
`;