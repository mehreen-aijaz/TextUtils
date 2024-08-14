import React from "react";

export default function About() {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src="favicon.ico" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">About TextuUtils</h5>
          <p className="card-text">
            TextUtils is a versatile web application designed to enhance your
            text processing and analysis tasks. Whether you're looking to count
            words and characters, measure reading time, or simply format your
            text.
          </p>
          <a href="/home" className="btn btn-primary">
            Back To Home
          </a>
        </div>
      </div>
    </>
  );
}
