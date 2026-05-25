const target = new Date("January 20, 2027");

const today = new Date();

const diff = target - today;

const daysLeft = Math.ceil(diff / (1000*60*60*24));

document.getElementById("days").innerText = daysLeft;

const quotes = [
  "Discipline beats motivation.",
  "Future IITian loading...",
  "Every day matters.",
  "No excuses today.",
  "Consistency creates rank."
];

const randomQuote =
quotes[new Date().getDate() % quotes.length];

document.getElementById("quote").innerText =
randomQuote;
