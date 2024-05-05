import { create } from "zustand";

interface OutputState {
  outputState: string;
  setOutputState: (result: string) => void;
}

export const useOutputState = create<OutputState>((set) => ({
  outputState: "Please compile to see output!!!",
  setOutputState: (result) => set({ outputState: result }),
}));
