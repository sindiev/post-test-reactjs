import React from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber } from "primereact/inputnumber";

function Form() {
  return (
    <div className="App">
      <Card title="Sell Your Book!">
        <i
          className="pi pi-shop"
          style={{ fontSize: "2rem", paddingBottom: 20 }}
        ></i>
        <p className="m-0">
          <div className="flex flex-column gap-2 text-left mb-4">
            <label className="Font" htmlFor="username">
              Seller Name
            </label>
            <InputText id="username" aria-describedby="username-help" />
          </div>
          <div className="flex flex-column gap-2 text-left mb-4">
            <label className="Font" htmlFor="username">
              Bank Account
            </label>
            <InputText maxLength={25} id="username" aria-describedby="username-help" />
          </div>
          <div className="flex flex-column gap-2 text-left mb-4">
            <label className="Font" htmlFor="username">
              Phone Number
            </label>
            <InputText maxLength={13} id="username" aria-describedby="username-help" />
            <small id="username-help">
              Enter your Number registered on Whatsapp.
            </small>
          </div>
          <div className="flex flex-column gap-2 text-left mb-4">
            <label className="Font" htmlFor="username">
              Title
            </label>
            <InputText id="username" aria-describedby="username-help" />
          </div>
          <div className="flex flex-column gap-2 text-left mb-4">
            <label className="Font" htmlFor="username">
              Writer
            </label>
            <InputText id="username" aria-describedby="username-help" />
          </div>
          <div className="flex flex-column gap-2 text-left mb-4">
            <label className="Font" htmlFor="username">
              Price
            </label>
            <InputNumber id="username" aria-describedby="username-help" />
          </div>
          <div className="flex flex-column gap-2 text-left mb-4">
            <label className="Font" htmlFor="username">
              Condition Rate
            </label>
            <InputText maxLength={1}id="username" aria-describedby="username-help" />
            <small id="username-help">Exp. Input 3</small>
          </div>
          <div className="flex flex-column gap-2 text-left mb-4">
            <label className="Font" htmlFor="username">
              Summary
            </label>
            <InputTextarea maxLength={100} id="username" aria-describedby="username-help" />
          </div>
          <div className="flex flex-column gap-2 text-left mb-4">
            <label className="Font" htmlFor="username">
              Photos URL
            </label>
            <InputText id="username" aria-describedby="username-help" />
          </div>
          <Button className="Button" label="Submit" icon="pi pi-check" />
        </p>
      </Card>
    </div>
  );
}

export default Form;
