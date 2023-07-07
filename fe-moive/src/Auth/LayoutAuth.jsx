import { styled } from "styled-components";

import IconDarkMode from "../assets/icons/iconDarkMode.svg";

import { createContext, useState } from "react";

import { Outlet } from "react-router-dom";

import InterForm from "./Font/Inter-Regular.woff";

const ThemeContext = createContext(null);

const StyledLayoutAuth = styled.div`
  position: relative;

  width: 100%;

  #light {
    color: #000000;
    background-color: #ffffff;
    .cornerTopLeft {
      width: 5%;
      height: 10vh;
      background-color: #ffe919;
      border-radius: 0 0 100px 0;
      display: inline-block;
    }
    .cornerTopRight {
      position: absolute;
      right: 0;
      top: 0;
      width: 8%;
      height: 16vh;
      background-color: #ffe919;
      border-radius: 0 0 0 100%;
    }
    .cornerBotLeft {
      width: 5%;
      height: 10vh;
      background-color: #ffe919;
      border-radius: 0 100px 0 0;
    }
    ///////////////////////////////// Login page in light mode///////////////////////////////////////////////////
    .inputStyled {
      width: 100%;
      background-color: #000000;
      display: flex;
      border-radius: 10px;
      input {
        background-color: #000000;
        margin-left: 10px;
      }
    }
    input::placeholder {
      font-size: 14.14px;
      color: #ffffff;
      line-height: 21.2px;
      font-weight: 400;
    }
    .underInput {
      margin-top: 16px;
      a {
        color: #000000;
      }
    }
    .btn {
      text-align: center;
      .login button {
        @font-face {
          font-family: "Inter";
          src: local("Inter-Regular"), url(${InterForm}) format("woff");
        }
        font-size: 22px;
        font-weight: 700;
        position: relative;
        width: 86%;
        position: relative;
        width: 46%;
        height: 56px;
        color: #ffe919;
        border-radius: 50px;
        border: 2px solid transparent;
        box-shadow: -14.719192504882812px 17.347618103027344px
          84.10966491699219px 0px #8f00ff3b;

        box-shadow: 15.770564079284668px -13.667821884155273px 112.49666595458984px
          0px #ffe919;

        background: linear-gradient(#000000 0 0) padding-box,
          linear-gradient(
              228.09deg,
              #000000 -9.95%,
              #ffe919 12.47%,
              #ffe919 30.87%,
              #ffe919 53.87%,
              #000000 74.79%,
              #000000 100.44%
            )
            border-box;
      }
      .or {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-size: 22px;
          font-weight: 700;
        }
      }
    }
    .icon {
      background-color: #ffe919;
      padding: 15px;
      border-radius: 8px;
      height: 24.23px;
      svg {
        width: 25px;
        height: 25px;
        path {
          fill: #000000;
        }
      }
    }
    .line {
      width: 40%;
      background-color: #ffffff;
      height: 1px;
    }
    .signup .btn_signup,
    button {
      width: 96%;
      margin: 0 auto;
      padding: 14.5px 0;
      border: 2px solid transparent;
      border-radius: 49px;
      background: linear-gradient(#ffffff 0 0) padding-box,
        linear-gradient(
            228.09deg,
            #000000 -9.95%,
            #ffe919 12.47%,
            #ffe919 30.87%,
            #ffe919 53.87%,
            #000000 74.79%,
            #000000 100.44%
          )
          border-box;

      a {
        @font-face {
          font-family: "Inter";
          src: local("Inter-Regular"), url(${InterForm}) format("woff");
        }
        font-weight: 700;
        font-size: 22px;
        text-transform: uppercase;
        text-decoration: none;
        color: #000000;
      }
    }
    .inputSignup {
      width: 100%;
      background-color: #ffffff;
      display: flex;
      border-radius: 10px;
      margin-bottom: 32px;
      input {
        margin-left: 10px;
      }
    }
    .signup {
      margin-bottom: 4.6em;
    }
    .signup p {
      font-family: "Montserrat";
      font-size: 16px;
      width: 280px;
      margin: 0 auto;
      margin-top: 12px;
    }
    ///////////////////////////////////////////////////////////Signup Page in light mode////////////////////////////////////////////////////////////
    .inputSignup {
      width: 100%;
      background-color: #000000;
      display: flex;
      border-radius: 10px;
      margin-bottom: 32px;
      input {
        background-color: #000000;
        margin-left: 10px;
      }
    }
    .btnSignupPage {
      button {
        @font-face {
          font-family: "Inter";
          src: local("Inter-Regular"), url(${InterForm}) format("woff");
        }
        font-weight: 700;
        font-size: 22px;
        width: 100%;
        padding: 16px 0;
        color: #000000;
        border: 2px solid transparent;
        border-radius: 49px;
        background: linear-gradient(#ffffff 0 0) padding-box,
          linear-gradient(
              228.09deg,
              #000000 -9.95%,
              #ffe919 12.47%,
              #ffe919 30.87%,
              #ffe919 53.87%,
              #000000 74.79%,
              #000000 100.44%
            )
            border-box;
      }
      .signupPage {
        width: 66%;
        margin: 0 auto;
        text-align: center;
        p {
          width: 100%;
          font-family: "Montserrat";
          font-size: 12px;
          font-weight: 500;
          line-height: 15px;
        }
      }
    }
    //////////////////////////////////////////////////////////Forgot page in light mode/////////////////////////////////////////////////////
    .formForgotPassword {
      width: 466.49px;
      margin: 0 auto;
      /* margin-bottom: 10.5em; */
      form {
        margin-bottom: 3.1em;
      }
      label {
        display: inline-block;
        font-family: "Poppins";
        font-weight: 400;
        font-size: 16.16px;
        line-height: 24.23px;
        margin-top: 3.7em;
      }
      //////////////////////////////////Email step////////////////////////
      .inputEmail {
        width: 100%;
        border-radius: 8px;
        margin-bottom: 2em;
        /* background-color: #000000; */
        input {
          /* color: #ffffff;
          background-color: #000000; */
          width: 90%;
          padding: 15px 5px;
          font-size: 22px;
          border-radius: 8px;
          /* outline: none;
          border: none; */
        }
      }
      button{
        color: #000000;
      }
      ////////////// verify code step///////////////////////////////////////////
      .inputCode {
        display: flex;
        margin: 0 auto;
        width: 80%;
        justify-content: space-between;
        margin-top: 6.25em;
        margin-bottom: 2em;
        input {
          /* color: #ffffff;
          background-color: #000000; */
          width: 16%;
          font-size: 22px;
          padding: 0.682em 0.3em;
          border-radius: 6px;
          /* outline: none;
          border: none; */
        }
      }
      ////////////////////////////Comfirm password step//////////////////////////////////
      .inputNewPassword {
        margin-top: 2em;
        margin-bottom: 2em;
        label {
          margin-top: 0;
        }
        input {
          width: 100%;
          padding: 15px 5px;
          font-size: 22px;
          border-radius: 8px;
        }
      }

      button {
        margin-bottom: 1.3em;
      }
    }
  }
  ///////////////////////////////////////End light mode/////////////////////////////////////////
  //////////////////////////////////////Dark mode///////////////////////////////////////////////
  #dark {
    color: #ffffff;
    background-color: #252525;
    .cornerTopLeft {
      width: 5%;
      height: 10vh;
      background-color: #46348b;
      border-radius: 0 0 100px 0;
      display: inline-block;
    }
    .cornerTopRight {
      position: absolute;
      right: 0;
      top: 0;
      width: 8%;
      height: 16vh;
      background-color: #46348b;
      border-radius: 0 0 0 100%;
    }
    .cornerBotLeft {
      width: 5%;
      height: 10vh;
      background-color: #46348b;
      border-radius: 0 100px 0 0;
    }
    ///////////////////////////////////////////Login page in Dark mode///////////////////////////////////////////
    .inputStyled {
      width: 100%;
      background-color: #ffffff;
      display: flex;
      border-radius: 10px;
      input {
        margin-left: 10px;
      }
    }

    input::placeholder {
      font-size: 14.14px;
      color: #555555;
      line-height: 21.2px;
      font-weight: 400;
    }
    .underInput {
      margin-top: 16px;
      a {
        color: #ffffff;
      }
    }
    .btn {
      text-align: center;
      .login button {
        @font-face {
          font-family: "Inter";
          src: local("Inter-Regular"), url(${InterForm}) format("woff");
        }
        font-size: 22px;
        font-weight: 700;
        position: relative;
        width: 86%;
        position: relative;
        width: 46%;
        height: 56px;
        color: #46348b;
        border-radius: 50px;
        border: 2px solid transparent;
        box-shadow: -14.719192504882812px 17.347618103027344px
          84.10966491699219px 0px rgba(143, 0, 255, 0.15);

        box-shadow: 15.770564079284668px -13.667821884155273px 112.49666595458984px
          0px rgba(255, 0, 0, 0.15);
        background: linear-gradient(#ffffff 0 0) padding-box,
          linear-gradient(
              265.43deg,
              #ff2c2c 7.26%,
              rgba(251, 152, 4, 0.796875) 22.2%,
              rgba(223, 255, 218, 0.23084) 47.78%,
              rgba(255, 255, 255, 0) 54.69%,
              rgba(255, 10, 127, 0.82) 84.51%,
              #780eff 101.13%
            )
            border-box;
      }
      .or {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-size: 22px;
          font-weight: 700;
        }
      }
    }
    .icon {
      background-color: #5d51a8;
      padding: 15px;
      border-radius: 8px;
      height: 24.23px;
      svg {
        width: 25px;
        height: 25px;
      }
    }
    .line {
      width: 40%;
      background-color: #ffffff;
      height: 1px;
    }
    .signup .btn_signup,
    button {
      width: 96%;
      margin: 0 auto;
      padding: 14.5px 0;
      color: #ffffff;
      border: 2px solid transparent;
      border-radius: 49px;
      background: linear-gradient(#252525 0 0) padding-box,
        linear-gradient(
            228.09deg,
            #ff2cf7 -9.95%,
            rgba(251, 4, 123, 0.796875) 12.47%,
            rgba(255, 126, 188, 0.81) 30.87%,
            rgba(255, 255, 255, 0) 53.87%,
            rgba(73, 255, 233, 0.65) 70.34%,
            #130eff 100.44%
          )
          border-box;
      a {
        @font-face {
          font-family: "Inter";
          src: local("Inter-Regular"), url(${InterForm}) format("woff");
        }
        font-weight: 700;
        font-size: 22px;
        text-transform: uppercase;
        text-decoration: none;
        color: #ffffff;
      }
    }
    .signup {
      margin-bottom: 4.6em;
    }
    .signup p {
      font-family: "Montserrat";
      font-size: 16px;
      width: 280px;
      margin: 0 auto;
      margin-top: 12px;
    }
    ///////////////////////////////////////////////////Signup Page Dark Mode///////////////////////////////////////////////
    .inputSignup {
      width: 100%;
      background-color: #ffffff;
      border-radius: 10px;
      margin-bottom: 32px;
      display: flex;
      input {
        margin-left: 10px;
        width: 90%;
      }
    }
    .btnSignupPage {
      button {
        @font-face {
          font-family: "Inter";
          src: local("Inter-Regular"), url(${InterForm}) format("woff");
        }
        font-weight: 700;
        font-size: 22px;
        width: 100%;
        padding: 16px 0;
        color: #ffffff;
        border: 2px solid transparent;
        border-radius: 49px;
        background: linear-gradient(#000000 0 0) padding-box,
          linear-gradient(
              228.09deg,
              #ff2cf7 -9.95%,
              rgba(251, 4, 123, 0.796875) 12.47%,
              rgba(255, 126, 188, 0.81) 30.87%,
              rgba(255, 255, 255, 0) 53.87%,
              rgba(73, 255, 233, 0.65) 70.34%,
              #130eff 100.44%
            )
            border-box;
      }
      .signupPage {
        width: 66%;
        margin: 0 auto;
        text-align: center;
        p {
          width: 100%;
          font-family: "Montserrat";
          font-size: 12px;
          font-weight: 500;
          line-height: 15px;
        }
      }
    }
    ////////////////////////////////////////////////////Forgot password page in Dark Mode/////////////////////////////////////////////////

    .formForgotPassword {
      width: 466.49px;
      margin: 0 auto;
      /* margin-bottom: 10.5em; */
      form {
        margin-bottom: 3.1em;
      }
      label {
        display: inline-block;
        font-family: "Poppins";
        font-weight: 400;
        font-size: 16.16px;
        line-height: 24.23px;
        margin-top: 3.7em;
      }
      .inputEmail {
        width: 100%;
        background-color: #ffffff;
        border-radius: 8px;
        margin-bottom: 2em;
        input {
          width: 90%;
          padding: 15px 5px;
          font-size: 22px;
          border-radius: 8px;
          outline: none;
          border: none;
        }
      }
      .inputCode {
        display: flex;
        margin: 0 auto;
        width: 80%;
        justify-content: space-between;
        margin-top: 6.25em;
        margin-bottom: 2em;
        input {
          width: 16%;
          font-size: 22px;
          padding: 0.682em 0.3em;
          border-radius: 6px;
          outline: none;
          border: none;
        }
      }
      .inputNewPassword {
        margin-top: 2em;
        margin-bottom: 2em;
        label {
          margin-top: 0;
        }
        input {
          width: 100%;
          padding: 15px 5px;
          font-size: 22px;
          border-radius: 8px;
        }
      }

      button {
        margin-bottom: 1.3em;
      }
    }
  }
  //////////////////////////////////////////////////End Dark Mode////////////////////////////////////////
  /////////////////////////////////////////////////////////////// ALL ///////////////////////////////////////////////////////
  button {
    cursor: pointer;
    text-transform: uppercase;
  }
  form {
    margin-bottom: 34px;
  }
  .headerLogo {
    text-align: center;
    margin-top: -40px;
  }
  .logo {
    margin: 0 auto;
    width: 71px;
    img {
      width: 100%;
    }
  }
  h5 {
    font-family: "Poppins";
    font-weight: 600;
    font-size: 16.16px;
    line-height: 24.23px;
  }
  .form {
    width: 466.49px;
    margin: 0 auto;
    label {
      display: inline-block;
      font-family: "Poppins";
      font-weight: 400;
      font-size: 16.16px;
      line-height: 24.23px;
      margin-top: 60px;
    }
    input {
      height: 50.49px;
      width: 89%;
      border-radius: 8px;
      outline: none;
      border: none;
    }
  }
  ////////////////////////////////////////////Sign up page ALL///////////////////////////////////////////
  .formSingup {
    width: 466.49px;
    margin: 0 auto;
    margin-bottom: 11.9em;
    label {
      display: inline-block;
      font-family: "Poppins";
      font-weight: 400;
      font-size: 16.16px;
      line-height: 24.23px;
      margin-top: 60px;
    }
    input {
      height: 50.49px;
      width: 89%;
      border-radius: 8px;
      outline: none;
      border: none;
    }
  }
  .underInput {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Poppins";
    text-decoration: underline;
  }
  .remember {
    cursor: pointer;
    .rmb {
      padding-left: 20px;
    }
  }
  .login {
    display: flex;
    justify-content: space-between;
    margin-top: 3em;
  }

  .footerForm {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .SwitchMode {
    position: absolute;
    right: 0;
    bottom: 2%;
    width: 5%;
  }
  //Switch
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 24px;
  }
  //hide default checkbox
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #020201;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 36px;
    width: 36px;
    left: 0px;
    bottom: -6px;
    background-color: #46348b;
    background: url(${IconDarkMode}) center center / 100% no-repeat;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  .slider::after {
    background: url(${IconDarkMode}) center center / 100% no-repeat;
  }

  input:checked + .slider {
    background-color: #ffe919;
    border: 1px solid #000000;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #46348b;
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    background-color: #ffe919;
    border: 1px solid #000000;
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
    background-color: #46348b;
  }
  //End switch
`;

const LayoutAuth = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((cur) => (cur === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledLayoutAuth>
        <div id={theme}>
          <div className="cornerTopLeft" />
          <div className="cornerTopRight" />
          <Outlet></Outlet>
          <div className="footerLogin">
            <div className="cornerBotLeft" />
            <div className="SwitchMode">
              <label
                class="switch"
                onChange={toggleTheme}
                checked={theme === "light"}
              >
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </StyledLayoutAuth>
    </ThemeContext.Provider>
  );
};

export default LayoutAuth;
