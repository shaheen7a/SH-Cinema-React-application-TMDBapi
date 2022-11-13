import React from "react";
import "./PlanScreen.css";
import { useNavigate } from "react-router-dom";

function PlanScreen() {

  const history = useNavigate();

  return (
    <div className="planScreen">
      <div className="planScreen__plan">
        <div className="planScreen__info">
          <h5>Premium</h5>
          <h6>4K + HDR</h6>
        </div>
        <button
        onClick={() => history("/")}
        >
          Subscribe
        </button>
      </div>

      <div className="planScreen__plan">
        <div className="planScreen__info">
          <h5>Basic</h5>
          <h6>720p</h6>
        </div>
        <button
        onClick={() => history("/")}
        >
          Subscribe
        </button>
      </div>

      <div className="planScreen__plan">
        <div className="planScreen__info">
          <h5>Standard</h5>
          <h6>1080p</h6>
        </div>
        <button
        onClick={() => history("/")}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default PlanScreen;
