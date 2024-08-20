import React from "react";
import "./MeetTheTeam.css";
import sir1 from "../../../assets/images/kahafil.jpg";
import sir2 from "../../../assets/images/Tasnim.jpg";
import sir3 from "../../../assets/images/Rifat.jpg";
import sir4 from "../../../assets/images/Jumur.jpg";
import { FaFacebookF,FaTwitter,FaPinterest  } from "react-icons/fa";


const MeetTheTeam = () => {
  const Teamdatas = [
    {
      src: sir2,
      name: "Tasnim Ora",
      designation: "Chief Psychologist",
    },
    {
      src: sir1,
      name: "Kahafil Ora",
      designation: "CEO",
    },
    {
      src: sir3,
      name: "Murshidul Haque",
      designation: "Manager",
    },
    {
      src: sir4,
      name: "Jhumur Chakma",
      designation: "HR and Accounts",
    },
  ];
  return (
    <div className="meettheteam-container pd">
      <h4>meet the team</h4>
      <h1>Management & Operations Team</h1>
      <div className="teachers-container">
        {Teamdatas.map((item, index) => (
          <div className="sir">
            <img src={item.src} />
            <div className="likha">
              <p>{item.name}</p>
              <span>{item.designation}</span>

            <div className="social_icons">
                <div className="social_icons-gol"><FaFacebookF /></div>
                <div className="social_icons-gol"><FaTwitter /></div>
                <div className="social_icons-gol"><FaPinterest /></div>
            </div>


            </div>
            <div className="overlay"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
