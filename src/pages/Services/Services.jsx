import React from "react";
import "./Services.css";
import likha from "../../assets/images/likha.jpg";
import Banner from "../../components/Banner/Banner";
import WhatWeOfferServices from "../../components/WhatWeOfferServices/WhatWeOfferServices";
import WhyCountUsServices from "../../components/WhyCountUsServices/WhyCountUsServices"

import WhatTheySay from "./WhatTheySay/WhatTheySay";
import Appoinment from "../../components/Appoinment/Appoinment.jsx";
import handshake from "../../assets/images/handshake.jpg"

const Services = () => {
  // const serviceData = {
  //   padding: "0 400px",
  //   textAlign: "center",
  //   fontSize: "50px",
  //   lineHeight: 1.5,
  // };

  const text = (
    <>
      <strong>Looking for quality mental health care service, or counselor?</strong> 
      We offer confidential, experienced, and compassionate therapists. Our personalized to your individual needs service can help you heal and thrive.<strong> Contact us today for a consultation.</strong>
    </>
  );


   const ht = "A healthier choice for a healthier you."
  const pt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  return (
    <div>
      <Banner text="Services" bg_urls={likha}></Banner>
      {/* <WhatWeOfferServices h1Style={serviceData}></WhatWeOfferServices> */}
      <WhatWeOfferServices ></WhatWeOfferServices>
      <WhyCountUsServices pData={text}></WhyCountUsServices>
      <WhatTheySay></WhatTheySay>
      <Appoinment bg={handshake} h1text={ht} ptext={pt}></Appoinment>
    </div>
  );
};

export default Services;
