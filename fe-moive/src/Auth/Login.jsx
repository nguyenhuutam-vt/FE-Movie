import { styled } from "styled-components";
import logo from "../assets/img/M logo 1.png";
import { ReactComponent as IconEmail } from "../assets/icons/iconEmail.svg";
import { ReactComponent as IconPassword } from "../assets/icons/iconPassword.svg";
import Checkbox from "@mui/material/Checkbox";
import { ReactComponent as IconGoogle } from "../assets/icons/iconGoogle.svg";
import IconDarkMode from "../assets/icons/iconDarkMode.svg";

import { createContext, useState } from "react";

import { NavLink } from "react-router-dom";

const ThemeContext = createContext(null);

const StyledLogin = styled.div`
  position: relative;

  width: 100%;
  font-family: Poppins;

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
    .inputStyled {
      width: 100%;
      background-color: #000000;
      display: flex;
      border-radius: 10px;
      margin-bottom: 6px;
      input {
        margin-left: 10px;
        background-color: #000000;
        color: #ffffff;
      }
    }
    input::placeholder {
      font-size: 14.14px;
      color: #ffffff;
      line-height: 21.2px;
      font-weight: 400;
    }
    .underInput {
      margin-top: 10px;
      a {
        color: #000000;
      }
    }
    .btn {
      margin-top: 40px;
      text-align: center;
      button {
        position: relative;
        width: 46%;
        height: 56px;
        border-radius: 50px;
        border: 2px solid transparent;
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
    .login {
      button {
        color: #ffe919;
      }
    }
    .line {
      width: 40%;
      background-color: #000000;
      height: 1px;
    }
    .signup button {
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
  }

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
    .inputStyled {
      width: 100%;
      background-color: #ffffff;
      display: flex;
      border-radius: 10px;
      margin-bottom: 6px;
      input{
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
      margin-top: 10px;
      a {
        color: #ffffff;
      }
    }
    .btn {
      margin-top: 40px;
      text-align: center;
      button {
        position: relative;
        width: 46%;
        height: 56px;
        border-radius: 50px;
        border: 2px solid transparent;
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
    .signup button {
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
    }
  }
  button {
    cursor: pointer;
    text-transform: uppercase;
  }
  form {
    margin-bottom: 34px;
  }
  .loginLogo {
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
    font-weight: 600;
    font-size: 16.16px;
    line-height: 24.23px;
  }
  .formLogin {
    width: 466.49px;
    margin: 0 auto;
    label {
      display: inline-block;
      font-weight: 400;
      font-size: 16.16px;
      line-height: 24.23px;
      margin-top: 20px;
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
  }
  .or {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footerLogin {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .footerForm {
    text-transform: uppercase;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    display: inline-block;
  }
  .SwitchMode {
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

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((cur) => (cur === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledLogin>
        <div id={theme}>
          <div className="cornerTopLeft" />
          <div className="cornerTopRight" />

          <div className="loginLogo">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <h5>Login into your account</h5>
          </div>

          <div className="formLogin">
            <form action="">
              <label htmlFor="email">Email address</label>
              <div className="inputStyled">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="marvelous@email.com"
                />
                <div className="icon">
                  <IconEmail />
                </div>
              </div>

              <label htmlFor="password">Password</label>
              <div className="inputStyled">
                <input
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <div className="icon">
                  <IconPassword />
                </div>
              </div>
              <div className="underInput">
                <div className="remember">
                  {theme === "dark" ? (
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        color: "#5D51A8",
                        "&.Mui-checked": {
                          color: "#FFFFFF",
                        },
                        backgroundColor: "#5D51A8",
                        width: "10px",
                        height: "10px",
                        boxShadow: "0px 0px 9px 1px #780EFF",
                      }}
                    />
                  ) : (
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        color: "#FFE919",
                        "&.Mui-checked": {
                          color: "#000000",
                        },
                        backgroundColor: "#FFE919",
                        width: "10px",
                        height: "10px",
                        boxShadow: "0px 0px 9px 1px #FFE919",
                      }}
                    />
                  )}
                  <span className="rmb">Remember Me</span>
                </div>
                <NavLink to="/forgotpassword">Forgot password?</NavLink>
              </div>
              <div className="btn">
                <div className="login">
                  <button type="submit">LOGIN NOW</button>
                  <button type="submit">
                    <IconGoogle />
                  </button>
                </div>
                <div className="or">
                  <div className="line" />
                  <p>OR</p>
                  <div className="line" />
                </div>
                <div className="signup">
                  <button type="submit">SIGN UP NOW</button>
                </div>
              </div>
            </form>
          </div>
          <div className="footerLogin">
            <div className="cornerBotLeft" />
            <div className="footerForm">
              <p>since 2023</p>
            </div>
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
      </StyledLogin>
    </ThemeContext.Provider>
  );
};

export default Login;
