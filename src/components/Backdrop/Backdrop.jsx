import React from "react";
import "./Backdrop.css";

const Backdrop = ({ closeModel }) => {
  return (
    <div
      onClick={() => {
        closeModel();
      }}
      className="Backdrop"
    />
  );
};

export default Backdrop;
