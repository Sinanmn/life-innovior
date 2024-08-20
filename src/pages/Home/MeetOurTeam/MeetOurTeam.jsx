import React from "react";
import "./MeetOurTeam.css";
import team1 from "../../../assets/images/p1.jpg";
import team2 from "../../../assets/images/p2.jpg";
import team3 from "../../../assets/images/p3.jpg";
import team4 from "../../../assets/images/p4.jpg";
import team5 from "../../../assets/images/p5.jpg";
import Button from "../../../components/Button/Button"
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom"


const MeetOurTeam = () => {
  const chobiData = [
    {
      src: team1,
      name: "Abu Sayed",
      title: "Student",
    },
    {
      src: team2,
      name: "Rahima",
      title: "Student",
    },
    {
      src: team3,
      name: "Pitom",
      title: "Lawyer",
    },
    {
      src: team4,
      name: "Salma",
      title: "Student",
    },
    {
      src: team5,
      name: "Farhan",
      title: "Student",
    },
  ];

  return (
    <div className="meetourteam_container pd">
      <h1>
        The professional, licensed, and vetted Psychologist who you can trust
      </h1>

      <div className="chobi-container">
        {chobiData.map((item, index) => (
          <div className="chobi" key={index}>
            <img src={item.src} />
            <h3>{item.name}</h3>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <Link to="/team" className ="link"><Button text="Meet our team" icon={<FaLongArrowAltRight />
}></Button>
</Link>
    </div>
  );
};

export default MeetOurTeam;
