import React from "react";
import "./index.css";

const Pane = () => {
  return (
    <>
      <div className="home-container">
        <div className="row">
          <div className="h-heading1">
            <h1>Todo</h1>
          </div>
          <div className="titles">
            Todo content titles
          </div>
          <div className="content">
                Content
          </div>
        </div>
        <div className="row">
          <div className="h-heading2">
            <h1>On Progress </h1>
          </div>
          <div className="titles">
            On Progress titles
          </div>
          <div className="content">
                Content
          </div>
        </div>
        <div className="row">
          <div className="h-heading3">
            <h1>Review</h1>
          </div>
          <div className="titles">
            Review  titles
          </div>
          <div className="content">
                Content
          </div>
        </div>
        <div className="row">
          <div className="h-heading4">
            <h1>Done</h1>
          </div>
          <div className="titles">
            Done titles
          </div>
        <div className="content">
                Content
          </div>
        </div>
      </div>
    </>
  );
};

export default Pane;
