import React from "react";
import Form from "../layout/Form.js";
import Button from "../layout/button/Button.js";

const onSubmitHandler = (e) => {
  e.preventDefault();
};

const AddUser = () => {
  return (
    <div>
      <Form onSubmit={onSubmitHandler}>
        <Form.Controller>
          <div class="form-group row mb-2">
            <label for="inputName" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Name"
              />
            </div>
          </div>
          <div class="form-group row mb-2">
            <label for="inputAddess" className="col-sm-2 col-form-label">
              Address
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputAddess"
                placeholder="beirut-lebanon"
              />
            </div>
          </div>
          <div class="form-group row mb-2">
            <label for="inputPhone" className="col-sm-2 col-form-label">
              Phone
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputPhone"
                placeholder="03xxxxxx"
              />
            </div>
          </div>
          <div class="form-group row mb-2">
            <label for="inputGender" className="col-sm-2 col-form-label">
              Phone
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputGender"
                placeholder="03xxxxxx"
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10 offset-sm-2">
              <Button type="submit" className="btn btn-primary">
                Create
              </Button>
            </div>
          </div>
        </Form.Controller>
      </Form>
    </div>
  );
};

export default AddUser;
