"use client";

import { useEditorState } from "@/store/use-submission";
import { Editor } from "@monaco-editor/react";
import { useEffect, useState } from "react";

export const CodeEditor = () => {
  const setEditorState = useEditorState((state) => state.setEditorText);
  const editorState = useEditorState((state) => state.editorText);

  useEffect(() => {
    // TODO: Handle this
  }, [editorState]);

  return (
    <Editor
      onChange={(text) => {
        if (!text) return;
        setEditorState(text);
      }}
      value={editorState}
      height="90vh"
      options={{
        fontSize: 20,
      }}
      theme="vs-dark"
      defaultLanguage="javascript"
      className="font-xl"
    />
  );
};
