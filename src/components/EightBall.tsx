import { useState } from "react";
import {
  positiveAnswers,
  neutralAnswers,
  negativeAnswers,
} from "../utils/quotes";

function EightBall() {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  // Combine all answers
  const combinedAnswers = [
    ...positiveAnswers,
    ...neutralAnswers,
    ...negativeAnswers,
  ];

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
    <div className="bottom-wrapper">
      <div className="question-container">
        <form id="eightBallForm" onSubmit={handleSubmit}>
          <label htmlFor="question">
            <h2>What is your question?</h2>
          </label>
          <div className="input-container">
            <input
              type="text"
              id="question"
              placeholder=" Ask a question..."
              required
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button type="submit">Ask</button>
          </div>
        </form>
      </div>

      <div className="answer-container">
        <p id="eightBallAnswer">{answer}</p>
      </div>
    </div>
  );
}

export default EightBall;
