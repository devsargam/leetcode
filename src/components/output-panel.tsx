"use client";
import { useOutputState } from "@/store/use-output";

export const OutputPanel = () => {
  const outputState = useOutputState((state) => state.outputState);

  return <>{outputState}</>;
};
