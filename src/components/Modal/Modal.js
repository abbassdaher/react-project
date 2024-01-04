import React, { Fragment } from "react";
import "./Modal.css";
import { createPortal } from "react-dom";
import Form from "../layout/Form.js";

const Modal = ({ show, close }) => {
  return (
    <Fragment>
      {createPortal(
        <fragment>
          <div
            className={`backDrop ${show ? "backDrop-showing" : null}`}
            onClick={close}
          ></div>
          <div className={`overLay ${show ? "overLay-showing" : null}`}>
            <Form>
              <Form.Controller>
              <div class="form-group row mb-2">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3 "
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10 offset-sm-2">
                  <button type="submit" className="btn btn-primary">
                    Create
                  </button>
                </div>
              </div>
              </Form.Controller>
            </Form>
          </div>
        </fragment>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Modal;
