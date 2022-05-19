import styled from "styled-components";

export const StyledBrandWrapper = styled.section`
    height: 85px;
    width: 100%;
    background-color: black;
    @media screen and (max-width: 768px) {
        height: 120px;
    }
`;

export const StyledBrandImageContainer = styled.div`
    padding: 0 10px;
    margin: 0 auto;
    height: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(4,minmax(150px, 150px));
    align-items: center;
    justify-content: space-around;
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2,minmax(150px, 150px));  
    }
`