const apikey = "";
const searchForm = document.querySelector("#movieForm");
const searchInput = document.querySelector("#search");
const resultDiv = document.querySelector("#result");
const cardTemplate = document.querySelector("#card-template");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const search = searchInput.value;
  const url = `http://www.omdbapi.com/?apikey=${apikey}&s=${search}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "False") {
        throw new Error(data.Error);
      }

      const movies = data.Search;
      resultDiv.innerHTML = "";

      movies.forEach((movie) => {
        const card = cardTemplate.content.cloneNode(true);
        card.querySelector("img").src = movie.Poster;
        card.querySelector(".card-title").textContent = movie.Title;
        card.querySelector(".card-text").textContent = movie.Type;
        card.querySelector(".text-muted").textContent = movie.Year;
        resultDiv.appendChild(card);
      });
    })
    .catch((error) => {
      resultDiv.innerHTML = `<p>Erreur : ${error.message}</p>`;
    });
});

// const cards = document.querySelectorAll(".images-container");

// let options = {
//   rootMargin: "-20% 0px",
//   threshold: 0,
// };

// function handleIntersect(entries) {
//   console.log(entries);

//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.style.opacity = 1;
//     }
//   });
// }

// const observer = new IntersectionObserver(handleIntersect, options);

// cards.forEach((card) => {
//   observer.observe(card);
// });
