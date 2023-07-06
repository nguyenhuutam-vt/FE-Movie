import { styled } from "styled-components";
import logo from "../assets/img/M logo 1.png";
import { ReactComponent as IconEmail } from "../assets/icons/iconEmail.svg";
import { ReactComponent as IconPassword } from "../assets/icons/iconPassword.svg";
import Checkbox from "@mui/material/Checkbox";
import { ReactComponent as IconGoogle } from "../assets/icons/iconGoogle.svg";

import { NavLink } from "react-router-dom";

const StyledLogin = styled.div`
`;

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
  return (
      <StyledLogin>
      <div className="headerLogo">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <h5>Login into your account</h5>
          </div>
      <div className="form">
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
                  type="password"
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
                  <div className="btn_signup">
                  <NavLink to="/signup">Signup now</NavLink>
                  </div>
                  <div className="footerForm">
                    <p>since 2023</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          </div>
      </StyledLogin>
  );
};

export default Login;
