import styled from "styled-components";
import { StyledContentWrapper } from "./../components/styles/styledContainer";


export const StyledOrderWrapper = styled.div`

`;

export const StyledOrderContainer = styled(StyledContentWrapper)`
    margin: 40px auto;
    max-width: 1000px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 20px;
    box-shadow: 0 3px 12px #32b7ff;
    .items-container {
        display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    }
    .autorized-container {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 2px solid #f3f3f3;
        box-shadow: 0 3px 12px #f91d00;
        &__btn-block {
            display: flex;
            .login-btn {
                margin-right: 15px;
            }
            button {
                width: 120px;
                border: 2px solid red;
            } 
        }
    }
`

export const StyledOrderItemBlock = styled.div`
  padding: 20px;
  margin-top: 30px;
  width: 350px;
  display: grid;
  grid-template-columns: 70px 1fr;
  column-gap: 30px;
  align-items: center;
  border: 2px solid #f3f3f3;
  box-shadow: 0 3px 12px #0b5297;
  border-radius: 20px;
  .card-price-count {
      display: flex;
      justify-content: space-between;
      font-size: 15px;
      font-weight:600;
  }
`

export const StyledAppruvContainer = styled.div`
    .make-order-block {
        text-align: end;
    }
`