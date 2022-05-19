import Image from "next/image";
import { StyledDescription, StyledMainTitle } from "../styles/styledTitle";
import { StyledGoCardBlock } from "./styledGoCard";

const GoCarditem = ({ infoTitle, infoDescript, srcImage }) => {
  return (
    <StyledGoCardBlock>
      <Image src={srcImage} objectFit="contain" />
      <StyledMainTitle
        size="36px"
        mb="25"
        weight="700"
        color="white"
        position="center"
      >
        {infoTitle}
      </StyledMainTitle>
      <StyledDescription size="15" weight="400" color="white" position="center">
        {infoDescript}
      </StyledDescription>
    </StyledGoCardBlock>
  );
};

export default GoCarditem;
