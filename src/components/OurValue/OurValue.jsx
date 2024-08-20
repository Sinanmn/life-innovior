import React from "react";
import "./OurValue.css";
import { FaRegCompass } from "react-icons/fa6";
import { BiTargetLock } from "react-icons/bi";
import { CiStopwatch } from "react-icons/ci";
import Box from "../Box/Box";

const OurValue = ({ bg_url }) => {
  const ourValueStyle = {
    backgroundImage: `url(${bg_url})`,
  };
  const boxData = [
    {
      icon: <FaRegCompass />,
      title: "Mission",
      description:
        "In order to make a better world by destroying mental health related taboo as well as rising mental health awareness to society.",
    },
    {
      icon: <BiTargetLock />,
      title: "Vision",
      description:
        "To ensure a happy & peaceful life for each individual and the community by providing the expertise guideline.",
    },
    {
      icon: <CiStopwatch />,
      title: "Principles",
      description:
        "High reliability and secrecy are priorities for us. We show our clients that we regard them by paying close attention to what they want to say.",
    },
  ];

  return (
    <div className="ourvalue_container layer pd" style={ourValueStyle}>
      <div className="ourvalue_menu ">
        <h4>OUR VALUE</h4>
        <h1>Quality care from quality experts.</h1>
        {boxData.map((item, index) => (
          <Box
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          ></Box>
        ))}
      </div>
    </div>
  );
};

export default OurValue;
