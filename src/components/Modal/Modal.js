import React, { Fragment, useState } from "react";
import "./Modal.css";
import { createPortal } from "react-dom";
import Form from "../layout/Form.js";
import Button from "../layout/button/Button.js";
import AddUser from "../AddUser/AddUser.js";

// const newRecordHandler = (name, address, phone, gender) => {
//     setRecord((prevState) => {
//         return {
//             name: name,
//             address: address,
//             phone: phone,
//             gender: gender,
//         };
//     });
// };

const Modal = ({ show, close, newRecordHandler,length }) => {
  const getNewRecordHandler = (name, address, phone, gender) => {
    return { name, address, phone, gender };
  };
  return (
    <Fragment>
      {createPortal(
        <Fragment>
          <div
            className={`backDrop ${show ? "backDrop-showing" : null}`}
            onClick={close}
          ></div>
          <div className={`overLay ${show ? "overLay-showing" : null}`}>
            <AddUser newRecordHandler={newRecordHandler} length={length}/>
          </div>
        </Fragment>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Modal;
