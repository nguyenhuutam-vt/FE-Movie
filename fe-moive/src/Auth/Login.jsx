import { styled } from "styled-components";
// import { styled as styledMui } from "@mui/material/styles";
import logo from "../assets/img/M logo 1.png";
import { ReactComponent as IconEmail } from "../assets/icons/iconEmail.svg";
import { ReactComponent as IconPassword } from "../assets/icons/iconPassword.svg";
import Checkbox from "@mui/material/Checkbox";
import { ReactComponent as IconGoogle } from "../assets/icons/iconGoogle.svg";
import { ReactComponent as IconDarkMode } from "../assets/icons/iconSwitchMode.svg";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Switch from "@mui/material/Switch";
const StyledLogin = styled.div`
  position: relative;
  button {
    text-transform: uppercase;
  }
  width: 100%;
  background-color: #000000;
  color: #ffffff;
  font-family: Poppins;
  form {
    margin-bottom: 34px;
  }
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
    position: absolute;
    bottom: 0;
    width: 5%;
    height: 10vh;
    background-color: #46348b;
    border-radius: 0 100px 0 0;
  }
  .clear {
    clear: both;
  }
  .loginLogo {
    text-align: center;
  }
  .logo {
    margin: 0 auto;
    width: 71px;
    height: 61px;
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
      margin-top: 39px;
    }
    .inputStyled {
      width: 100%;
      background-color: #ffffff;
      display: flex;
      border-radius: 10px;
    }
    input {
      height: 50.49px;
      width: 89%;
      border-radius: 8px;
      outline: none;
      border: none;
    }
    input::placeholder {
      padding-left: 10px;
      font-size: 14.14px;
      color: #555555;
      line-height: 21.2px;
      font-weight: 400;
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
  .btn {
    margin-top: 30px;
    text-align: center;
    button {
      position: relative;
      width: 402px;
      height: 60px;
      margin-bottom: 10px;
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
  .or {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .line {
    width: 40%;
    background-color: #ffffff;
    height: 1px;
  }
  .signup button {
    margin-top: 10px;
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
  .footerLogin {
    display: flex;
    justify-content: space-between;
  }
  .footerForm {
    text-transform: uppercase;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    display: inline-block;
  }

  
    .switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

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
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  background-image: url(${IconDarkMode});
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #FFE919;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
  
}

.slider.round:before {
  border-radius: 50%;
  
}
  
  .toggle {
    background-color: #46348b;
  }
`;

const label = { inputProps: { "aria-label": "Checkbox demo" } };

// const MaterialUISwitch = styledMui(Switch)(({ theme }) => ({
//   width: 62,
//   height: 34,
//   padding: 7,
//   "& .MuiSwitch-switchBase": {
//     margin: 1,
//     padding: 0,
//     transform: "translateX(6px)",
//     "&.Mui-checked": {
//       color: "#fff",
//       transform: "translateX(22px)",
//       "& .MuiSwitch-thumb:before": {
//         backgroundImage: `url('data:image/svg+xml;utf8,${IconSwitchMode}')`,
//       },
//       "& + .MuiSwitch-track": {
//         opacity: 1,
//         backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
//       },
//     },
//   },
//   "& .MuiSwitch-thumb": {
//     backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
//     width: 32,
//     height: 32,
//     "&:before": {
//       content: "''",
//       position: "absolute",
//       width: "100%",
//       height: "100%",
//       left: 0,
//       top: 0,
//       backgroundRepeat: "no-repeat",
//       backgroundPosition: "center",
//       backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
//         "#fff"
//       )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
//     },
//   },
//   "& .MuiSwitch-track": {
//     opacity: 1,
//     backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
//     borderRadius: 20 / 2,
//   },
// }));
const Login = () => {
  return (
    <StyledLogin>
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
            <p>Forgot password?</p>
          </div>
          <div className="btn">
            <div className="login">
              <button type="submit">LOGIN NOW</button>
            </div>
            <div className="login">
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
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;
