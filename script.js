import quotes from "./classicalQuotes.js";

let question = document.querySelector("#question");
let button = document.querySelector("#quoteButton");
let quoteIntro = document.querySelector("#quoteIntro");
let quoteContent = document.querySelector("#quoteContent");
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
let work = document.querySelector("#work");
let citation = document.querySelector("#citation");
quoteContent.style.display = "none";

let questionsList = [];

button.addEventListener("click", () => {
  let randQuote = Math.floor(Math.random() * quotes.length);
  if (question.value === "") {
    quoteContent.style.display = "none";
    quoteIntro.innerHTML =
      "<p>Please ask a question first, that's how this works.</p>";
  } else if (questionsList.includes(question.value)) {
    quoteContent.style.display = "none";
    quoteIntro.innerHTML =
      "<p>You've already asked that question. Did you not like your answer?</p>";
  } else {
    questionsList.push(question.value);
    quoteIntro.innerHTML = "<u>The ancient text says:</u>";
    quoteContent.style.display = "block";
    quoteContent.style.fontSize = "1.2rem";
    quote.innerText = quotes[randQuote].quote;
    author.innerText = quotes[randQuote].author;
    work.innerText = quotes[randQuote].work;
    work.style.fontStyle = "italic";
    citation.innerText = quotes[randQuote].citation;
  }
});
