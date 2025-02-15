import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      listBookOri: [],
      dataPayment: [],
      totalPrice: 0,

      resetFormPayment: () => set({dataPayment: [], totalPrice: 0}),

      addPayment: (book) =>
        set((state) => ({
          dataPayment: [...state.dataPayment, book],
          totalPrice: state.dataPayment.reduce((total,item) => total + item.price, 0) + book.price
        })),

      addSales: (newBook) =>
        set((state) => ({
          listBookOri: [...state.listBookOri, newBook],
        })),

      updateBook: (updatedBook) =>
        set((state) => ({
          dataPayment: state.dataPayment.map((book) =>
            book.id === updatedBook.id ? updatedBook : book
          ),
        })),

      deleteBook: (id) =>
        set((state) => ({
          dataPayment: state.dataPayment
          .filter((book) => book.id !== id)
          .map((book) => ({ ...book, inStock: false })
          ),
          listBookOri: state.listBookOri.map((book) =>
            book.id === id && book.inStock !== false
              ? { ...book, inStock: false }
              : book
          ),
        })),
       
        updatedTotalPrice: () =>
            set((state) => ({
                totalPrice: state.dataPayment.reduce((total,item) => total + item.price, 0),
            })),

      checkoutPayment: (id) => {
        set((state) => ({
          dataPayment: state.dataPayment.map((book) =>
            book.id === id ? { ...book, inStock: true } : book
          ),
          listBookOri: state.listBookOri.map((book) =>
            book.id === id && book.inStock !== true
              ? { ...book, inStock: true }
              : book
          ),
        }));
      },
    }),
    {
      name: "my_app_data_payment",
    }
  )
);

window.useStore = useStore;

export default useStore;
