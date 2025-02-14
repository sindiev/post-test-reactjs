import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
    persist((set) => ({
        dataPayment: [],

        updatePayment: (value) => set((state) => ({
            dataPayment: value
        })),
    }),
    {
        name: "my_app_data_payment",
    })
);

export default useStore;