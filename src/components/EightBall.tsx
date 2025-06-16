import { useState, useEffect} from "react";
import Quotes from "./Quotes";

function EightBall(
  // Parameters (Placeholders) for the three defined arrays
  positiveAnswers: string[],
  neutralAnswers: string[],
  negativeAnswers: string[]
) {
  let question: string = (
    document.getElementById("question") as HTMLInputElement
  ).value;

  // Combine the arrays
  const combinedArray: string[] = positiveAnswers.concat(
    neutralAnswers,
    negativeAnswers
  );

  // Get a random index from the combined arrays
  const randomIndex: number = Math.floor(Math.random() * combinedArray.length);

  return combinedArray[randomIndex];
}

export default EightBall;