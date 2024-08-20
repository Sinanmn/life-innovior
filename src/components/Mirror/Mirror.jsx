import React from "react";
import "./Mirror.css";
import { TiTick } from "react-icons/ti";

const Mirror = ({ number, text }) => {
  return (
    <div className="mirror">
      <div className="numbering">{number}</div>
      <ul>
        {text.map((value, index) => (
          <li key={index}>
            <TiTick className="tick_icon" />
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mirror;
