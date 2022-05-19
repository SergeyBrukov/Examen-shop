import styled from "styled-components";

export const StyledAccountBar = styled.div`
  width: 2rem;
  height: 2rem;
  font-size: 25px;
  display: flex;
  align-items: center;
  /* top: 15px; */
  cursor: pointer;
  span {
    color: black;
  }
`;

export const StyledAccountBlockBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .login-btn {
    margin-bottom: 15px;
  }
  button {
    width: 120px;
  }
  a {
    width: 100%;
  }
`;

export const StyledAccountWrapper = styled.div`
  padding: 20px;
  .account-wrapper__top {
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      padding: 8px;
    }
  }
  .logout {
    text-align: end;
    button {
      border: 2px solid #ff4a32;
    }
  }
  .active {
    background: #dd880838;
    border-left: 20px solid #ff4a32;
  }
`;

export const AcountLink = styled.a`
  display: block;
  padding: 20px 11px;
  margin-bottom: 20px;
  color: #000000;
  cursor: pointer;
  border-left: 4px solid #f4a261;
  border: 2px solid #ff4a32;
  cursor: pointer;
  transition: all 0.6s, text-shadow 0.8s;

`;
