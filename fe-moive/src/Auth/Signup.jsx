import { styled } from "styled-components";
import logo from "../assets/img/M logo 1.png";

const StyledSignup = styled.div``;

const Signup = () => {
  return (
    <StyledSignup>
      <div className="headerLogo">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h5>Register</h5>
      </div>
      <div className="formSingup">
        <form action="">
          <div className="inputSignup">
            <input type="text" id="email" name="email" placeholder="Name" />
          </div>
          <div className="inputSignup">
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Email"
            />
          </div>
          <div className="inputSignup">
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="inputSignup">
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Comfirm password"
            />
          </div>
          <div className="btnSignupPage">
            <div className="signupPage">
              <button type="submit">Create account</button>
              <p>
                By clicking “Create Account” you agree to our <b>terms</b> and <b>privacy
                policy.</b>
              </p>
            </div>
          </div>
        </form>
      </div>
    </StyledSignup>
  );
};

export default Signup;
