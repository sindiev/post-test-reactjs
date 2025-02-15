import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { classNames } from "primereact/utils";
import { Rating } from "primereact/rating";
import { DataView } from "primereact/dataview";
import useStore from "../stores/zustand/store";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Divider } from "primereact/divider";

export default function Payment() {
  const {
    dataPayment,
    addPayment,
    deleteBook,
    listBookOri,
    checkoutPayment,
    totalPrice,
    updatedTotalPrice,
    resetFormPayment,
  } = useStore();
  const [book, setBook] = useState("");
  const [isVisibility, setIsVisibility] = useState(false);

  useEffect(() => {
    setIsVisibility(dataPayment.length > 0);
  }, [dataPayment]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleCheckout = () => {
    if (book.id) {
      const isAdded = dataPayment.some((item) => item.id === book.id);
      if (isAdded) {
        alert("book already in cart!");
      } else {
        addPayment(book);
        setBook({
          title: "",
          writer: "",
          price: "",
          condition: "",
          summary: "",
        });
      }
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete Success!",
      text: "We put the book back on shelf :(",
      icon: "success",
      draggable: true,
      showConfirmButton: false,
    }).then(() => {
      deleteBook(id);
      updatedTotalPrice();
    });
  };

  const navigate = useNavigate();
  const handleCheckoutPayment = (arrayId) => {
    arrayId.forEach((id) => {
      checkoutPayment(id);
      Swal.fire({
        title: "Checkout Success!",
        icon: "success",
        draggable: true,
      }).then(() => {
        resetFormPayment()
        navigate("/bookList");
      });
    });
  };
  const arrayIdPayment = dataPayment.map((book) => book.id);

  const cardTemplate = (item, index) => {
    return (
      <div className="col-12" key={item.id}>
        <div
          className={classNames(
            "flex flex-column xl:flex-row xl:align-items-start p-4 gap-4",
            { "border-top-1 surface-border": index !== 0 }
          )}
        >
          <img
            className="w-9 sm:w-16rem xl:w-5rem shadow-2 block xl:block mx-auto border-round"
            src={item.image}
            alt={item.title}
          />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-lg font-bold text-900">{item.title}</div>
              <div className="text-base text-700">{item.writer}</div>
              <Rating value={item.condition} readOnly cancel={false}></Rating>
              <div className="text-justify text-lg text-700">
                {item.summary}
              </div>
            </div>
            <div className="Gap">
              <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                <span className="text-xl font-semibold">Rp{item.price}</span>
              </div>
              <Button
                className="Button-delete"
                icon="pi pi-trash"
                onClick={() => handleDelete(item.id)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const listTemplate = (i) => {
    if (!i || i.length === 0) return null;

    let list = i.map((i, index) => {
      return cardTemplate(i, index);
    });

    return <div className="grid grid-nogutter">{list}</div>;
  };

  const dropdownFiltered = listBookOri.filter((book) => book.inStock === false);

  return (
    <div className="App-split">
      <Card title="Lets Shopping!" className="Card-form">
        <i
          className="pi pi-shopping-bag"
          style={{ fontSize: "30px", paddingBottom: 20 }}
        ></i>
        <p className="m-0">
          <div className="flex flex-column gap-2 text-left mb-4">
            <label className="Font" htmlFor="username">
              Book Title
            </label>
            <Dropdown
              value={book}
              onChange={(e) => setBook(e.value)}
              options={dropdownFiltered}
              optionLabel="title"
              placeholder="Select a Title"
              className="w-full"
            />
          </div>
          <div className="flex flex-column gap-2 text-left mb-4">
            <label className="Font" htmlFor="username">
              Writer
            </label>
            <InputText
              disabled
              variant="filled"
              name="writer"
              value={book.writer}
              onChange={handleChange}
              id="username"
              aria-describedby="username-help"
            />
          </div>
          <div className="flex flex-column gap-2 text-left mb-4">
            <label className="Font" htmlFor="username">
              Condition Rate
            </label>
            <InputText
              disabled
              variant="filled"
              name="condition"
              value={book.condition}
              id="username"
              aria-describedby="username-help"
            />
          </div>
          <div className="flex flex-column gap-2 text-left mb-4">
            <label className="Font" htmlFor="username">
              Summary
            </label>
            <InputTextarea
              autoResize="true"
              disabled
              variant="filled"
              name="summary"
              value={book.summary}
              id="username"
              aria-describedby="username-help"
            />
          </div>
          <div className="flex flex-column gap-2 text-left mb-4">
            <label className="Font" htmlFor="username">
              Price (IDR)
            </label>
            <InputText
              disabled
              variant="filled"
              name="price"
              value={book.price}
              id="username"
              aria-describedby="username-help"
            />
          </div>
          <Button
            className="Button"
            label="Checkout"
            icon="pi pi-check"
            onClick={handleCheckout}
          />
        </p>
      </Card>

      <Card title="Shopping Cart" className="Card">
        <p className="mx-50">
          <div className="card">
            <DataView value={dataPayment} listTemplate={listTemplate} />
          </div>
          <Divider className="mt-100" />
          <div
            className="Font-big"
            style={{
              justifyContent: "right",
              paddingRight: 15,
              display: "flex",
            }}
          >
            Total Price:
            <div className="Font-med" style={{ paddingLeft: 5, paddingTop: 3 }}>
              Rp{totalPrice},00
            </div>
          </div>
        </p>
        <div>
          {isVisibility && (
            <Button
              className="Button"
              icon="pi pi-shopping-cart"
              onClick={() => handleCheckoutPayment(arrayIdPayment)}
            />
          )}
        </div>
      </Card>
    </div>
  );
}
