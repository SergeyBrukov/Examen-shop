import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { StyledCustomSliderWrapper, StyledImage } from "./customSlider";
import { StyledDescription, StyledMainTitle } from "../styles/styledTitle";

const SlickSlider = ({ products }) => {
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <StyledCustomSliderWrapper size="sm" wrapper="content">
      <Slider {...settings}>
        {products.map(({ id, imageUrl, title, price }) => {
          return (
            <div key={id}>
              <StyledImage
                style={{
                  width: "186px",
                  height: "186px",
                  position: "relative",
                  margin: "0px auto 10px",
                }}
              >
                <Image src={imageUrl} layout="fill" alt="Picture of the author"/>
              </StyledImage>
              <Link href={`/product-page/${id}`}>
                <StyledMainTitle
                  size="14"
                  weight="400"
                  mb="5"
                  as="h2"
                  color="#FF4A32"
                  position="center"
                  cursor="true"
                >
                  {title}
                </StyledMainTitle>
              </Link>
              <StyledDescription
                size="14"
                weight="400"
                color="black"
                position="center"
              >
                ${price}
              </StyledDescription>
            </div>
          );
        })}
      </Slider>
    </StyledCustomSliderWrapper>
  );
};

export default SlickSlider;
