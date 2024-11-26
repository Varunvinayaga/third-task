import React from "react";
import './banner.css';

export default function Banner() {
    const button1 = {
        color: 'white',
        backgroundColor: 'rgb(255, 16, 96)',
    }
  return (
    <>
      <div className="main">
        <div className="title">
          <h1>you can</h1>
          <h1>hire freelancer</h1>
          <h1>here</h1>
        </div>
        <p className="subtitle">
          It is a long established fact that a read will be distracted by the
          readable content of a page
        </p>
        <div className="btn-div">
          <button style={button1}>About Us</button>
          <button>Get A Quote</button>
        </div>
      </div>
    </>
  );
}