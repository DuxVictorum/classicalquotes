import quotes from "./classicalQuotes.js";

// Initializing DOM variables
let question = document.querySelector("#question");
let button = document.querySelector("#quoteButton");
let quoteIntro = document.querySelector("#quoteIntro");
let quoteContent = document.querySelector("#quoteContent");
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
let work = document.querySelector("#work");
let citation = document.querySelector("#citation");

let questionsList = [];

// Quote content begins hidden until button is pressed
quoteContent.style.display = "none";

// Event listener
button.addEventListener("click", () => {
  // Chooses one of the quotes at random
  let randQuote = Math.floor(Math.random() * quotes.length);

  // If user enters nothing, error message appears.
  if (question.value === "") {
    quoteContent.style.display = "none";
    quoteIntro.innerHTML =
      "<p>Please ask a question first, that's how this works.</p>";
    // If user enters the same question twice, a reminder appears to ask a new question.
  } else if (questionsList.includes(question.value)) {
    quoteContent.style.display = "none";
    quoteIntro.innerHTML =
      "<p>You've already asked that question.<br><br>Did you not like your answer?</p>";
    // If user asks a new question, it is added to questionList and a new quote is displayed.
  } else {
    questionsList.push(question.value);
    quoteIntro.innerHTML = "<u>The ancient text says:</u>";
    quoteContent.style.display = "inline-block";
    quoteContent.style.fontSize = "1.2rem";
    quote.innerText = quotes[randQuote].quote;
    author.innerText = quotes[randQuote].author;
    work.innerText = quotes[randQuote].work;
    work.style.fontStyle = "italic";
    citation.innerText = quotes[randQuote].citation;
  }
});
