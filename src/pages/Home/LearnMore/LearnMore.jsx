import React from "react";
import "./LearnMore.css";
import a1 from "../../../assets/images/a1.jpg";
import a2 from "../../../assets/images/a2.jpg";
import a3 from "../../../assets/images/a3.jpg";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom"

const LearnMore = () => {
  const articleData = [
    {
      src: a1,
      shortTitle: "Panic Attack",
      title: "Shining a Light on Panic Attacks: Awareness and Recovery",
      description:
        "Are you experiencing sudden feelings of fear and anxiety, accompanied by physical symptoms such as trembling, sweating, and rapid heartbeat? Do you find yourself avoiding…",
      name: "Sinan Mohammad Nahian",
      date: "13 May,2024",
    },
    {
      src: a2,
      shortTitle: "Anxiety",
      title: "How To Overcome Social Anxiety: 9 Proven Steps for Success",
      description:
        "Social anxiety, also known as social phobia, is a mental health disorder that affects millions of people worldwide. It is a chronic condition characterized by…",
      name: "Sinan Mohammad Nahian",
      date: "14 May,2024",
    },
    {
      src: a3,
      shortTitle: "Depression",
      title: "10 Powerful Tips To Overcome Depression: Embrace A Happier Life",
      description:
        "Depression is a common mental health issue that affects millions of people worldwide. It can cause feelings of sadness, hopelessness, and helplessness, making it difficult…",
      name: "Sinan Mohammad Nahian",
      date: "15 May,2024",
    },
  ];
  return (
    <div className="learnmore-container pd">
      <h4>learn more</h4>
      <h1>Read all our exclusive articles</h1>
      <div className="article-container">
        {articleData.map((item, index) => (
          <div className="article" key={index}>
            <div className="choto-box">{item.shortTitle}</div>
            <div className="article_image">
              <img src={item.src} />
            </div>
            <div className="article-details">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span>
                {item.name}&nbsp;&nbsp;&nbsp;&nbsp;{item.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      <Link to="/blog" className ="link">
      <Button text="Read All"></Button>
      </Link>

    </div>
  );
};

export default LearnMore;
