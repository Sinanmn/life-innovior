import React from "react";
import "./WhatWeOfferServices.css";

import sofa2 from "../../assets/images/sofa2.jpg"
import chair from "../../assets/images/chair.jpg"
import building from "../../assets/images/building.jpg"
import ghum from "../../assets/images/ghum.jpg"
import Card from "../Card/Card.jsx"


const WhatWeOffer = () => {
  const ht = "Getting you back in shape"
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
    <div className="whatweoffer_container_services pd">
      <h4>WHAT WE OFFER</h4>
      <h1>{ht}</h1>
      <div className="card_container_services">
        {cardData.map((item, index) => (
          <Card key={index} src={item.src} text={item.text}></Card>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
