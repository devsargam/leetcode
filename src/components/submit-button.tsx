"use client";

import { useEditorState } from "@/store/use-submission";
import { Button } from "./ui/button";

export const SubmitButton = () => {
  const editorState = useEditorState((state) => state.editorText);

  const handleClick = async () => {
    // TODO: Base64 encode the editor state
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_JUDGE0_ENDPOINT}/submissions?base64_encoded=true&wait=true`
    ).then((res) => res.json());

    console.log(data);
  };

  return <Button onClick={handleClick}>Submit</Button>;
};
