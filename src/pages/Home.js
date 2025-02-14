import React, { useEffect, useState } from "react";
import { FilterMatchMode } from "primereact/api";
import "primeicons/primeicons.css";
import { InputTextarea } from "primereact/inputtextarea";
import { DataView } from "primereact/dataview";
import { BookService } from "../stores/data/BookService";
import { Rating } from "primereact/rating";
import { classNames } from "primereact/utils";

export default function Home() {
  return (
    <div className="App">
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 22 }}
      >
        <h2>Home!</h2>
      </div>
    </div>
  );
}
