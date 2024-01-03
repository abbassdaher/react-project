import React, { Fragment } from "react";
import { ReactDOM } from "react";
import "./Modal.css";
import { createPortal } from "react-dom";

const Modal = ({ show, close }) => {
  return (
    <Fragment>
      {createPortal(
        <fragment>
          <div
            className={`backDrop ${show ? "backDrop-showing" : null}`}
            onClick={close}
          ></div>
          <div className={`overLay ${show ? "overLay-showing":null}`}></div>
        </fragment>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Modal;
