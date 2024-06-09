import { create } from "zustand";

interface EditorState {
  editorText: string;
  setEditorText: (input: string) => void;
}

export const useEditorState = create<EditorState>((set) => ({
  editorText: "",
  setEditorText: (input) => set({ editorText: input }),
}));
