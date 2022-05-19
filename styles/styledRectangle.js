import styled from "styled-components"; 

export const StyledRectangleWrapper = styled.div`
    position: relative;
    .rectangle-btn-block {
        button {
            margin-left: 12px;
            @media (max-width: 992px) {
                margin-left: 0px;
            }
            @media (max-width: 650px) {
                font-size: 10px;
        }
        }
        button:first-child {
            margin-left: 0;
            @media (max-width: 992px) {
                margin-bottom: 12px;
            }
        }
        @media (max-width: 992px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
    
` 

export const StyledBgImageContainer = styled.div`
    display: flex;
    span {
        width: 100% !important;
    }
`
export const StyledRectangleTextContainer = styled.div`
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translate(-50%);
    button {
        width: 240px;
    }
    .rectangle-title-info{
        @media screen and (max-width: 650px) {
            h1 {
                font-size: 24px;
            }
            span{
                font-size: 14px;
            }
        }
        @media screen and (max-width: 576px) {
            h1 {
                font-size: 18px;
            }
            span{
                font-size: 12px;
            }
        }
    }
    @media screen and (max-width: 576px) {
        top: 10px;
    }
`