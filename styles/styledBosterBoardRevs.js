import styled from "styled-components";
import { StyledContainer } from "./../components/styles/styledContainer";

export const StyledBosterBoardRevsWrapper = styled(StyledContainer)`
  padding: 50px 10px 20px 10px;
  .line {
    margin: 25px auto;
  }
`;

export const StyledBosterBoardRevsInfo = styled.div`
  max-width: 660px;
  margin: 0 auto;
`;

export const StyledBoostedImageBlock = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  .boosted-revs-block {
    position: relative;
    text-align: center;
    span{
        font-size: 45px;
        font-weight: 400;
    }
    &__info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .boosted-boards-block {
    position: relative;
    text-align: center;
    span{
        font-size: 45px;
        font-weight: 400;
    }
    &__info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
