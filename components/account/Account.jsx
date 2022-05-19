import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { acountAdminRoutes } from "../../utils/navBarRoutes";
import { logout, useAuth } from "../autorized/firebese";
import SideBar from "../sideBar/SideBar";
import { StyledButton } from "../styles/styledButtons";
import { StyledMainTitle } from "../styles/styledTitle";
import {
  AcountLink,
  StyledAccountBar,
  StyledAccountBlockBtn,
  StyledAccountWrapper,
} from "./styleAcount";

const Account = () => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useRouter();
  const router = useRouter();

  const user = useAuth();

  const isOpen = () => {
    setVisible(true);
  };
  const isClose = () => {
    setVisible(false);
  };

  const sideBarRef = useRef();

  React.useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (!e.path.includes(sideBarRef.current)) {
        setVisible(false);
      }
    });
  }, []);

  return (
    <>
      <StyledAccountBar onClick={isOpen} ref={sideBarRef}>
        <span className="icon-account"></span>
      </StyledAccountBar>
      <SideBar open={visible} close={isClose}>
        <StyledAccountWrapper>
          <div className="account-wrapper__top">
            <StyledMainTitle as="h2" size="30" weight="700" color="black">
              Account
            </StyledMainTitle>
            <StyledButton
              figure="circle"
              color="main"
              size="14"
              onClick={() => setVisible(false)}
            >
              <span className="icon-cross-circle"></span>
            </StyledButton>
          </div>
          {!user ? (
            <StyledAccountBlockBtn onClick={isClose}>
              <div className="login-btn">
                <StyledButton color="main">
                  <Link href="/autorized">
                    <a>Login</a>
                  </Link>
                </StyledButton>
              </div>
              <div>
                <StyledButton
                  className="registration-btn"
                  color="main"
                  onClick={() =>
                    router.push({
                      pathname: "/autorized",
                      query: { registration: true },
                    })
                  }
                >
                  Registration
                </StyledButton>
              </div>
            </StyledAccountBlockBtn>
          ) : (
            <>
              {user?.email === "sdiomant@itlab-studio.com"
                ? acountAdminRoutes.map(({ title, href }) => {
                    return (
                      <Link key={title} href={href}>
                        <AcountLink
                          onClick={isClose}
                          className={
                            pathname === href
                              ? "router-link active"
                              : "router-link"
                          }
                        >
                          {title}
                        </AcountLink>
                      </Link>
                    );
                  })
                : null}

              <div className="logout">
                <StyledButton onClick={() => logout()}>logout</StyledButton>
              </div>
            </>
          )}
        </StyledAccountWrapper>
      </SideBar>
    </>
  );
};

export default Account;
