import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMailBulk } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn , FaClock} from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";





const Footer = () => {
  return (
    <div className="footer_container ">
      <div className="footer_top pd">
        <div className="footer_top1">
          <img src={logo} /><br/><br/>
          <p>
            Lifeinnovior is a mental health service provider, a corporate social
            responsibility brand of Goinnovior Limited.
          </p>
        </div>
        <div className="footer_top2">
          <h3>Office</h3><br/>
          <p>
            House - 774, Road - 11, Avenue - 02, Mirpur DOHS, Dhaka - 1216,
            Bangladesh.
          </p>
          <br/>
          <p className="colorfull">
            <BsFillTelephoneFill className="color-icon" /> &nbsp;
            01832383716
          </p>
          <p className="colorfull">
            <FaMailBulk className="color-icon"/> &nbsp;
            smnmail12@gmail.com
          </p>
        </div>
        <div className="footer_top3">
          <h3>Office Hour</h3> <br/>
          <p>Saturday – Thursday</p>
          <p className="colorfull">
            <FaClock className="color-icon"/>
            &nbsp;9.00am - 7.00pm
          </p>
        </div>
        <div className="footer_top4">

          <h3>Follow Us</h3>
          <div className="social-media-container">
           <div className="social-media"><FaFacebookF />
           </div>
           <div className="social-media"><FaTwitter />
           </div>
           <div className="social-media"><FaLinkedinIn />
           </div>
           <div className="social-media"><FaInstagram />
           </div>
          </div>
        </div>
      </div>

      <div className="footer_bottom">Copyright &copy; 2023 Lifeinnovior. A CSR Initiative of Goinnovior Limited.</div>
    </div>
  );
};

export default Footer;
