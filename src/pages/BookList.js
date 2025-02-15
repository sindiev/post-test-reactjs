import React, {useState} from "react";
import "primeicons/primeicons.css";
import { InputTextarea } from "primereact/inputtextarea";
import { DataView } from "primereact/dataview";
import { Rating } from "primereact/rating";
import { classNames } from "primereact/utils";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import useStore from "../stores/zustand/store";

export default function BookList() {
  const { listBookOri } = useStore();
  const [searchBook, setSearchBook] = useState("");

  const bookFilteredByStock = listBookOri.filter((book) => book.inStock === false);

  const filteredBooks = bookFilteredByStock.filter((item) =>
    item.title.toLowerCase().includes(searchBook.toLowerCase())
  );

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
            className="w-9 sm:w-16rem xl:w-7rem shadow-2 block xl:block mx-auto border-round"
            src={item.image}
            alt={item.title}
          />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-base font-bold text-900">{item.title}</div>
              <div className="text-sm text-700">{item.writer}</div>
              <Rating value={item.condition} readOnly cancel={false}></Rating>
              <div className="text-justify text-sm text-700">
                {item.summary}
              </div>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <span className="text-base font-semibold">Rp{item.price}</span>
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

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/payment");
  };

  return (
    <div className="App-form">
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 22 }}
      >
        <div className="Font-big">Let's search here!</div>
        <i
          className="pi pi-search"
          style={{ fontSize: "18px", paddingLeft: 2 }}
        ></i>
      </div>
      <div
        style={{
          marginBottom: 75,
          display: "flex",
          gap: "5px",
          justifyContent: "center",
        }}
      >
        <InputTextarea
          value={searchBook}
          onChange={(e) => setSearchBook(e.target.value)}
          style={{
            borderRadius: 30,
            borderColor: "#1F3F65",
            borderWidth: 2,
            marginRight: 6,
          }}
          autoResize
          rows={1}
          cols={60}
        />
        <Button
          className="Button-bag"
          icon="pi pi-shopping-bag"
          onClick={handleNavigate}
        />
      </div>
      <div className="card">
        <DataView value={filteredBooks} listTemplate={listTemplate} emptyMessage="No books available today! Why not sell yours?"/>
      </div>
    </div>
  );
}
