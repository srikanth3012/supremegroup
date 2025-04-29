"use client";
import React, { useState } from "react";
import "./Contact.scss";

interface ContactDetails {
  name: string;
  email: string;
  company: string;
  message: string;
}

const Contact: React.FC = () => {
  const [details, setDetails] = useState<ContactDetails>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(details);
  };

  return (
    <div className="contactCont">
      <h1>Get in touch</h1>
      <span className="enquire">For general enquiries</span>
      <div className="Wrapper">
        <div className="contactLCont">
          <div>
            <span className="title">Address:</span>
            <span>110, 16th Road, Chembur, Mumbai - 400071</span>
          </div>
          <div>
            <span className="title">Phone:</span>
            <span>+91 22 25208822</span>
          </div>
          <div>
            <span className="title">Email:</span>
            <span>info@supremegroup.co.in</span>
          </div>
        </div>

        <form className="contactRCont" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={details.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={details.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={details.company}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={details.message}
            onChange={handleChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
