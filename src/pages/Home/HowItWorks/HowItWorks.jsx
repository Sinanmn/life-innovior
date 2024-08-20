import React from "react";
import "./HowItWorks.css";
import Mirror from "../../../components/Mirror/Mirror.jsx";

const HowItWorks = () => {
  const mirrorData = [
    {
      number: 1,
      name: [
        'Depression',
        'Anxiety',
        'Stress',
        'Panic Attack',
        'Obsessive Compulsive Disorder (OCD)',
        'Post Traumatic Stress Disorder (PTSD)',
        'Social Anxiety Disorder',
        'Specific Phobia',]
      
    },
    {
      number: 2,
      name: [
        'Mood Disorder',
        'Eating Disorder',
        'Impulse Control & Addiction Disorder',
        'Personality Disorder',
        'Adjustment Disorder',
        'Sexual & Gender Disorder',
        'Anger Management Problem',
        'Adjustment Problem',
        'Bipolar Disorder']
    },
    {
      number: 3,
      name: [
        'Insumonia',
        'Teenage Behavior Problem',
        'Child Behavior Problem',
        'Career Related Problem',
        'Educational Counseling',
        'Relationship Problem',
        'Somatic Symptom Disorder',
        'Schizophrenia']
    },
  ];
  return (
    <div className="howitworks_container pd">
      <h5>HOW IT WORKS</h5>
      <h1>Problem We Are Addressing</h1>
      <div className="mirror_container">
        {mirrorData.map((item, index) => (
          <Mirror key={index} number={item.number} text={item.name} />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
