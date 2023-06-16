import React from "react";
import { useHistory } from "react-router-dom";
export default function Details(props) {
  // const
  const history = useHistory();

  const onclickHandler = (event) => {
    props.onResertHandler();
    event.preventDefault();
    history.push("/");
  };

  return (
    <div className="container" style={{ color: "BROWN" }}>
      <h2 className="my-2 text-center">&#x2B50; Details &#x2B50;</h2>
      <div className="card border-success mb-3">
        <div
          className="card-header bg-transparent border-success"
          style={{ color: "#8a2be2" }}
        >
          Hello &#x1F44B; {props.name}
        </div>
        <div className="card-body text-success">
          <h5 className="card-title">Contact Number:</h5>
          <p className="card-text">{props.contactNumber}</p>
          <h5 className="card-title">Date of birth:</h5>
          <p className="card-text">{props.dob}</p>
          <h5 className="card-title">Gender:</h5>
          <p className="card-text">
            {props.gender}
            <strong>{props.gender === "male" ? "\u2642" : "\u2640"}</strong>
          </p>
          <h5 className="card-title">Email Address:</h5>
          <p className="card-text">{props.email}</p>
          <h5>About : </h5>
          <p>{props.text}</p>
        </div>
      </div>
      <div>
        <button className="btn btn-primary" onClick={onclickHandler}>
          Home
        </button>
      </div>
    </div>
  );
}
