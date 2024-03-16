function displayJoke(data) {
  fetch("https://api.chucknorris.io/jokes/random?category=dev")
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector(".quote");

      const quoteEl = document.createElement("p");
      quoteEl.classList.add("quote");
      //   const authorEl = document.createElement("p");
      //   authorEl.classList.add("author");

      quoteEl.textContent = data.value;
      //   authorEl.textContent = data.author;

      containerEl.appendChild(quoteEl);
      //   containerEl.appendChild(authorEl);
    });
}
displayJoke();

//https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale

//http://allaboutfrogs.org/funstuff/randomfrog.html
