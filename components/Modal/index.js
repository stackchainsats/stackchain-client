import React from "react";
import styled from "styled-components";
import Button from "../Button";

const ModalStyles = styled.div`
  z-index: 50;
  position: fixed;
  background-color: white;
  width: 400px;
  border-radius: 8px;
  box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%),
    0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  transition: all 0.3s ease-out;

  & .header {
    padding: 18px 18px 18px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & h1 {
      font-size: 20px;
      line-height: 24px;
      margin: 0;
    }
  }
  & .body {
    padding: 0 24px;
  }
  & .footer {
    padding: 24px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & button {
      margin-left: 16px;
    }
  }
`;

const BackdropStyles = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 25;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = ({
  showModal,
  headerTitle,
  bodyContent,
  submitText,
  onSubmit,
  onClose,
  submitting,
  submitDisabled = false,
  showCancelButton = true,
}) => {
  return (
    <div className={showModal ? "show" : ""}>
      {showModal && <BackdropStyles onClick={onClose}></BackdropStyles>}
      <ModalStyles
        style={{
          opacity: showModal ? "1" : "0",
          zIndex: showModal ? 99999 : -5,
        }}
      >
        <div className="header">
          <h1>{headerTitle}</h1>
          <Button variation="icon" onClick={onClose}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
            </svg>
          </Button>
        </div>
        <div className="body">{bodyContent}</div>
        <div className="footer">
          {showCancelButton && (
            <Button onClick={onClose} variation="secondary">
              Close
            </Button>
          )}
          <Button
            onClick={onSubmit}
            variation="primary"
            disabled={submitDisabled}
            showLoader={submitting}
          >
            {submitText}
          </Button>
        </div>
      </ModalStyles>
    </div>
  );
};

export default Modal;
