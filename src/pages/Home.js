import React from "react";
import "primeicons/primeicons.css";
import { Card } from "primereact/card";
import "primeicons/primeicons.css";

export default function Home() {
  return (
    <div className="Poster">
      <Card className="About-us">
          <div className="Font-big">Welcome!</div>
          <div className="Font-med">Shh… just pretend it’s an official poster.</div>
      </Card>
    </div>
  );
}
