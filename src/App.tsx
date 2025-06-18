import { useState } from "react";
import { positiveAnswers, neutralAnswers, negativeAnswers } from "./utils/quotes";

function App() {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  // Combine all answers
  const combinedAnswers = [...positiveAnswers, ...neutralAnswers, ...negativeAnswers];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const randomIndex = Math.floor(Math.random() * combinedAnswers.length);
    setAnswer(combinedAnswers[randomIndex]);

    // Clear question and answer after 5 seconds
    setTimeout(() => {
      setQuestion("");
      setAnswer("");
    }, 5000);
  };

  return (
    <>
      <nav>
        <div className="logo-container">
          <a href="index.html" id="logo-link">
            <img
              src="src/assets/pexels-seraphina-howard-1056395852-31546127.jpg"
              alt="Pink 8 ball"
              id="logo"
            />
            Magic 8 Ball Oracle
          </a>
        </div>

        <ul className="links">
          <li><a href="#">link one</a></li>
          <li><a href="#">link two</a></li>
          <li><a href="#">link three</a></li>
        </ul>
      </nav>

      <div className="center-wrapper">
        <div className="header">
          <h1>Welcome to the Magic 8 Ball Oracle</h1>
        </div>

        <div className="magic-eight-ball-container">
          <img
            src="src/assets/pexels-seraphina-howard-1056395852-31546127.jpg"
            alt="Pink 8 ball"
            id="magic-eight-ball"
          />
        </div>
      </div>

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
    </>
  );
}

export default App;
