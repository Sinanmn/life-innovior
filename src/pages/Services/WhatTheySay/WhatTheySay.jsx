import React from "react";
import "./WhatTheySay.css";
import placeholder from "../../../assets/images/placeholder.png";
import { LuQuote } from "react-icons/lu";

const WhatTheySay = () => {
  const sayingsData = [
    {
      text: "Ut aenean ipsum pharetra risus ultricies rhoncus imperdiet. Tempor velit nullam blandit leo aliquet vulputate habitasse tincidunt. Dictumst placerat ac donec curabitur ante integer natoque sed lacus lorem vel. Pretium ut dapibus lobortis orci pharetra auctor lacinia nec accumsan a.",
      testimonial: "Testimonial#1",
      designation: "Student",
    },
    {
      text: "Ut aenean ipsum pharetra risus ultricies rhoncus imperdiet. Tempor velit nullam blandit leo aliquet vulputate habitasse tincidunt. Dictumst placerat ac donec curabitur ante integer natoque sed lacus lorem vel. Pretium ut dapibus lobortis orci pharetra auctor lacinia nec accumsan a.",
      testimonial: "Testimonial#2",
      designation: "Teacher",
    },
  ];

  return (
    <div className="whattheysay-container pd">
      <h4>Testimonials</h4>
      <h1>What They Say About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <div className="sayings-card-container">
        {sayingsData.map((item, index) => (
          <div className="sayings-card">
            <p>{item.text}</p>
            <div className="niche">
              <div className="niche-baame">
                <img src={placeholder} />
                <div className="likha">
                  <p className="a">{item.testimonial}</p>
                  <p className="b">{item.designation}</p>
                </div>
              </div>

              <LuQuote className="icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatTheySay;
