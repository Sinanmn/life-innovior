import React from "react";
import "./IfYouCanLaugh.css";
import kandhe from "../../../assets/images/kandhe.jpg";

const IfYouCanLaugh = () => {
  return (
    <div className="ifyoucanlaugh-container pd">
      <div className="ifyoucanlaugh-container-bam">
        <h1>If you can laugh together, you can work together</h1>
        <p>
          Choose a healthier lifestyle with our expert guidance and support.
          We’ll help you achieve a healthier you through personalized plans and
          programs.
        </p>

        <div className="full">
          <div className="a">
            <div className="top1">
              <p>Personal Solve</p>
              <div className="progress">97%</div>
            </div>
            <div className="shada">
              <div className="rong"></div>
            </div>
          </div>
          <div className="a">
            <div className="top2">
              <p>Personal Solve</p>
              <div className="progress">84%</div>
            </div>
            <div className="shada">
              <div className="rong"></div>
            </div>
          </div>
          <div className="a">
            <div className="top3">
              <p>Personal Solve</p>
              <div className="progress">91%</div>
            </div>
            <div className="shada">
              <div className="rong"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="ifyoucanlaugh-container-dan">

      <img src={kandhe} />
      <div className='ifyoucanlaugh-container-dan-right-box'>
          <h1>1K+</h1>
          <p>Happy Client</p>
          </div>
      </div>
    </div>
  );
};

export default IfYouCanLaugh;
