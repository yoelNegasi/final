import React, { Component } from "react";

class Pet extends Component {
  render() {
    return (
      <div className="pet">
        <h1 className="dif">Pet Care</h1>
        <div>
          <h1>Pet Walker</h1>
          <p>
            If you have an active pet that needs exercise during the day,
            consider hiring a pet walker. They can provide refills of water or
            food as well as offer some companionship for your pet while you are
            away.
          </p>
        </div>
        <div>
          <h1>Pet sitting at your home</h1>
          <p>
            This is often a great option for cats, bunnies or guinea pigs who
            don't need such intensive daily care, or pets who like a familiar
            environment and don't need to take long walks.
          </p>
        </div>
        <div></div>
      </div>
    );
  }
}

export default Pet;
