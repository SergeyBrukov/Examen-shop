import Link from "next/link";
import Navbar from "../navBar/NavBar";
import Logo from "../../public/Logo.svg";
import Image from "next/image";
import {
  StyledHeaderContainer,
  StyledHeaderWrapper,
  StyledLogoWrapper,
} from "./styledHeader";
import Account from "../account/Account";
import Trolley from "../trolley/Trolley";

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledHeaderContainer size="sm" wrapper="content">
        <Link href="/">
          <a>
            <StyledLogoWrapper>
              <Image src={Logo} alt="Picture of the author"/>
            </StyledLogoWrapper>
          </a>
        </Link>
        <div className="navbar-block">
          <Navbar />
        </div>
        <div className="account-trolley-block">
          <Account />
          <Trolley />
        </div>
      </StyledHeaderContainer>
    </StyledHeaderWrapper>
  );
};

export default Header;
