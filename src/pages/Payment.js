import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import { Dropdown } from "primereact/dropdown";
import { BookService } from "../stores/data/BookService";
import { InputTextarea } from "primereact/inputtextarea";
import { classNames } from "primereact/utils";
import { Rating } from "primereact/rating";
import { DataView } from "primereact/dataview";

export default function Payment() {
  const [books, setBooks] = useState(null);
  const [book, setBook] = useState({
    id: "",
    image: "",
    title: "",
    writer: "",
    price: "",
    condition: "",
    summary: "",
    seller: "",
    noRek: "",
    noHp: "",
    inStock: false,
  });

  useEffect(() => {
    BookService.getList().then((data) => setBooks(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

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
            className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
            src={item.image}
            alt={item.title}
          />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{item.title}</div>
              <div className="text-lg text-700">{item.writer}</div>
              <Rating value={item.condition} readOnly cancel={false}></Rating>
              {/* <div className="flex align-items-center gap-3">
                  <Tag
                    value={product.inventoryStatus}
                    severity={getSeverity(item)}
                  ></Tag>
                </div> */}
              <div className="text-left text-lg text-700">{item.summary}</div>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <span className="text-2xl font-semibold">Rp{item.price}</span>
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

  return (
    <div className="App-split">
      <Card title="Lets Shopping!" className="Card">
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
              options={books}
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
              autoResize
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
          <Button className="Button" label="Checkout" icon="pi pi-check" />
        </p>
      </Card>

      <Card title="......" className="Card">
        <p className="mx-50">
          <div className="card">
            <DataView listTemplate={listTemplate} />
          </div>
        </p>
      </Card>
    </div>
  );
}
