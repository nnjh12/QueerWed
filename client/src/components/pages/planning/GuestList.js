import React, { Fragment } from "react";
import Guests from "../../guests/Guests";
import GuestForm from "../../guests/GuestForm";
import GuestFilter from "../../guests/GuestFilter";
import "../../../styles/guest/guestList.css";
import Nav from "../../layout/Nav"
import Container from "../../layout/Container"
import PageImage from "../../layout/PageImage"


const GuestList = () => {
  return (
    <Fragment>
      <Nav />
      <Container>
        <PageImage 
         title="Manage My Guest List"
         src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_600,q_75,w_1440/v1/clients/palmsprings/plan_the_ultimate_lgbt_wedding_social_web_e454f3e7-44f4-43bb-a0b6-7e751d7d082e.jpg"/>
        <div className="guest-list-container">
          <div className="guest-list-form">
            <GuestForm />
            <div className="guest-list-display">
              <GuestFilter />
              <h3 className="guest-list-description">Guest List:</h3>
              <Guests />
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default GuestList;
