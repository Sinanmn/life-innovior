import React, { useState } from "react";
import "./CareerComponent.css";
import { FaArrowRightLong } from "react-icons/fa6";

const CareerComponent = () => {

    const[more, setMore] = useState(6)

  const shobData = [
    {
      t1: "Child Psychologist",
      t2: "Dhaka",
    },
    {
      t1: "Industrial and Organizational Psychologist",
      t2: "Khulna",
    },
    {
      t1: "Clinical Psychologist",
      t2: "Kumilla",
    },
    {
      t1: "Counselling Psychologist",
      t2: "Dhaka",
    },
    {
      t1: "Psychological Counselor",
      t2: "Dhaka",
    },
    {
      t1: "Psychologist",
      t2: "Dhaka",
    },
    {
      t1: "Psychotherapist",
      t2: "Dhaka",
    },
    {
      t1: "Paid Internship",
      t2: "Dhaka",
    },
    {
      t1: "Child Psychologist",
      t2: "Dhaka",
    },
    {
      t1: "Psychological Counselor",
      t2: "Dhaka",
    },
    {
      t1: "Child Psychologist",
      t2: "Dhaka",
    },
    {
      t1: "Industrial and Organizational Psychologist",
      t2: "Khulna",
    },
    {
      t1: "Clinical Psychologist",
      t2: "Kumilla",
    },
    {
      t1: "Counselling Psychologist",
      t2: "Dhaka",
    },
    {
      t1: "Psychological Counselor",
      t2: "Dhaka",
    },
  ];

  return (
    <div
      className="careercomponent-container"
      style={{ padding: "100px 140px", lineHeight: "1.6" }}
    >
      <p>
        You can identify your strengths and interests, develop your skills, and
        overcome any challenges. Moreover, we’re promised to find a career
        opportunities in mental health service that’s right for you.
        Furthermore, we help you thrive at work and in your career.
      </p>
      <div className="shob">
        {shobData.slice(0,more).map((item, index) => (
          <div className="shob-card" key={index}>
            <p>{item.t1}</p>
            <small>{item.t2}</small>
            <span>
              More Details <FaArrowRightLong />
            </span>
          </div>
        ))}
      </div>

        {more < shobData.length &&(<div className="loding"  onClick={()=> setMore(shobData.length)}>Load More...</div>)}
      
    </div>
  );
};

export default CareerComponent;
