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

const Modal = ({ show, close}) => {
    //newRecord(
    //document.getElementById("inputName").value
    // document.getElementById("inputAddess"),
    // document.getElementById("inputPhone"),
    // document.getElementById("inputGender")
    //);
  return (
    <Fragment>
      {createPortal(
        <fragment>
          <div
            className={`backDrop ${show ? "backDrop-showing" : null}`}
            onClick={close}
          ></div>
          <div className={`overLay ${show ? "overLay-showing" : null}`}>
            <AddUser/>
          </div>
        </fragment>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Modal;
