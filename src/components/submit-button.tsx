"use client";

import { useEditorState } from "@/store/use-submission";
import { Button } from "./ui/button";
import { axiosBase } from "@/lib/axios";
import { useOutputState } from "@/store/use-output";

export const SubmitButton = () => {
  const editorState = useEditorState((state) => state.editorText);
  const setOutputState = useOutputState((state) => state.setOutputState);

  const handleClick = async () => {
    // TODO: Base64 encode the editor state
    const res = await axiosBase.post(
      "/submissions?base64_encoded=true&wait=true",
      {
        source_code: btoa(editorState),
        language_id: "63",
      }
    );

    setOutputState(atob(res.data.stdout));
  };

  return <Button onClick={handleClick}>Submit</Button>;
};
