"use client";
import React from "react";
import "./Footer.scss";

// Define types for footer items
interface FooterItem {
  id: number;
  title: string;
  arrItems: string[];
}

const Footer: React.FC = () => {
  const footerItems: FooterItem[] = [
    {
      id: 1,
      title: "Applications",
      arrItems: [
        "Applications",
        "Apparel",
        "Automotive",
        "Filtration",
        "Customised Nonwoven",
      ],
    },
    {
      id: 2,
      title: "Company",
      arrItems: ["Who We Are", "Global Competency", "Innovation", "ESG Impact"],
    },
    {
      id: 3,
      title: "More",
      arrItems: ["Contact Us", "Careers"],
    },
    {
      id: 4,
      title: "Follow Us",
      arrItems: ["LinkedIn"],
    },
  ];

  return (
    <div className="footerContainer">
      <div className="fTopCont">
        <img alt="Footer Logo" src="./Supreme_logos.png" />
      </div>
      <div className="fMidCont">
        {footerItems.map((item) => (
          <div key={item.id} className="fMidItem">
            <h1>{item.title}</h1>
            <div>
              <ul>
                {item.arrItems.map((ele) => (
                  <li key={ele}>{ele}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="fBotCont">
        <p>©2024. All Rights Reserved.</p>
        <p>Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.</p>
      </div>
    </div>
  );
};

export default Footer;
