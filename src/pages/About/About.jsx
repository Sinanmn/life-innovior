import React from "react";
import Banner from "../../components/Banner/Banner.jsx";
import pic from "../../assets/images/likha.jpg";
import sofa2 from "../../assets/images/sofa2.jpg";
import WhoWeAre from "../Home/WhoWeAre/WhoWeAre.jsx";
import OurValue from "../../components/OurValue/OurValue.jsx";
import Psychologist from "./Psychologist/Psychologist.jsx";
import Appoinment from "../../components/Appoinment/Appoinment.jsx";
import writing from "../../assets/images/writing.jpg"
const About = () => {
  const ht = "A healthier choice for a healthier you."
  const pt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  return (
    <div>
      <Banner text="About us" bg_urls={pic}></Banner>
      <WhoWeAre></WhoWeAre>
      <OurValue bg_url={sofa2}></OurValue>
      <Psychologist hidebutton={true} pp1={true} pp2={false} ></Psychologist>
      <Appoinment bg={writing} h1text={ht} ptext={pt}></Appoinment>
    </div>
  );
};

export default About;
