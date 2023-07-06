import * as React from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "styled-components";
import logo from "../assets/img/M logo 1.png";

import { useState } from "react";


const StyledStepOne = styled.div``;
const StyledStepTwo = styled.div``;
const StyledStepThree = styled.div``;
const StyledLineOne = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  width: 100%;
  .one {
    height: 0.5em;
    width: 20%;
    border-radius: 0.5em;
    background-color: aliceblue;
  }
  .two {
    height: 0.5em;
    width: 20%;
    border-radius: 0.5em;
    background-color: green;
  }
  .three {
    height: 0.5em;
    width: 20%;
    border-radius: 0.5em;
    background-color: green;
  }
`;
const StyledLineTwo = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  width: 100%;
  .one {
    height: 0.5em;
    width: 20%;
    border-radius: 0.5em;
    background-color: green;
  }
  .two {
    height: 0.5em;
    width: 20%;
    border-radius: 0.5em;
    background-color: aliceblue;
  }
  .three {
    height: 0.5em;
    width: 20%;
    border-radius: 0.5em;
    background-color: green;
  }
`;
const StyledLineThree = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  width: 100%;
  .one {
    height: 0.5em;
    width: 20%;
    border-radius: 0.5em;
    background-color: green;
  }
  .two {
    height: 0.5em;
    width: 20%;
    border-radius: 0.5em;
    background-color: green;
  }
  .three {
    height: 0.5em;
    width: 20%;
    border-radius: 0.5em;
    background-color: aliceblue;
  }
`;

const ForgotStepOne = () => {
  return (
    <StyledStepOne>
      <label htmlFor="email">Email address</label>
      <div className="inputSignup">
        <input type="text" id="email" name="email" placeholder="Email" />
      </div>
    </StyledStepOne>
  );
};

const numOfFields = 4;

const useSSNFields = () => {
  const [ssnValues, setValue] = React.useState({
    ssn1: "",
    ssn2: "",
    ssn3: "",
    ssn4: "",
  });

  return {
    handleChange: (e) => {
      const { maxLength, value, name } = e.target;
      const [fieldName, fieldIndex] = name.split("-");

      // Check if they hit the max character length
      if (value.length >= maxLength) {
        // Check if it's not the last input field
        if (parseInt(fieldIndex, 10) < 4) {
          // Get the next input field
          const nextSibling = document.querySelector(
            `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
          );

          // If found, focus the next field
          if (nextSibling !== null) {
            nextSibling.focus();
          }
        }
      }

      setValue({
        ...value,
        [`ssn${fieldIndex}`]: value,
      });
    },
  };
};

const ForgotStepTwo = () => {
  const { handleChange } = useSSNFields();

  return (
    <StyledStepTwo>
      <label htmlFor="email">Password reset</label>
      <p>We sent a code to yourmail@gmail.com</p>
      <div className="inputCode">
        <input
          type="text"
          id="code"
          name="ssn-1"
          maxLength={1}
          onChange={handleChange}
        />
        <input
          type="text"
          id="code"
          name="ssn-2"
          maxLength={1}
          onChange={handleChange}
        />
        <input
          type="text"
          id="code"
          name="ssn-3"
          maxLength={1}
          onChange={handleChange}
        />
        <input
          type="text"
          id="code"
          name="ssn-4"
          maxLength={1}
          onChange={handleChange}
        />
      </div>
    </StyledStepTwo>
  );
};

// form validation rules 
// const validationSchema = Yup.object().shape({
//     password: Yup.string()
//         .required('Password is required')
//         .min(6, 'Password must be at least 6 characters'),
//     confirmPassword: Yup.string()
//         .required('Confirm Password is required')
//         .oneOf([Yup.ref('password')], 'Passwords must match')
        
// });
// const formOptions = { resolver: yupResolver(validationSchema) };

// // get functions to build form with useForm() hook
// const { register, handleSubmit, reset, formState } = useForm(formOptions);
// const { errors } = formState;
// const onSubmit = (data) => {
//     // display form data on success
//     alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
//     return false;
// }
const ForgotStepThree = () => {
  return (
    <StyledStepThree>
      <label htmlFor="email">Set new password</label>
      <div className="inputNewPassword">
        <input
          type="text"
          id="password"
          name="password"
        //   {...register('password')}
        //   className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          placeholder="**********"
        />
        {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
      </div>
      <label htmlFor="email">Comfirm new password</label>
      <div className="inputNewPassword">
        <input
          type="text"
          id="password"
          name="confirmPassword"
        //   {...register('confirmPassword')}
        //   className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
          placeholder="**********"
        />
        {/* <div className="invalid-feedback">{errors.confirmPassword?.message}</div> */}
      </div>
    </StyledStepThree>
  );
};

const LineOne = () => {
  return (
    <StyledLineOne>
      <div className="one"></div>
      <div className="two"></div>
      <div className="three"></div>
    </StyledLineOne>
  );
};
const LineTwo = () => {
  return (
    <StyledLineTwo>
      <div className="one"></div>
      <div className="two"></div>
      <div className="three"></div>
    </StyledLineTwo>
  );
};
const LineThree = () => {
  return (
    <StyledLineThree>
      <div className="one"></div>
      <div className="two"></div>
      <div className="three"></div>
    </StyledLineThree>
  );
};

const steps = ["", "", ""];

const StyledForgotLayout = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const ForgotPassword = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <StyledForgotLayout>
      <div className="headerLogo">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h5>Forgot Password?</h5>
        <p>No worries, we'll send you reset instructions.</p>
      </div>
      {/* step forgot */}
      <Box sx={{ width: "100%" }}>
        <div>
          {/* All completed */}
          {allStepsCompleted() ? (
            <>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </>
          ) : (
            // if not completed
            <>
              <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                <div className="formForgotPassword">
                  <form action=""
                //    onSubmit={handleSubmit(onSubmit)}
                   >
                    {activeStep == 0 ? (
                      <ForgotStepOne />
                    ) : activeStep == 1 ? (
                      <ForgotStepTwo />
                    ) : (
                      <ForgotStepThree />
                    )}
                    <Box sx={{ flex: "1 1 auto" }} />
                    {activeStep !== steps.length && (
                      <Button onClick={handleComplete} type="submit">
                        {completedSteps() === totalSteps() - 1
                          ? "Finish"
                          : "Continue"}
                      </Button>
                    )}
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                  </form>
                  {activeStep == 0 ? (
                    <LineOne />
                  ) : activeStep == 1 ? (
                    <LineTwo />
                  ) : (
                    <LineThree />
                  )}
                </div>
              </Typography>
            </>
          )}
        </div>
      </Box>
    </StyledForgotLayout>
  );
};

export default ForgotPassword;
