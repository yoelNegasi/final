import axios from "axios";
import React, { Component } from "react";
import "./App.css";
class Service extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: [],
    };
    this.recive = this.recive.bind(this);
  }
  recive() {
    axios.get("http://localhost:3001/find").then((res) => {
      this.setState({ detail: res.data });
    });
  }
  deleteSpecific(passedId) {
    axios
      .delete("http://localhost:3001/delete", {
        data: {
          id: passedId,
        },
      })
      .then((res) => {
        console.log("response.data", res.data);
        this.recive();
      });
  }
  componentDidMount() {
    this.recive();
  }
  render() {
    console.log(this.state);
    let element = this.state.detail.map((el) => {
      return (
        <tr>
          <td>
            click to delete{" "}
            <button onClick={() => this.deleteSpecific(el._id)}>
              {el._id}
            </button>
          </td>
          <td>{el.first_name}</td>
          <td>{el.last_name}</td>
          <td>{el.address}</td>
          <td>{el.zip_code}</td>
          <td>{el.arrival_time}</td>
          <td>{el.phone}</td>
          <td>{el.email}</td>
        </tr>
      );
    });
    return (
      <div>
        <table>
          <tr>
            <th> id</th>
            <th>first name</th>
            <th>last name</th>
            <th>Address</th>
            <th>Zip Code</th>
            <th>Arrival Time</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>

          <tbody className="tb">{element}</tbody>
        </table>
      </div>
    );
  }
}

export default Service;
