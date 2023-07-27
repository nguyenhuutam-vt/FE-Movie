import styled from "styled-components";
import "../BillingPlan/index.css";
import { useState } from "react";
const Container = styled.div`
  background-color: red;
  width: 25%;
  position: absolute;
  border-radius: 10px;
  padding: 30px;
  justify-content: center;
  flex-direction: column;
`;
const Header = styled.header`
  font-size: 34px;
`;
const Button = styled.button`
  padding: 10px 20px;
  background-color: #1b0301;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
const Body = styled.body`
  position: absolute;
`;
const Price = styled.div`
  font-size: 50px;
`;
const BillingPlan = () => {
  return (
    <Body className="modal">
      <button>Close</button>
      <div className="form">
        <div className="banner"></div>
        <Header className="title">UPGRADE TO PREMIUM</Header>
        <div className="tab-container">
          <button className="tab tab--1">Monthly</button>
          <button className="tab tab--2">Annual</button>
          <div className="indicator"></div>
        </div>

        <div className="benefits">
          <span>What we offer</span>
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
                height="16"
                width="16"
              >
                <rect fill="black" rx="8" height="16" width="16"></rect>
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  stroke="white"
                  d="M5 8.5L7.5 10.5L11 6"
                ></path>
              </svg>
              <span>Access more TV shows and movies.</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
                height="16"
                width="16"
              >
                <rect fill="black" rx="8" height="16" width="16"></rect>
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  stroke="white"
                  d="M5 8.5L7.5 10.5L11 6"
                ></path>
              </svg>
              <span>Change or cancel your plan anytime.</span>
            </li>
          </ul>
        </div>
        <div className="modal--footer">
          <label className="price">
            <sup>Only</sup>59.000<sub>VND</sub>
          </label>
          <button className="upgrade-btn">Upgrade to PREMIUM</button>
        </div>
      </div>
    </Body>
  );
};

export default BillingPlan;
