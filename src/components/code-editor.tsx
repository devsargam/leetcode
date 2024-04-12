"use client";

import { Editor } from "@monaco-editor/react";
import { useEffect, useState } from "react";

export const CodeEditor = () => {
  const [editorState, setEditorState] = useState("");

  useEffect(() => {
    // TODO: Handle this
    console.log(editorState);
  }, [editorState]);

  return (
    <Editor
      onChange={(text) => {
        if (!text) return;
        setEditorState(text);
      }}
      height="100vh"
      theme="vs-dark"
      defaultLanguage="javascript"
      defaultValue="// some comment"
    />
  );
};
