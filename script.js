document.getElementById("searchButton").addEventListener("click", function () {
  const movieTitle = document.getElementById("movieTitle").value;
  const apiKey = "347b74b5"; // Replace with your OMDB API key
  const url = `http://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "True") {
        displayMovieInfo(data);
      } else {
        displayError(data.Error);
      }
    })
    .catch((error) => console.error("Error:", error));
});

function displayMovieInfo(movie) {
  const movieInfo = document.getElementById("movieInfo");
  movieInfo.innerHTML = `
        <h2>${movie.Title}</h2>
        <p><strong>Year:</strong> ${movie.Year}</p>
        <p><strong>Plot:</strong> ${movie.Plot}</p>
        <img src="${movie.Poster}" alt="Poster of ${movie.Title}">
    `;
}

function displayError(error) {
  const movieInfo = document.getElementById("movieInfo");
  movieInfo.innerHTML = `<p class="error">${error}</p>`;
}
