import EightBall from "./EightBall";
import Quotes from "./Quotes";

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
        Quotes.positiveAnswers,
        Quotes.neutralAnswers,
        Quotes.negativeAnswers
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
