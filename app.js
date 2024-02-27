let row = document.querySelector('.row')

fetch('https://api.tvmaze.com/shows')
    .then(response => {
        if (!response.ok) {
            throw new Error('Response is not ok');
        }
        return response.json()
    })
    .then(data => {
        data?.forEach(movie => {
            row.innerHTML +=
                `<div class="card col-3">
         <img src="${movie.image.medium}" class="card-img-top" alt="..." >
          <div class="card-body">
          <h5 class="card-title">${movie.name}</h5>     
          <p class="card-text">Premiere: ${movie.premiered}</p>
          </div>
           <ul class="list-group list-group-flush">
           <li class="list-group-item">IMDB Rating: ${movie.rating.average}</li>
          <li class="list-group-item">Genre: ${movie.genres}</li>
          <li class="list-group-item">Language: ${movie.language}</li>
           </ul>
            <div class="card-body">
          <a href="${movie.officialSite}" class="card-link">Go to website</a>
          <a href="carddetail.html?id=${movie.id}" class="card-link">Go to detail</a>
            </div>
        </div>`
        });
    })
    .catch(error => {
        console.error(error)
    });
    