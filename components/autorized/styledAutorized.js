import styled from "styled-components";
import { StyledContentWrapper } from "../styles/styledContainer";

export const StyledAutorizedWrapper = styled(StyledContentWrapper)`
    margin: 0 auto;
    max-width: 500px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 20px;
    box-shadow: 0 3px 12px rgba(113, 122, 134, 0.3);
    .modal-content {
        padding: 50px;
        p {
            padding: 20px 10px;
            font-size: 20px;
        }
    }
    .change-password-btn{
        border: none;
        &:hover {
            text-decoration: underline;
            background: none;
        }
    }
    .modal-change-password-btn-block{
        display: flex;
        justify-content: center;
    }
`