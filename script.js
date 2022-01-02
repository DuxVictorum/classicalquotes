let button = document.querySelector("#quoteButton");
let quote = document.querySelector("#quote");

button.addEventListener("click", () => {
  quote.innerText = "Avoid evil, do what is good.";
  quote.style.fontSize = "25px";
});
