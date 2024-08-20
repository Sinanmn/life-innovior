import React from "react";
import "./GetAppoinment.css";
import Banner from "./../../components/Banner/Banner";
import diary from "../../assets/images/diary.jpg";
import GetInTouch from "../../components/GetinTouch/GetInTouch.jsx";
import likha2 from "../../assets/images/likha2.jpg"
import Appoinment from "../../components/Appoinment/Appoinment.jsx";

const GetAppoinment = () => {
    const t1 = "To lead a happy and healthy life, please stay with us.";
  return (
    <div>
      <Banner text="Appoinnments" bg_urls={diary}></Banner>
      <div className="container-appoinment">
        <div className="left-container">
          <h1>Book An Appointment</h1>
          <p>
            Thank you for choosing to book an appointment with us. Our team will
            get in touch with you shortly to confirm your appointment.
          </p>

          <div className="form">
            <div className="form-input">
              <p>Full Name</p>
              <input type="text" className="form-box"></input>
            </div>

            <div className="form-input">
              <p>Gender</p>
              <select>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>

            <div className="form-input">
              <p>Age</p>
              <input type="number" className="form-box"></input>
            </div>

            <div className="form-input">
              <p>Profession</p>
              <input type="text" className="form-box"></input>
            </div>

            <div className="form-input">
              <p>Location</p>
              <input type="text" className="form-box"></input>
            </div>

            <div className="form-input">
              <p>Appoinment Type</p>
              <select>
                <option>Online</option>
                <option>Offline</option>
              </select>
            </div>

            <div className="form-input">
              <p>Phone</p>
              <input type="text" className="form-box"></input>
            </div>

            <div className="form-input">
              <p>Email</p>
              <input type="text" className="form-box"></input>
            </div>

            <div className="form-input">
              <p>Preffered Appoinment Time</p>
              <select>
              <option value="">Morning (9am - 12pm)</option>
                <option value="">Afternoon (3pm - 5pm)</option>
                <option value="">Evening (7pm - 10pm)</option>
              </select>
            </div>

            <div className="form-input">
              <p>Preferred Appoinment Date</p>
              <input type="date" name="" id="" />
            </div>
          </div>

        <button>Submit</button>

        </div>
        <GetInTouch></GetInTouch>
      </div>
    
    <Appoinment bg={likha2} h1text={t1}></Appoinment>


    </div>
  );
};

export default GetAppoinment;
