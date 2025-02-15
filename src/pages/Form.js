import React, { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber } from "primereact/inputnumber";
import useStore from "../stores/zustand/store";
import Swal from "sweetalert2";

function Form() {
  const { addSales , listBookOri } = useStore();
  const [ setNewBooks ] = useState([]);
  const [newBook, setNewBook] = useState({
    id:"",
    title: "",
    writer: "",
    price: 0,
    condition: "",
    summary: "",
    seller: "",
    noRek: "",
    noHp: "",
    image: "",
    inStock: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevNewBook) => ({
      ...prevNewBook,
      [name]: value,
    }));
  };

  const handleChangeInputNum = (name, value) => {
    setNewBook((prevNewBook) => ({
      ...prevNewBook,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const bookSubmit = {
      id: listBookOri.length + 1,
      title: newBook.title,
      writer: newBook.writer,
      price: newBook.price,
      condition: newBook.condition,
      summary: newBook.summary,
      seller: newBook.seller,
      noRek: newBook.noRek,
      noHp: newBook.noHp,
      image: newBook.image,
      inStock: false,
    };

    addSales(bookSubmit);

    setNewBook({
      title: "",
      writer: "",
      price: "",
      condition: "",
      summary: "",
      seller: "",
      noRek: "",
      noHp: "",
      image: "",
    });
    Swal.fire({
      title: "Thank You",
      text: "Let us take care of your book :)",
      icon: "success",
      draggable: true,
      showConfirmButton: false,
    })
  };

  return (
    <div className="App-form">
      <Card title={<span className="Font-big">Sell Your Book!</span>}>
        <i
          className="pi pi-shop"
          style={{ fontSize: "25px", paddingBottom: 20 }}
        ></i>
        <p className="m-0">
          <div className="flex flex-column gap-2 text-left mb-4">
            <label className="Font" htmlFor="seller">
              Seller Name
            </label>
            <InputText
              name="seller"
              className="Font-med"
              value={newBook.seller}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-column gap-2 text-left mb-4">
            <label className="Font" htmlFor="noRek">
              Bank Account
            </label>
            <InputText
              onChange={handleChange}
              maxLength={25}
              name="noRek"
              className="Font-med"
              value={newBook.noRek}
            />
          </div>
          <div className="flex flex-column gap-2 text-left mb-4">
            <label className="Font" htmlFor="noHp">
              Phone Number
            </label>
            <InputText
              onChange={handleChange}
              maxLength={13}
              name="noHp"
              className="Font-med"
              value={newBook.noHp}
            />
            <small id="username-help">
              Enter your Number registered on Whatsapp.
            </small>
          </div>
          <div className="flex flex-column gap-2 text-left mb-4">
            <label className="Font" htmlFor="title">
              Title
            </label>
            <InputText
            className="Font-med"
              name="title"
              value={newBook.title}
              aria-describedby="username-help"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-column gap-2 text-left mb-4">
            <label className="Font" htmlFor="writer">
              Writer
            </label>
            <InputText
              name="writer"
              value={newBook.writer}
              onChange={handleChange}
              className="Font-med"
            />
          </div>
          <div className="flex flex-column gap-2 text-left mb-4">
            <label className="Font" htmlFor="price">
              Price
            </label>
            <InputNumber
            className="Font-med"
              name="price"
              value={newBook.price}
              onValueChange={(e) => handleChangeInputNum("price", e.value)}
            />
          </div>
          <div className="flex flex-column gap-2 text-left mb-4">
            <label className="Font" htmlFor="condition">
              Condition Rate
            </label>
            <InputText
            className="Font-med"
              onChange={handleChange}
              maxLength={1}
              name="condition"
              value={newBook.condition}
            />
            <small id="condition-help">Exp. Input 3</small>
          </div>
          <div className="flex flex-column gap-2 text-left mb-4">
            <label className="Font" htmlFor="summary">
              Summary
            </label>
            <InputTextarea
            className="Font-med"
              onChange={handleChange}
              maxLength={250}
              name="summary"
              value={newBook.summary}
            />
          </div>
          <div className="flex flex-column gap-2 text-left mb-4">
            <label className="Font" htmlFor="username">
              Photos URL
            </label>
            <InputText
            className="Font-med"
              onChange={handleChange}
              name="image"
              value={newBook.image}
            />
          </div>
          <Button
            className="Button"
            onClick={handleSubmit}
            label="Submit"
            icon="pi pi-check"
          />
        </p>
      </Card>
    </div>
  );
}

export default Form;
