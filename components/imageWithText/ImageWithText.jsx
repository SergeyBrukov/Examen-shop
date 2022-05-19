import Image from "next/image";
import { StyledDescription, StyledMainTitle } from "../styles/styledTitle";
import { StyledImageTextContainer } from "./styledImageTextContainer";

const Imagewithtext = ({ srcImage, titleInfo, descInfo, asTitle }) => {
  return (
    <StyledImageTextContainer>
      <Image src={srcImage} objectFit="contain" alt="Picture of the author"/>
      <div className="image-text-container__info">
        <StyledMainTitle
          size="25"
          mb="20"
          as={asTitle}
          weight="400"
          color="#FFFFFF"
          position="center"
        >
          {titleInfo}
        </StyledMainTitle>
        <StyledDescription
          size="18"
          mb="20"
          weight="400"
          color="#FFFFFF"
          position="center"
        >
          {descInfo}
        </StyledDescription>
      </div>
    </StyledImageTextContainer>
  );
};

export default Imagewithtext;
