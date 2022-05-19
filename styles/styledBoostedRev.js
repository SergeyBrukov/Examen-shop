import styled from "styled-components";
import { StyledContainer } from "./../components/styles/styledContainer";

export const StyledBoostedRevWrapper = styled(StyledContainer)`
    padding: 44px 15px;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(150px, 1fr));
    justify-content: space-between;
    align-items: center;
    .boosted-rev-info-block {
        &__btn {
            margin-top: 20px;
            @media screen and (max-width: 768px) {
                text-align: center;
            }
        }
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(auto-fit,minmax(150px, 380px));
        justify-content: center;
    }
`;