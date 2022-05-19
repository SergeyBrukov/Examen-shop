import Image from "next/image";
import {
  StyledBrandImageContainer,
  StyledBrandWrapper,
} from "../styles/StyledBrandsGoods";

import background from "./../public/rectangle.jpg";
import backgroundElectricSkateBoards from "./../public/background-scate-board.png";
import BoostedBoards from "./../public/shop-booster/shop-booster-boards.png";
import BoostedRevs from "./../public/shop-booster/shop-boosted-revs.png";
import PopularMechanics from "./../public/brands/popular-mechanics.png";
import Electrek from "./../public/brands/electrek.png";
import TechCrunch from "./../public/brands/tech-crunch.png";
import Wired from "./../public/brands/wired.png";
import BoostedRevOne from "./../public/BoostedRev(1).png";
import BoostedRevTwo from "./../public/BoostedRev(2).png";
import BoostedMini from "./../public/shop-booster/boosted-mini-image.png";
import BoostedPlus from "./../public/shop-booster/boosted-plus-image.png";
import BoostedStealth from "./../public/shop-booster/boosted-stealth-image.png";
import GoCardFast from "./../public/go-card/go-card-fast.png";
import GoCardFar from "./../public/go-card/go-card-far.png";
import GoCardSafe from "./../public/go-card/go-card-safe.png";
import GoCardBuild from "./../public/go-card/go-card-build.png";

import axios from "axios";

import {
  StyledRectangleWrapper,
  StyledBgImageContainer,
  StyledRectangleTextContainer,
} from "./../styles/styledRectangle";

import { StyledButton } from "./../components/styles/styledButtons";

import { StyledHomeWrapper } from "../styles/HomePageStyle";
import {
  StyledDescription,
  StyledMainTitle,
} from "./../components/styles/styledTitle";
import {
  StyledBoostedImageBlock,
  StyledBosterBoardRevsInfo,
  StyledBosterBoardRevsWrapper,
} from "../styles/styledBosterBoardRevs";
import { StyledElectricSkateBoardsWrapper } from "../styles/styledElectricsSkate";
import { StyledBoostedRevWrapper } from "../styles/styledBoostedRev";
import {
  StyledBoostedStockShop,
  StyledBoostedStockShopWrapper,
} from "../styles/styledBoosterStockShop";
import Imagewithtext from "../components/imageWithText/ImageWithText";
import { StyledVideoBlockWrapper } from "../styles/styledVideoBlock";
import SlickSlider from "../components/slider/SlickSlider";
import { StyledSliderWrapper } from "../styles/styledSliderBlock";
import { StyledSeparatorBlock } from "../styles/styledSeparatorBlock";
import { StyledGoWrapper } from "../styles/styledGo";
import GoCarditem from "../components/go-card/GoCardItem";
import Trolley from "../components/trolley/Trolley";

export default function Home({ products }) {
  const brandsImage = [
    { srs: Electrek },
    { srs: TechCrunch },
    { srs: PopularMechanics },
    { srs: Wired },
  ];
  return (
    <StyledHomeWrapper height="auto">
      <StyledRectangleWrapper>
        <StyledBgImageContainer>
          <Image src={background} alt="Picture of the author"/>
        </StyledBgImageContainer>
        <StyledRectangleTextContainer>
          <div className="rectangle-title-info">
            <StyledMainTitle
              size="44"
              weight="400"
              color="black"
              position="center"
            >
              Welcome to Boosted USA
            </StyledMainTitle>
            <StyledDescription
              mt="14"
              mb="20"
              size="15"
              weight="400"
              color="black"
              position="center"
            >
              The Holy Grail of Electric Skateboards and One REVolutionary
              Scooter
            </StyledDescription>
          </div>
          <div className="rectangle-btn-block">
            <StyledButton color="main" size="14" figure="circle">
              BOOSTED REVS
            </StyledButton>
            <StyledButton color="main" size="14" figure="circle">
              BOOSTED BOARDS
            </StyledButton>
          </div>
        </StyledRectangleTextContainer>
      </StyledRectangleWrapper>
      <StyledBrandWrapper>
        <StyledBrandImageContainer>
          {brandsImage.map((src, index) => {
            return <Image key={index + 1} src={src.srs} alt="Picture of the author"/>;
          })}
        </StyledBrandImageContainer>
      </StyledBrandWrapper>
      <StyledBosterBoardRevsWrapper size="mm" wrapper="content">
        <StyledBosterBoardRevsInfo>
          <StyledMainTitle
            size="32"
            mb="20"
            weight="400"
            color="black"
            position="center"
          >
            Looking for Boosted Boards, or Boosted Revs?
          </StyledMainTitle>
          <StyledDescription
            size="15"
            weight="400"
            color="black"
            position="center"
          >
            Boosted USA acquired all of the remaining inventory directly from
            Boosted. This means we have the electric skateboards and scooter you
            all love and have been looking for. Get your hands on these highly
            sought after products while supplies last.
          </StyledDescription>
        </StyledBosterBoardRevsInfo>
        <div className="line" />
        <StyledBoostedImageBlock>
          <div className="boosted-revs-block">
            <Image src={BoostedRevs} alt="Picture of the author"/>
            <div className="boosted-revs-block__info">
              <span className="icon-lightning"></span>
              <StyledMainTitle
                size="25"
                mb="20"
                as="h2"
                weight="400"
                color="#FFFFFF"
                position="center"
              >
                Shop Boosted Boards
              </StyledMainTitle>
              <StyledDescription
                size="18"
                weight="400"
                color="#FFFFFF"
                position="center"
              >
                In Stock
              </StyledDescription>
            </div>
          </div>
          <div className="boosted-boards-block">
            <Image src={BoostedBoards} alt="Picture of the author"/>
            <div className="boosted-boards-block__info">
              <span className="icon-lightning"></span>
              <StyledMainTitle
                size="25"
                mb="20"
                as="h2"
                weight="400"
                color="#FFFFFF"
                position="center"
              >
                Shop Boosted Revs
              </StyledMainTitle>
              <StyledDescription
                size="18"
                weight="400"
                color="#FFFFFF"
                position="center"
              >
                In Stock
              </StyledDescription>
            </div>
          </div>
        </StyledBoostedImageBlock>
      </StyledBosterBoardRevsWrapper>
      <StyledElectricSkateBoardsWrapper>
        <StyledBgImageContainer  className="electric-skateboard-image-block">
          <Image src={backgroundElectricSkateBoards} alt="Picture of the author"/>
        </StyledBgImageContainer>
        <div className="electric-skateboard-info-block">
          <StyledDescription
            mt="14"
            mb="20"
            size="15"
            weight="400"
            color="black"
            position="center"
          >
            High-performance
          </StyledDescription>
          <StyledMainTitle
            size="44"
            as="h2"
            weight="400"
            color="black"
            position="center"
          >
            Electric Skateboards
          </StyledMainTitle>
          <StyledDescription
            mt="14"
            mb="20"
            size="15"
            weight="400"
            color="black"
            position="center"
          >
            Cruising campus, going to work or getting through that long list of
            errands has never been easier or more fun.
          </StyledDescription>
          <div>
            <StyledButton color="main" size="14" figure="circle">
              Shop Now
            </StyledButton>
          </div>
        </div>
      </StyledElectricSkateBoardsWrapper>
      <StyledBoostedRevWrapper size="mm" wrapper="content">
        <Image src={BoostedRevOne} alt="Picture of the author" />
        <Image src={BoostedRevTwo} alt="Picture of the author" />
        <div className="boosted-rev-info-block">
          <StyledMainTitle
            size="32"
            mb="20"
            weight="400"
            color="black"
            position="start"
          >
            Boosted Rev
          </StyledMainTitle>
          <StyledDescription
            size="15"
            weight="400"
            color="black"
            position="start"
          >
            Theres never been an electric scooter quite like this. Speed past
            traffic at 24 mph. Go up to 22 miles on a single charge. Youll get
            there in no time at all. Stop and go with the roll of your thumb.
            Its intuitive design means theres almost no learning curve.
          </StyledDescription>
          <div className="boosted-rev-info-block__btn">
            <StyledButton color="main" size="14" figure="circle">
              Shop Now
            </StyledButton>
          </div>
        </div>
      </StyledBoostedRevWrapper>
      <StyledBoostedStockShopWrapper>
        <Imagewithtext
          srcImage={BoostedStealth}
          alt="Picture of the author"
          asTitle="h2"
          titleInfo="Shop Boosted Stealth"
          descInfo="IN STOCK"
        />
        <Imagewithtext
          alt="Picture of the author"
          srcImage={BoostedPlus}
          asTitle="h2"
          titleInfo="Shop Boosted Plus"
          descInfo="IN STOCK"
        />
        <Imagewithtext
          alt="Picture of the author"
          srcImage={BoostedMini}
          asTitle="h2"
          titleInfo="Shop Boosted Mini"
          descInfo="IN STOCK"
        />
      </StyledBoostedStockShopWrapper>
      <StyledVideoBlockWrapper size="mm" wrapper="content">
        <iframe
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/zikvUaOLUuE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/uulPzAmu_a4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </StyledVideoBlockWrapper>
      <StyledSliderWrapper>
        <StyledMainTitle size="32" weight="700" color="black" position="center">
          Looking for Accessories?
        </StyledMainTitle>
        <div className="line" />
        <SlickSlider products={products} />
      </StyledSliderWrapper>
      <StyledSeparatorBlock />
      <StyledGoWrapper>
        <GoCarditem
          srcImage={GoCardFast}
          infoTitle="Go Fast"
          infoDescript="Boosted is known for its premium performance boards offering a next-level experience."
        />
        <GoCarditem
          srcImage={GoCardFar}
          infoTitle="Go Far"
          infoDescript="With optional extended battery life, you can get wherever you need to go reliably."
        />
        <GoCarditem
          srcImage={GoCardSafe}
          infoTitle="Go Safe"
          infoDescript="Safety is a #1 priority for Boosted, always wear a helmet when riding."
        />
        <GoCarditem
          srcImage={GoCardBuild}
          infoTitle="Build to Last"
          infoDescript="Boosted products are engineered to last for years and are extremely reliable."
        />
      </StyledGoWrapper>
    </StyledHomeWrapper>
  );
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(
    "https://6271776925fed8fcb5e6a1e9.mockapi.io/product/product"
  );
  return {
    props: { products: data },
  };
};
