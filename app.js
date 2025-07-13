const quote = document.getElementById("quote");
const author = document.getElementById("author");

const apiUrl = "https://api.quotable.io/random";
async function getquote(e) {
  const res = await fetch(e);
  const data = await res.json();

  console.log(data);

  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}
// getquote(apiUrl);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=Hello%20world" +
      quote.innerHTML +
      " - by " +
      author.innerHTML,
    "Tweet Window",
    "width=600, height=300"
  );
}
