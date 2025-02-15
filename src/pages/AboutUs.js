import React from "react";
import { Card } from "primereact/card";
import "primeicons/primeicons.css";
import imageMe from "../assets/photos/me.jpg"

function AboutUs() {
  return (
    <div className="App">
      <Card className="About-us">
        <i
          className="pi pi-user"
          style={{ fontSize: "2rem", paddingBottom: 28 }}
        ></i>
        <img
            style={{borderRadius: 500 , width: 100, height: 'auto' , display: 'block', margin: '0 auto', marginBottom: 25}}
            src={imageMe}
            alt="INI GUEH"
          />
          <div className="Font-big">Sindi Evinaditi</div>
          <div className="Font-med">System Analyst</div>
      </Card>
    </div>
  );
}

export default AboutUs;
