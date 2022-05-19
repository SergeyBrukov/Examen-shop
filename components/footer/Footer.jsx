import Image from "next/image";

import FooterLogo from "./../../public/footer/footer-logo.png";

import { footerRoutes } from "../../utils/footerRoutes";

import Amex from "./../../public/footer/footer-payment-system/amex.svg";
import Frame from "./../../public/footer/footer-payment-system/frame.svg";
import GooglePay from "./../../public/footer/footer-payment-system/google-pay.svg";
import Klarna from "./../../public/footer/footer-payment-system/klarna.svg";
import Master from "./../../public/footer/footer-payment-system/master-card.svg";
import Opay from "./../../public/footer/footer-payment-system/o-pay.svg";
import Vpay from "./../../public/footer/footer-payment-system/v-pay.svg";
import Visa from "./../../public/footer/footer-payment-system/visa.svg";

import {
  StyledFooterContainer,
  StyledFooterExploreLink,
  StyledFooterWrapper,
} from "./styledFooter";

import {
  StyledDescription,
  StyledMainDescription,
  StyledMainTitle,
} from "../styles/styledTitle";
import Link from "next/link";

const Footer = () => {
  const paymentSystem = [
    { src: Amex },
    { src: Frame },
    { src: GooglePay },
    { src: Klarna },
    { src: Master },
    { src: Opay },
    { src: Vpay },
    { src: Visa },
  ];

  return (
    <StyledFooterWrapper>
      <div className="footer-explore-about-block">
        <StyledFooterContainer size="sm" wrapper="content">
          <div className="footer-explore-about-block-logo">
            <Image src={FooterLogo} objectFit="contain" />
          </div>
          <div className="footer-explore-about-block__explore">
            <StyledMainTitle
              size="20"
              as="h2"
              weight="400"
              color="black"
              position="start"
            >
              Explore
            </StyledMainTitle>
            <div className="footer-explore-about-block__explore-link-block">
              {footerRoutes.map(({ title, href }) => {
                return (
                  <Link href={href} key={title}>
                    <StyledFooterExploreLink>{title}</StyledFooterExploreLink>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="footer-explore-about-block__about">
            <StyledMainTitle
              as="h2"
              size="20"
              weight="400"
              color="black"
              position="start"
            >
              About Boosted USA
            </StyledMainTitle>
            <StyledDescription
              as="div"
              size="14"
              weight="400"
              color="black"
              position="start"
              className="footer-explore-about-block__about-main-info"
            >
              <span>
                Boosted empowers people everywhere to commute across their
                cities, campuses, and communities in ways that were never before
                possible. Boosted is solving one of the biggest problems people
                face each day: transportation.
              </span>
              <span>CaliRides LLC - DBA Boosted USA</span>
              <span>1281 Andersen Drive Ste. K</span>
              <span>San Rafael, CA 94901</span>
            </StyledDescription>
          </div>
        </StyledFooterContainer>
      </div>
      <div className="footer-author-payment-system">
        <div className="footer-author-payment-system__author">
          <p>© 2021</p>
          <span>Boosted USA</span>
          <p> .All Rights Reserved.</p>
          <span>Terms of Service</span>
          <p> . Built by </p>
          <span> BH</span>
        </div>
        <div className="footer-author-payment-system__payment-system">
          {paymentSystem.map((src, index) => {
            return <Image key={index} src={src.src} objectFit="contain" />;
          })}
        </div>
      </div>
    </StyledFooterWrapper>
  );
};

export default Footer;
