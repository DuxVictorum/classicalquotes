let button = document.querySelector("#quoteButton");
let quote = document.querySelector("#quote");
let testQuote = `Arms and the man I sing, who first made way,
  predestined exile, from the Trojan shore
  to Italy, the blest Lavinian strand.
  - Vergil, Aeneid 1.1-3`;

button.addEventListener("click", () => {
  quote.innerText = testQuote;
  quote.style.fontSize = "1.2rem";
});
