import React from "react";
import "./Form.css";

import { useHistory } from "react-router-dom";

export default function Form(props) {
  const history = useHistory();

  const onChangeHandler = (event) => {
    props.setText(event.target.value);
  };

  const onNameChangeHandler = (event) => {
    let name2 = event.target.value;
    props.ToggleName(name2);
  };

  const onchangeContactNumberHandler = (event) => {
    props.setContactNumber(event.target.value);
  };

  const emailChangeHandler = (event) => {
    props.setEmail(event.target.value);
  };

  const onsubmitHandler = (event) => {
    event.preventDefault();
    history.push("/details");
  };

  const ondobHandler = (event) => {
    props.setDob(event.target.value);
  };

  const handlerGender = (event) => {
    props.toggleGender(event.target.value);
  };

  return (
    <div className="container">
      <h2 className="my-2 text-center">&#x2B50; Enter Your Details &#x2B50;</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control my-2"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Enter you name"
            value={props.name}
            onChange={onNameChangeHandler}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            className="form-control my-2"
            id="dob"
            name="dob"
            value={props.dob}
            onChange={ondobHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <div className="form-check">
            <input
              className="form-check-input my-2"
              type="radio"
              value="male"
              id="male"
              name="gender"
              onClick={handlerGender}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="female"
              id="female"
              name="gender"
              onClick={handlerGender}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>
        <div className="form-group my-2">
          <label htmlFor="contact" className="my-2">
            Contact Number
          </label>
          <input
            type="number"
            className="form-control"
            id="contact"
            placeholder="Enter your contact number "
            autoComplete="off"
            value={props.contactNumber}
            onChange={onchangeContactNumberHandler}
          />
        </div>
        <div className="mb-3 my-2">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            autoComplete="off"
            placeholder="Enter your email address"
            value={props.email}
            onChange={emailChangeHandler}
          />
        </div>
        <div className="mb-3 my-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your strong password"
          />
        </div>
        <p>About Yourself</p>
        <div className="textclassprimary">
          <textarea
            className="textareaprimary"
            id=""
            cols="173"
            rows="10"
            value={props.text}
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <div className="my-2" id="buttonprimary">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={onsubmitHandler}
          >
            Submit
          </button>
          <button
            type="reset"
            className="btn btn-primary mx-2"
            onClick={props.onResertHandler}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
