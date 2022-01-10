import quotes from "./classicalQuotes.js";

let question = document.querySelector("#question");
let button = document.querySelector("#quoteButton");
let quote = document.querySelector("#quote");

button.addEventListener("click", () => {
  let randQuote = Math.floor(Math.random() * quotes.length);
  if (question.value === "") {
    quote.innerText = "You have to ask a question first, that's how it works.";
  } else {
    quote.innerText = quotes[randQuote];
    quote.style.fontSize = "1.2rem";
  }
});
