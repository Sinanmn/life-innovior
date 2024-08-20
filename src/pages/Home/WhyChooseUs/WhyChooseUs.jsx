import React from "react";
import "./WhyChooseUs.css";
import { FaUserDoctor } from "react-icons/fa6";
import { PiBrain } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { GiHumanTarget } from "react-icons/gi";
import { FaHeartPulse } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { GiMedicinePills } from "react-icons/gi";
import { MdGroups } from "react-icons/md";
import { MdFamilyRestroom } from "react-icons/md";
import { GiBrokenHeartZone } from "react-icons/gi";

const WhyChooseUs = () => {
  const golData = [
    {
      icon: <FaUserDoctor />,
      title: "Psycotherapy",
    },
    {
      icon: <PiBrain />,
      title: "Mindfulness",
    },
    {
      icon: <CiGlobe />,
      title: "Relaxation therapy",
    },
    {
      icon: <GiHumanTarget />,
      title: "Behavioral therapy",
    },
    {
      icon: <FaHeartPulse />,
      title: "Relationship therapy",
    },
    {
      icon: <RxAvatar />,
      title: "Dialectical behavioral therapy",
    },
    {
      icon: <GiMedicinePills />,
      title: "Transpersonal psychology",
    },
    {
      icon: <MdGroups />,
      title: "Counseling or talking therapy",
    },
    {
      icon: <MdFamilyRestroom />,
      title: "Parent- Child interaction therapy",
    },
    {
      icon: <GiBrokenHeartZone />,
      title: "Interpersonal therapy",
    },
  ];
  return (
    <div className="whychooseus_container pd">
      <h4>Why choose us</h4>
      <h1>Counseling Approaches</h1>
      <div className="Gol_container">
        {golData.map((item, index) => (
          <div className="gol-text" key={index}>
            <div className="gol">{item.icon}</div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
