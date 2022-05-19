import styled from "styled-components";
import { StyledContainer } from "../styles/styledContainer";


export const StyledHeaderWrapper = styled.header`
  padding: 15px 20px 15px 11px;
  color: #fff;
  background-color: #FFFFFF;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  transition: all .5s ease;
  @media screen and (max-width: 768px) {
    padding: 10px 10px;
  }
`;

export const StyledHeaderContainer = styled(StyledContainer)`
  padding: 0px;
  position: relative;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  background-color: transparent;
  border: none;
  .navbar-block {
    margin-left: 115px;
    display: flex;
    align-items: center;
    transition: all .5s ease;
    @media screen and (max-width: 1100px) {
      margin-left: 20px;
    }
    @media screen and (max-width: 992px) {
      margin-left: 0px;
    }
    @media screen and (max-width: 768px) {
      justify-content: center;
    }
  }
  .account-trolley-block{
    position: absolute;
    right: 0;
    display: flex;
    /* div {
      margin-left: 10px;
    } */
  }
  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;

export const StyledAuthButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-gap: 25px;
  .login-button {
    outline: none;
    &__icon {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    grid-gap: 0;
    .login-button {
      padding: 0 0 5px;
      border: none;
      background-color: transparent;
      &__icon {
        height: 100%;
        color: #fff;
        font-size: 20px;
        display: inline-flex;
        align-items: center;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
          color: #fbfbfd;
        }
      }
      &__text {
        display: none;
      }
    }
    .registration-button {
      display: none;
    }
  }
`;

export const StyledIsLogin = styled.button`
  padding: 8px 16px;
  color: #fff;
  font-weight: 700;
  background-color: #595959;
  border: 2px solid #595959;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  .is-login-desktop {
    display: inline-grid;
    grid-template-columns: repeat(2, max-content);
    grid-gap: 5px;
    align-items: center;
  }
  .icon-user {
    color: #fff;
    font-size: 20px;
    display: none;
    align-items: center;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      color: #fbfbfd;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0;
    border: none;
    background-color: transparent;
    .is-login-desktop {
      display: none;
    }
    .icon-user {
      display: inline-flex;
    }
  }
`;

export const StyledLogoWrapper = styled.div`
  height: 100%;
  max-width: 160px;
  color: white;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  img {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: contain;
    transition: all 0.3s ease;
  }
`;
