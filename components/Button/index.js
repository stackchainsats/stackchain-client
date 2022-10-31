import React from "react";
import styled from "styled-components";
import Loader from "../Loader";
import ButtonLoader from "./buttonLoader";

const Button = ({
  children,
  onClick,
  disabled,
  variation = "secondary",
  showLoader = false,
}) => {
  return (
    <ButtonStyles className={variation} onClick={onClick} disabled={disabled}>
      {children}
      {showLoader && (
        <div style={{ marginLeft: "10px" }}>
          <ButtonLoader />
        </div>
      )}
    </ButtonStyles>
  );
};

const ButtonStyles = styled.button`
    color: #323233;
    font-size: 15px;
    line-height: 20px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-weight: 600;
    padding: 7px 15px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;

    &.secondary {
        background-color: #fff;
        border: 1px solid #B8B8B8;
    }
    &.primary {
      background-color: #0C6FF9;
      color: #fff;
      border: none;
    }
    &.black {
      background-color: rgb(33, 43, 54);
      color: #fff;
      border: none;
    }
    &.blue {
      background-color: #0C6FF9;
      color: #fff;
      border: none;
    }
    &.green {
      background-color: rgb(0, 171, 85);
      color: #fff;
      border: none;
    }
    &.icon {
        background: #fff;
        border: none;
        font-size: 24px;
        display: flex;
        align-items: center;
        padding: 6px;
        background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }
    &.icon:hover {
        background-color: #F2F2F2;
    }
    &:disabled {
        background-color: #f7f7f7;
        color: #ccc;
    }
`;

export default Button;
