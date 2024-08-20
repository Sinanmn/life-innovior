import React from "react";
import "./WhyCountUs.css";
import { TiTick } from "react-icons/ti";
import writing from "../../../assets/images/writing.jpg";

const WhyCountUs = () => {
  const listData = [
    {
      title: "Expert & friendly co-operative team.",
    },
    {
      title: "Counseling friendly comfortable zone.",
    },
    {
      title: "Expert IT support for online counseling service.",
    },
    {
      title: "Easy Payment Method.",
    },
    {
      title: "Comfortable Timeframe for client.",
    },
    {
      title: "Free Monthly Feedback after counseling.",
    },
    {
      title: "Emergency over phone consultation.",
    },
    {
      title: "Emergency counseling support.",
    },
  ];
  return (
    <div className="whycountus-container">
      <div className="whycountus-left">
        <h4>why choose us</h4>
        <h1>Why to count us</h1>
        <p>
          We prioritize your mental health well-being and strive to create a
          safe and comfortable space for you to share and work through any
          challenges you may be facing.
        </p>
        <ul>
          {listData.map((item, index) => (
            <li key={index}>
              <div className="tick-box">
                <TiTick />
              </div>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="whycountus-right">
        <img src={writing} />
      </div>
    </div>
  );
};

export default WhyCountUs;
