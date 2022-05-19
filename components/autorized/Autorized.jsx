import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { withRouter } from "next/router";
import InputGroup from "../inputGroup/InputGroup";

import {
  login,
  signUp,
  signInGoogle,
  forgotPassword,
  useAuth,
} from "./firebese";
import CustoMmodal from "../customModal/CustomModal";
import { StyledAutorizedWrapper } from "./styledAutorized";
import { StyledMainContainer } from "../styles/styledContainer";
import { StyledButton } from "../styles/styledButtons";

const Avtorised = (props) => {
  const [registration, setRegistration] = useState();
  useEffect(() => {
    setRegistration(props.router.query.registration);
  }, [props.router.query]);

  const [disable, setDisable] = useState(false);

  const navigate = useRouter();

  const [regData, setRegData] = useState({ email: "", password: "", name: "" });
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");

  const [emailDirty, setEmailDirty] = useState(false);
  const [changePasswordEmailDirty, setChangePasswordEmailDirty] =
    useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);

  const [nameError, setNameError] = useState("The field cannot be empty");
  const [emailError, setEmailError] = useState("The field cannot be empty");
  const [emailChangePasswordError, setEmailChangePasswordError] = useState(
    "The field cannot be empty"
  );
  const [passwordError, setPasswordError] = useState(
    "The field cannot be empty"
  );

  const reEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const rePassword = /^[0-9a-zA-Z]/;
  const reName = /^[a-zA-Z ]+$/;

  const [formRegValid, setFormRegValid] = useState(false);
  const [formLogValid, setFormValid] = useState(false);

  const [activeModal, setActiveModal] = useState(false);

  useEffect(() => {
    if (emailError || passwordError || nameError) {
      setFormRegValid(false);
    } else {
      setFormRegValid(true);
    }
  }, [nameError, emailError, passwordError]);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const handlSingUp = async () => {
    try {
      await signUp(regData.email, regData.password);
      navigate.push("/");
    } catch {
      console.error("Error registration");
    }
  };
  const handlLogin = async () => {
    setDisable(true);
    try {
      await login(regData.email, regData.password);
      navigate.push("/");
    } catch {
      console.error("Error login");
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInGoogle();
      navigate.push("/");
    } catch {
      console.error("Error by Google");
    }
  };

  const changePasswordEmail = async () => {
    try {
      forgotPassword(forgotPasswordEmail);
      setForgotPasswordEmail("");
      setTimeout(() => {
        setActiveModal(false);
      }, 3000);
    } catch {}
  };
  const validEmailChangePassword = (e) => {
    setForgotPasswordEmail(e.target.value);
    if (!reEmail.test(String(e.target.value).toLowerCase())) {
      setChangePasswordEmailDirty(true);
      setEmailChangePasswordError("Invalid Email");
      if (!e.target.value) {
        setEmailChangePasswordError("The field cannot be empty");
      }
    } else {
      setEmailChangePasswordError("");
    }
  };

  const validName = (e) => {
    setRegData({ ...regData, name: e.target.value });
    if (!reName.test(String(e.target.value).toLowerCase())) {
      setNameDirty(true);
      setNameError("Invalid Name");
      if (!e.target.value) {
        setNameError("The field cannot be empty");
      }
    } else {
      setNameError("");
    }
  };

  const validEmail = (e) => {
    setRegData({ ...regData, email: e.target.value });
    if (!reEmail.test(String(e.target.value).toLowerCase())) {
      setEmailDirty(true);
      setEmailError("Invalid Email");
      if (!e.target.value) {
        setEmailError("The field cannot be empty");
      }
    } else {
      setEmailError("");
    }
  };

  const validPassword = (e) => {
    setRegData({ ...regData, password: e.target.value });
    if (!rePassword.test(String(e.target.value).toLowerCase())) {
      setPasswordDirty(true);
      setPasswordError("Invalid Password");
      if (!e.target.value) {
        setPasswordError("The field cannot be empty");
      }
    } else {
      setPasswordError("");
    }
  };

  return (
    <StyledMainContainer>
      <StyledAutorizedWrapper padding="auth">
        <form onSubmit={(e) => e.preventDefault()}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              maxWidth: "200px",
              margin: "0 auto",
            }}
          >
            {registration && (
              <InputGroup
                label="Name"
                value={regData.name}
                type="text"
                onChange={validName}
                onBlur={() => setNameDirty(true)}
                error={nameDirty && nameError ? nameError : false}
              />
            )}
            <InputGroup
              label="E-mail"
              value={regData.email}
              onChange={validEmail}
              onBlur={() => setEmailDirty(true)}
              error={emailDirty && emailError ? emailError : false}
            />
            <InputGroup
              type="password"
              label="Password"
              value={regData.password}
              onChange={validPassword}
              onBlur={() => setPasswordDirty(true)}
              error={passwordDirty && passwordError ? passwordError : false}
            />
            {registration ? (
              <>
                <StyledButton
                  disabled={!formRegValid}
                  color="main"
                  onClick={handlSingUp}
                >
                  Registration
                </StyledButton>
                <br />
                <StyledButton color="main" onClick={signInWithGoogle}>
                  Registration by Google
                </StyledButton>
              </>
            ) : (
              <>
                <StyledButton
                  color="main"
                  onClick={handlLogin}
                  disabled={!formLogValid || disable}
                >
                  Come in
                </StyledButton>
                <br />
                <StyledButton color="main" onClick={signInWithGoogle}>
                  Come in by Google
                </StyledButton>
                <br />
                <StyledButton
                  className="change-password-btn"
                  onClick={() => setActiveModal(true)}
                >
                  Change Password
                </StyledButton>
              </>
            )}
          </div>
        </form>
        <CustoMmodal active={activeModal} setActive={setActiveModal}>
          <p>
            Enter your e-mail to which you want to send instructions for
            changing your password
          </p>
          <InputGroup
            label="E-mail"
            value={forgotPasswordEmail}
            onChange={validEmailChangePassword}
            onBlur={() => setChangePasswordEmailDirty(true)}
            error={
              changePasswordEmailDirty && emailChangePasswordError
                ? emailChangePasswordError
                : false
            }
          />
          <div className="modal-change-password-btn-block">
            <StyledButton
              className="modal-change-password-btn-block__btn"
              disabled={!emailChangePasswordError ? false : true}
              onClick={changePasswordEmail}
            >
              Change Password
            </StyledButton>
          </div>
        </CustoMmodal>
      </StyledAutorizedWrapper>
    </StyledMainContainer>
  );
};

export default withRouter(Avtorised);
