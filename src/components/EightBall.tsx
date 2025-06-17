import { useState } from "react";
import { positiveAnswers, neutralAnswers, negativeAnswers} from "../utils/quotes";

function EightBall() {

  const [question, setQuestion] = useState<string>("");

  // Combine the arrays
  const combinedArray: string[] = positiveAnswers.concat(
    neutralAnswers,
    negativeAnswers
  );

  // Get a random index from the combined arrays
  const randomIndex: number = Math.floor(Math.random() * combinedArray.length);

  return (
    <>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <div>{combinedArray[randomIndex]}</div>
    </>
  );
}

export default EightBall;
