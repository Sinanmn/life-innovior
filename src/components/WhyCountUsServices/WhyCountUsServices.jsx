import React from "react";
import "./WhyCountUsServices.css";
import { TiTick } from "react-icons/ti";
import writing from "../../assets/images/writing.jpg";

const WhyCountUs = ({pData}) => {
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
    <div className="whycountus-container-services">
      <div className="whycountus-left">
        <h4>why choose us</h4>
        <h1>Why to count us</h1>
        <p>
          {pData}
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
