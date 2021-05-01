import React, { Component } from "react";
import "./App.css";

class Child extends Component {
  render() {
    return (
      <div className="child">
        <h1 className="dif">child care</h1>
        <h1>we see what you see in your child</h1>
        <div>
          <p>
            Children are provided with instruction that promotes an interest in
            art, language, math, music, and building relationships. With small
            preschool class sizes that ensure more individualized attention, we
            are confident that your child will thrive in our award-winning
            preschool programs, preparing them for our private elementary school
            curriculum and private middle school at West Valley Middle School.
            Each of our programs at Action Day Primary Plus preschool are
            centered on promoting the development of the whole child. We seek to
            provide our families with opportunities to indulge in creative
            outlets that encourage exploration and self-discovery. As such, we
            offer a variety of extracurricular programs in 3 Bay Area dance
            studios, music, gymnastics, and children’s sports programs, many of
            which are available to children eighteen-months and older.
          </p>
        </div>
        <div>
          <h1>Always on the look out</h1>
          <p>
            Between a system of cameras and door alarms on all exterior doors,
            our entire school is regularly monitored in comprehensive fashion.
            Staff and parents can see a multi-room display in the lobby, which
            shows a closed-circuit feed of what’s happening in classrooms, on
            the playground, and throughout the school. We pride ourselves on
            maintain a safe, secure school environment—and providing peace of
            mind to all our families.
          </p>
        </div>
        <div>
          <h1>Sleeping Safely</h1>
          <p>
            During naps, the lights are never turned off. To ensure nap time
            safety, children in cribs are always under visual contact and
            listened to. Children sleep on their backs with age-appropriate
            bedding.
          </p>
        </div>
        <div>
          <h1>Safe FOOD STANDARDS</h1>
          <p>
            Our Grow Fit menu options (aside from jarred food or infant cereal)
            are planned by a registered dietitian nutritionist, to ensure
            healthy food options for growing little ones. Food is prepared
            on-premises, in our kitchen, while we follow strict standards to cut
            food to appropriate sizes, based on age group. Staff members
            supervise all meals and snack times, to make sure our children are
            eating healthy—and safely.
          </p>
        </div>
      </div>
    );
  }
}

export default Child;
