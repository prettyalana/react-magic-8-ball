import { useState } from "react";
import { positiveAnswers, neutralAnswers, negativeAnswers } from "../utils/quotes";

function EightBall() {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  // Combine all answers
  const combinedAnswers = [...positiveAnswers, ...neutralAnswers, ...negativeAnswers];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Pick a random answer when the user submits
    const randomIndex = Math.floor(Math.random() * combinedAnswers.length);
    setAnswer(combinedAnswers[randomIndex]);

    // Clear question and answer after 5 seconds
    setTimeout(() => {
      setQuestion("");
      setAnswer("");
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask your question"
        required
      />
      <button type="submit">Ask the Eight Ball</button>
      <div>{answer}</div>
    </form>
  );
}

export default EightBall;
