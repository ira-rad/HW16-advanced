import React from "react";
import "./Contacts";

const Contact = (props) => {
  return (
    <div className="contact">
      <div className="contact__name">
        <p className="name">{props.firstName}</p>
        <p className="last__name">{props.lastName}</p>
      </div>
      <div className="contact__num">
        <p className="phone">{props.phone}</p>
        <img className="gender" src={props.gender} alt="gender-img" />
      </div>
    </div>
  );
};

export default Contact;
