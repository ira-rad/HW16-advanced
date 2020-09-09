import React, { Component } from "react";
import Contact from "./Contact";
import man from "./img/man.svg";
import unknown from "./img/question.svg";
import woman from "./img/girl.svg";
import "./Contacts.css";
import "./reset.css";

let contacts = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
  },
];

export default class Contacts extends Component {
  state = {
    contacts: [...contacts],
    search: "",
  };

  onChange(e) {
    const { checked } = e.target;
    this.setState({ checked });
  }

  handleSearchForm = (event) => {
    const { value } = event.target;
    this.setState({
      search: value,
    });
    this.setState({
      contacts: [
        ...contacts.filter((el) => {
          return (
            el.lastName
              .toLowerCase()
              .includes(event.target.value.toLowerCase()) ||
            el.firstName
              .toLowerCase()
              .includes(event.target.value.toLowerCase()) ||
            el.phone.includes(event.target.value)
          );
        }),
      ],
    });
  };

  getIcon(gender) {
    return gender === "female" ? woman : gender === "male" ? man : unknown;
  }

  render() {
    return (
      <div className="wrapper">
        <div className="search__wrapper">
          <input
            className="search"
            value={this.state.search}
            placeholder="Search"
            onChange={this.handleSearchForm}
          />
        </div>
        <div className="contacts__wrapper">
          {this.state.contacts.map((contact, index) => (
            <Contact
              key={index}
              firstName={contact.firstName}
              lastName={contact.lastName}
              phone={contact.phone}
              gender={this.getIcon(contact.gender)}
            />
          ))}
        </div>

        <div className="checkbox__wrapper"></div>
      </div>
    );
  }
}
