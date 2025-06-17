import EightBall from "./EightBall";
import { negativeAnswers, neutralAnswers, positiveAnswers } from "../utils/quotes";

function Text() {
  // Attach submit event listener to form
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("eightBallForm") as HTMLFormElement;
    const answer = document.getElementById(
      "eightBallAnswer"
    ) as HTMLParagraphElement;

    form.addEventListener("submit", function (this: HTMLFormElement, event) {
      // Prevent page reload
      event.preventDefault();

      const eightBallAnswer = EightBall(
        [...positiveAnswers, ...neutralAnswers, ...negativeAnswers]
      );

      answer.textContent = eightBallAnswer;

      // Makes the text inside the form input and answer disappear after 5 seconds
      setTimeout(() => {
        this.reset();
        answer.textContent = "";
      }, 5000);
    });
  });
}

export default Text;
