import styled from "styled-components";
import { SidebarLink } from "../leftNav/styledLeftNavBar";
import { StyledContainer } from "../styles/styledContainer";

export const StyledFooterWrapper = styled.footer`
  transition: all 0.5s ease;
  .footer-explore-about-block {
    background-color: #f7f7f7;
    &__explore {
      &-link-block {
        display: flex;
        flex-direction: column;
      }
    }
    &__about {
      &-main-info {
        display: flex;
        flex-direction: column;
        span:first-child {
          margin-bottom: 20px;
        }
      }
    }
  }
  .footer-author-payment-system {
    display: flex;
    justify-content: space-around;
    max-width: 1440px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      &__author {
        margin-bottom: 20px;
      }
    }
    &__author {
      display: flex;
      p {
        font-weight: 400;
        font-size: 13px;
      }
      span {
        padding-left: 5px;
        font-weight: 400;
        font-size: 12px;
        color: #ff4a32;
      }
    }
  }
`;

export const StyledFooterContainer = styled(StyledContainer)`
  display: grid;
  grid-template-columns: 160px 150px minmax(150px, 370px);
  justify-content: space-around;
  padding: 50px 10px;
  @media screen and (max-width: 768px) {
        grid-template-columns:1fr;
        text-align: center;
        h2 {
          text-align: center;
          font-weight: 600;
          margin: 10px;
        }
    }
`;

export const StyledFooterExploreLink = styled.a`
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  cursor: pointer;
  transition: all 0.8s, text-shadow 0.8s;
  &:hover {
    color: #f4a261;
    text-shadow: 0 0 16px rgba(244, 162, 97, 0.64);
  }
`;
