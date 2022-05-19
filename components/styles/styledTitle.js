import styled from "styled-components";

export const StyledMainTitle = styled.h1`
  ${({mt}) => mt && `margin-top: ${mt}px`};
  ${({mb}) => mb && `margin-bottom: ${mb}px`};
  ${({size}) => size && `font-size: ${size}px`};
  color: ${({color}) => color || '#193636'};
  font-weight: ${({weight}) => weight || '700'};
  text-align: ${({position}) => position || 'left'};
  ${({cursor}) => cursor && `cursor: pointer`};
  /* line-height: 26px; */
`;
export const StyledDescription = styled.p`
  ${({mt}) => mt && `margin-top: ${mt}px`};
  ${({mb}) => mb && `margin-bottom: ${mb}px`};
  ${({size}) => size && `font-size: ${size}px`};
  color: ${({color}) => color || '#193636'};
  font-weight: ${({weight}) => weight || '700'};
  text-align: ${({position}) => position || 'left'};
`;

export const StyledMainDescription = styled.div`
  ${({mt}) => mt && `margin-top: ${mt}px`};
  ${({mb}) => mb && `margin-bottom: ${mb}px`};
  ${({size}) => size && `font-size: ${size}px`};
  color: ${({color}) => color || '#8C9B9B'};
  text-align: ${({position}) => position || 'left'};
`;