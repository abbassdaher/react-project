import React, { useState } from "react";
import Form from "../layout/Form.js";
import Button from "../layout/button/Button.js";

const AddUser = () => {
  //   const [input, setInput] = useState({
  //     name: "",
  //     address: "",
  //     phone: "",
  //     gender: "",
  //   });
  /**
   * The inputHandler function updates the input state with the value of the input field that triggered
   * the event.
   * @param e - The parameter `e` is an event object that is passed to the `inputHandler` function. It
   * represents the event that triggered the function, such as a user input event like typing in an
   * input field or clicking a button.
   */
  //   const inputHandler = (e) => {
  //     const key = e.target.id;
  //     const value = e.target.value;
  //     setInput({ ...input, [key]: value});
  //   };

  const [name, setName] = useState("");
  const [address, setAdress] = useState("");
  const [phone, setphone] = useState("");
  const [gender, setgender] = useState("");
 
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(input);
    console.log(name,address,phone,gender);
  };
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
                id="name"
                placeholder="Name"
                // value={input.name}
                // onChange={inputHandler}
                onChange={(e)=>{setName(e.target.value)}}
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
                id="address"
                placeholder="beirut-lebanon"
                // onChange={inputHandler}
                onChange={(e)=>{setAdress(e.target.value)}}
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
                id="phone"
                placeholder="03xxxxxx"
                // onChange={inputHandler}
                onChange={(e)=>{setphone(e.target.value)}}
              />
            </div>
          </div>
          <div class="form-group row mb-2">
            <label for="inputGender" className="col-sm-2 col-form-label">
              Gender
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="gender"
                placeholder="male/female"
                // onChange={inputHandler}
                onChange={(e)=>{setgender(e.target.value)}}
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
