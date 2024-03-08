import { create } from "zustand";

type ModalStoreType = {
  isOpen: boolean;
  id: string;
  onOpen: (id: string) => void;
  onClose: () => void;
};

export const ModalStore = create<ModalStoreType>((set) => ({
  isOpen: false,
  id: "",
  onOpen: (id) => set({ isOpen: true, id }),
  onClose: () => set({ isOpen: false }),
}));
