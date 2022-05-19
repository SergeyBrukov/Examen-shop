import styled from "styled-components";

export const StyledBoostedStockShopWrapper = styled.div`
    padding: 0px 15px 55px 15px;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(480px,480px));
    justify-content: center;
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`