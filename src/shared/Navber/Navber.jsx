import React from "react";
import "./Navber.css";
import Logo from "../../assets/images/logo.png";
import Button from "../../components/Button/Button.jsx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import sofa2 from "../../assets/images/sofa2.jpg";
import chair from "../../assets/images/chair.jpg";
import building from "../../assets/images/building.jpg";
import ghum from "../../assets/images/ghum.jpg";
import Card from "../../components/Card/Card.jsx";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";


const Navber = () => {

  const [on, setOn] = useState(false); 
 
  const [service, setService] = useState(false);

  const toggleService = () => {
    setService(!service);  
  };

  const toggleOn = () => {
    setOn(!on);  
  };
 

  const A1 = () => {
    setIsActive("/");
    toggleOn();
  };
  const A2 = () => {
    setIsActive("/about");
    toggleOn();
  };
  const A3 = () => {
    setIsActive("/team");
    toggleOn();
  };
  const A4 = () => {
    setIsActive("/career");
    toggleOn();
  };
  const A5 = () => {
    setIsActive("/contact");
    toggleOn();
  };
  const A6 = () => {
    setIsActive("/getAppoinment");
    toggleOn();
  };
  const A7 = () => {
    setIsActive("/blog");
    toggleOn();
  };
 
 
  const [isHovered, setIsHovered] = useState(false);

  const [isActive, setIsActive] = useState("");

  const cardData = [
    {
      src: sofa2,
      text: "Counselling",
    },
    {
      src: chair,
      text: "Corporate Service",
    },
    {
      src: building,
      text: "Child Development",
    },
    {
      src: ghum,
      text: "Rehabilitation from Addiction",
    },
  ];

  return (
    <div className="navber pd">
      <div className="navber-logo">
        <img src={Logo} alt="" />
        {on && <div className="side-menu">
          <div className="side-menu-2">
            <div className="side-menu-top">
              <img src={Logo} />
              <div className="side-menu-top-menu" onClick={toggleOn}><ImCancelCircle />
              </div>
            </div>

            <ul>
            <li onClick={A1}  className={`${isActive == "/" && "active"}`}><Link className="link" to="/">Mental Health Services</Link></li>
            <li onClick={A2}  className={`${isActive == "/about" && "active"}`}><Link className="link" to="/about">About Us</Link></li>
            <li><div className="ss" onClick={toggleService}>
            Services <div className="sso"><IoMenu /></div></div></li>
            {service && <div className="vetore">

              <ul>
              <li>Counseling</li>
              <li>Corporate Service</li>
              <li>Child Development</li>
              <li>Rehabilitation From Addiction</li>
              </ul>


            </div>}
            <li onClick={A3}  className={`${isActive == "/team" && "active"}`}><Link to="/team" className="link">Team</Link></li>
            <li onClick={A4}  className={`${isActive == "/career" && "active"}`}><Link to="/career" className="link">Career</Link></li>
            <li onClick={A5}  className={`${isActive == "/contact" && "active"}`}><Link to="/contact" className="link">Contact Us</Link></li>
            <li onClick={A6}  className={`${isActive == "/getAppoinment" && "active"}`}><Link
          onClick={() => setIsActive("/getAppoinment")}
          to="/getAppoinment"
          className="link"
        >Get Appoinment</Link></li>
            <li onClick={A7}  className={`${isActive == "/blog" && "active"}`}><Link to="/blog" className="link">Blog</Link></li>
            </ul>
          
            

          </div>
        </div>
        }

      </div>
      <div className="navber-links">
        <ul>

          {/* ----------------------------------------------- */}
          <li
            onClick={() => setIsActive("/")}
            className={`${isActive == "/" && "active"}`}
          >
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li
            onClick={() => setIsActive("/about")}
            className={`${isActive == "/about" && "active"}`}
          >
            <Link className="link" to="/about">
              About Us
            </Link>
          </li>
          <li
            onClick={() => setIsActive("/services")}
            className={`dropdown ${isActive == "/services" ? "active" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link className="link" to="/services">
              Services
            </Link>
            <RiArrowDropDownLine className="dropdown-icon" />
          </li>
          <li
            onClick={() => setIsActive("/team")}
            className={`${isActive == "/team" && "active"}`}
          >
            <Link to="/team" className="link">
              Team
            </Link>
          </li>
          <li
            onClick={() => setIsActive("/career")}
            className={`${isActive == "/career" && "active"}`}
          >
            <Link to="/career" className="link">
              Career
            </Link>
          </li>
          <li
            onClick={() => setIsActive("/contact")}
            className={`${isActive == "/contact" && "active"}`}
          >
            <Link to="/contact" className="link">
              {" "}
              Contact Us{" "}
            </Link>
          </li>
          <li
            onClick={() => setIsActive("/blog")}
            className={`${isActive == "/blog" && "active"}`}
          >
            <Link to="/blog" className="link">
              {" "}
              Blog{" "}
            </Link>
          </li>
        </ul>
        <Link
          onClick={() => setIsActive("/getAppoinment")}
          to="/getAppoinment"
          className="link"
        >
          <Button text="Get Appoinment"></Button>
        </Link>
      </div>

      {isHovered && (
        <div
          className="card-containers"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="card_container">
            {cardData.map((item, index) => (
              <Card key={index} src={item.src} text={item.text}></Card>
            ))}
          </div>
        </div>
      )}
      <div className="navber-menu" onClick={toggleOn}>
        <IoMenu />
      </div>
    </div>
  );
};

export default Navber;
