import React, { Fragment } from "react";
import { ReactDOM } from "react";
import "./Modal.css";
import { createPortal } from "react-dom";

const Modal = ({show}) => {
  return (
    show &&
    <Fragment>
      {createPortal(
        <fragment>
          <div className="backDrop"></div>
          <div className="overLay"></div>
        </fragment>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Modal;
