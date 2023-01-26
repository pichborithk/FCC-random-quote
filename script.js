const button = document.getElementById('new-quote');
let text = document.getElementById('text');
let author = document.getElementById('author');

const colors = [
  '#AAE3E2',
  '#D9ACF5',
  '#645CBB',
  '#00425A',
  '#BFDB38',
  '#FC7300',
  '#301E67',
  '#F55050',
  '#8EA7E9',
  '#820000',
  '#03C988',
];

function random(array) {
  return Math.floor(Math.random() * array.length);
}

function pickColor(array) {
  return array[random(array)];
}

function setColor(array) {
  document.body.style.backgroundColor = pickColor(array);
}

function setQuote(quoteText, quoteAuthor) {
  text.textContent = quoteText;
  author.textContent = quoteAuthor;
}

function getQuote() {
  fetch(
    'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
  )
    .then((response) => response.json())
    .then((data) => {
      let quoteText = data.quotes[random(data.quotes)].quote;
      let quoteAuthor = data.quotes[random(data.quotes)].author;
      setQuote(quoteText, quoteAuthor);
    });
}

button.addEventListener('click', () => {
  setColor(colors);
  getQuote();
});

setColor(colors);

getQuote();
