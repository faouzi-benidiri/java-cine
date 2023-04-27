$(document).ready(function () {
  const apikey = "690de5bb";

  $("#movieForm").submit(function (event) {
    event.preventDefault();

    const movie = $("#search").val();
    const url = "http://www.omdbapi.com/?apikey=" + apikey + "&t=" + movie;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const result = `
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="${data.Poster}" class="img-fluid rounded-start" alt="${data.Title}">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${data.Title}</h5>
                    <p class="card-text">${data.Plot}</p>
                    <p class="card-text"><small class="text-muted">Directed by ${data.Director} | ${data.Genre} | ${data.Year}</small></p>
                  </div>
                </div>
              </div>
            </div>
          `;
        $("#result").html(result);
      })
      .catch((error) => console.log("Error: " + error));
  });
});
