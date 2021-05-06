import axios from "axios";
import React, { Component } from "react";
import "./App.css";

class Front extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      address: "",
      zip_code: "",
      date: "",
      arrival_time: "",
      phone: "",
      email: "",
    };
    this.fName = this.fName.bind(this);
    this.lName = this.lName.bind(this);
    this.address = this.address.bind(this);
    this.zip = this.zip.bind(this);
    this.date = this.date.bind(this);
    this.time = this.time.bind(this);
    this.phone = this.phone.bind(this);
    this.email = this.email.bind(this);
    this.submit = this.submit.bind(this);
  }
  fName(e) {
    this.setState({ first_name: e.target.value });
  }
  lName(e) {
    this.setState({ last_name: e.target.value });
  }
  address(e) {
    this.setState({ address: e.target.value });
  }
  date(e) {
    this.setState({ date: e.target.value });
  }
  zip(e) {
    this.setState({ zip_code: e.target.value });
  }
  time(e) {
    this.setState({ arrival_time: e.target.value });
  }
  phone(e) {
    this.setState({ phone: e.target.value });
  }
  email(e) {
    this.setState({ email: e.target.value });
  }
  submit(e) {
    axios
      .post("https://protected-anchorage-47052.herokuapp.com/info", this.state)
      .then((response) => {
        console.log(response.data);
      });
    alert(
      `We have Received your information Someone from our team will contact you by this  ${this.state.email} email`
    );
    this.setState({
      first_name: " ",
      last_name: " ",
      address: " ",
      zip_code: " ",
      arrival_time: " ",
      phone: " ",
      email: " ",
      date: " ",
    });
  }
  render() {
    return (
      <div className="front">
        <div>
          FIREST NAME {""}
          <input
            type="text"
            value={this.state.first_name}
            onChange={this.fName}
            required
          />
        </div>
        <br />
        <div>
          LAST NAME {""}
          <input
            type="text"
            value={this.state.last_name}
            required
            onChange={this.lName}
          />
        </div>
        <br />
        <div>
          ADDRESS {""}
          <input
            type="text"
            value={this.state.address}
            onChange={this.address}
            required
          />
        </div>
        <br />
        <div>
          ZIPCODE {""}
          <input
            type="text"
            value={this.state.zip_code}
            onChange={this.zip}
            required
          />
        </div>
        <br />
        <div>
          DATE {""}
          <input
            type="date"
            value={this.state.date}
            onChange={this.date}
            required
          />
        </div>
        <br />
        <div>
          ARRIVAL TIME {""}
          <input
            type="time"
            value={this.state.arrival_time}
            onChange={this.time}
            required
          />
        </div>
        <br />
        <div>
          PHONE {""}
          <input
            type="tel"
            value={this.state.phone}
            onChange={this.phone}
            required
          />
        </div>
        <br />
        <div>
          EMAIL {""}
          <input
            type="email"
            value={this.state.email}
            onChange={this.email}
            required
          />
        </div>
        <br />

        <div>
          <button className="bb" onClick={this.submit}>
            <b>Submit</b>
          </button>
        </div>

        <br />
        <br />
      </div>
    );
  }
}

export default Front;
