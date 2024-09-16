import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Easy", "Better", "Secure"];

  return (
    <div className=" flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-bold text-neutral-600 dark:text-neutral-400">
        Creating Wallet With Wallx is <br />
        <FlipWords words={words} /> <br />

      </div>
    </div>
  );
}
